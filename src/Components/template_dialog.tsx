import { use, useEffect, useState, type RefObject } from 'react';
import './template_dialog.css';
import { CellId, Item, Section, StaringItem, Template } from '../constants';
import type { CellProps } from './cell';
import SectionArea from './section';
import Area from './area';
import DraggableItem from './draggable_item';
import ForwardIcon from '../assets/forward.png';
import { saveAreaTemplates } from '../api/firestore';


type TemplateDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;
    templates: Template[];
    isOpen: boolean;
    isViewingArea: boolean;
};

function TemplateDialog({ dialogRef, closeDialog, templates, isOpen, isViewingArea }: TemplateDialogProps) {


    const [isMobile, setIsMobile] = useState<boolean>(/Mobi|Android/i.test(navigator.userAgent));
    const [viewingTemplates, setViewingTemplates] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [allTemplates, setAllTemplates] = useState<Template[]>([]);

    useEffect(() => {
        setAllTemplates(templates);
    }, [templates]);



    useEffect(() => {
        if (!isOpen) return;
        console.log("Layout dialog opened, generating cells and sections", allTemplates);
        if (allTemplates.length === 0) return;
        if (allTemplates.length == 1) {
            setViewingTemplates([allTemplates[0]!.name]);

            return;
        }
        if (isMobile) {
            setViewingTemplates([allTemplates[0]!.name]);
            // generateTemplates([allTemplates[0]], items, sections);

        } else {
            setViewingTemplates([allTemplates[0]!.name, allTemplates[1]!.name]);
            // generateTemplates([templates[0], templates[1]], items, sections);
        }

    }, [isOpen, allTemplates]);

    useEffect(() => {
        const whichTemplates = allTemplates.filter((template) => viewingTemplates.includes(template.name));
        //sort whichTemplates by viewingTemplates order
        console.log("Viewing templates:", viewingTemplates);
        whichTemplates.sort((a, b) => viewingTemplates.indexOf(a.name) - viewingTemplates.indexOf(b.name));

        console.log("Generating templates for", whichTemplates.map((t) => t.name));


    }, [viewingTemplates, allTemplates]);


    return (<>
        <dialog ref={dialogRef} className="template-dialog">
            <div className="template-dialog-div" >
                <h2>Templates</h2>
                <div className='templates'>

                    {allTemplates.length > 1 && allTemplates.filter((t) => !viewingTemplates.includes(t.name)).length > 0 && <img src={ForwardIcon} onClick={() => {

                        if (isMobile) {
                            const index = allTemplates.findIndex((t) => t.name === viewingTemplates[0]);
                            const nextIndex = (index - 1 + allTemplates.length) % allTemplates.length;
                            setViewingTemplates([allTemplates[nextIndex].name]);

                        } else {
                            setViewingTemplates((old) => {
                                // Find the index of the last (rightmost) template currently being viewed

                                const lastTemplateIndex = allTemplates.findIndex((t) => t.name === old[0]);
                                // Get the next template index
                                const nextIndex = (lastTemplateIndex - 1 + allTemplates.length) % allTemplates.length;

                                // Slide the window: remove first template, keep second, add next
                                return [allTemplates[nextIndex].name, old[0]];
                            });
                        }
                    }} className='back-mobile-areas' />}
                    {viewingTemplates.length === 0 && <div className='no-templates'>No templates available</div>}
                    {viewingTemplates.map((temp) => (
                        <div className='template'>
                            <img src={allTemplates.find((t) => t.name === temp)!.previewImage} alt={temp} className='template-preview' />
                            <h3>{temp}</h3>
                            <div className='template-actions'>
                                <button className='template-select-btn' onClick={() => {
                                    if (isViewingArea) {
                                        const urlParams = new URLSearchParams(window.location.search);
                                        const companyIdParam = urlParams.get('companyId');
                                        const areaIdParam = urlParams.get('areaId');
                                        window.location.href = `/LayItOut/Layout/?companyId=${companyIdParam}&areaId=${areaIdParam}&type=edit-template&templateId=${allTemplates.find((t) => t.name == temp)!.id}`
                                    } else {
                                        const selectedTemplate = allTemplates.find((t) => t.name === temp)!;
                                        const newTemplate = new Template({
                                            name: selectedTemplate.name,
                                            id: selectedTemplate.id,
                                            previewImage: selectedTemplate.previewImage,
                                            sections: selectedTemplate.sections.map((section) => {
                                                return new Section({
                                                    name: section.name,
                                                    cellId: new CellId({ x: section.cellId.x, y: section.cellId.y }),
                                                    cellsLong: section.cellsLong,
                                                    cellsTall: section.cellsTall,
                                                    startingItems: section.startingItems.map((item) => {
                                                        return new StaringItem({
                                                            cell: new CellId({ x: item.cell.x, y: item.cell.y }),
                                                            item: new Item({
                                                                id: item.item.id,
                                                                name: item.item.name,
                                                                icon: item.item.icon,
                                                                cellsLong: item.item.cellsLong,
                                                                cellsTall: item.item.cellsTall,
                                                                starterItem: item.item.starterItem,
                                                                moveable: item.item.moveable
                                                            })
                                                        });
                                                    })
                                                });
                                            })
                                        });
                                        //set window tempateName parameter to newTemplate.name
                                        const urlParams = new URLSearchParams(window.location.search);
                                        urlParams.set('templateName', newTemplate.name);
                                        window.location.search = urlParams.toString();
                                    }
                                }}>{isViewingArea ? "Edit" : "Select"}</button>
                                {isViewingArea && <button className='action-btn' onClick={() => {
                                    if (loading) return;

                                    setLoading(true);
                                    //remove template from templates
                                    const updatedTemplates = allTemplates.filter((t) => t.name !== temp);
                                    setAllTemplates(updatedTemplates);

                                    if (updatedTemplates.length == 1) {
                                        setViewingTemplates([updatedTemplates[0]!.name]);


                                    } else if (updatedTemplates.length == 0) {
                                        setViewingTemplates([]);
                                    } else {
                                        if (isMobile) {
                                            setViewingTemplates([updatedTemplates[0]!.name]);
                                            // generateTemplates([templates[0]], items, sections);

                                        } else {
                                            setViewingTemplates([updatedTemplates[0]!.name, updatedTemplates[1]!.name]);
                                            // generateTemplates([templates[0], templates[1]], items, sections);
                                        }
                                    }


                                    //save updated templates to firestore
                                    const urlParams = new URLSearchParams(window.location.search);
                                    const companyId = urlParams.get('companyId');
                                    const areaId = urlParams.get('areaId');
                                    saveAreaTemplates(companyId!, areaId!, updatedTemplates).then(() => {
                                        setLoading(false);

                                    });
                                }}>Delete</button>}
                            </div>

                        </div>
                    ))}
                    {allTemplates.length > 1 && allTemplates.filter((t) => !viewingTemplates.includes(t.name)).length > 0 && <img src={ForwardIcon} onClick={() => {
                        if (isMobile) {
                            const index = allTemplates.findIndex((t) => t.name === viewingTemplates[0]);
                            const nextIndex = (index + 1) % allTemplates.length;
                            setViewingTemplates([allTemplates[nextIndex].name]);

                        } else {
                            //get index of the last template in viewingTemplates


                            //remove the last template from viewingTemplates and add the next template
                            setViewingTemplates((old) => {
                                // Find the index of the last (rightmost) template currently being viewed

                                const lastTemplateIndex = allTemplates.findIndex((t) => t.name === old[old.length - 1]);
                                // Get the next template index
                                const nextIndex = (lastTemplateIndex + 1) % allTemplates.length;

                                // Slide the window: remove first template, keep second, add next
                                return [old[1], allTemplates[nextIndex].name];
                            });
                        }

                    }} className='forward-mobile-areas' />}
                </div>
                {isViewingArea && <><button className='action-btn' onClick={() => {
                    const urlParams = new URLSearchParams(window.location.search);
                    const companyIdParam = urlParams.get('companyId');
                    const areaIdParam = urlParams.get('areaId');
                    window.location.href = `/LayItOut/Layout/?companyId=${companyIdParam}&areaId=${areaIdParam}&type=create-template`
                }}>Create new Template</button> <br /></>}
                <br />
                <button className='action-btn' onClick={closeDialog}>Close</button>

                {loading && isOpen && (
                    <>

                        <div className="loader"></div>
                    </>
                )}
            </div>


        </dialog >

    </>

    );
}

export default TemplateDialog;