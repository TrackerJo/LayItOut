import { useEffect, useState, type RefObject } from 'react';
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
    isViewingArea;
};

function TemplateDialog({ dialogRef, closeDialog, templates, isOpen, isViewingArea }: TemplateDialogProps) {

    const [sections, setSections] = useState<Section[]>([]);
    // const [templates, setTemplates] = useState<Template[]>([...templates]);
    const [templateAreas, setTemplateAreas] = useState<{ width: number, height: number, templateName: string, cells: CellProps[][] }[]>([]);
    const cellSize = 5;
    const [items, setItems] = useState<Item[]>([]);
    const [isMobile, setIsMobile] = useState<boolean>(/Mobi|Android/i.test(navigator.userAgent));
    const [viewingTemplates, setViewingTemplates] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);





    useEffect(() => {
        if (!isOpen) return;
        console.log("Layout dialog opened, generating cells and sections", templates);
        if (templates.length === 0) return;
        if (templates.length == 1) {
            setViewingTemplates([templates[0]!.name]);

            return;
        }
        if (isMobile) {
            setViewingTemplates([templates[0]!.name]);
            // generateTemplates([templates[0]], items, sections);

        } else {
            setViewingTemplates([templates[0]!.name, templates[1]!.name]);
            // generateTemplates([templates[0], templates[1]], items, sections);
        }

    }, [isOpen, templates]);

    useEffect(() => {
        const whichTemplates = templates.filter((template) => viewingTemplates.includes(template.name));
        //sort whichTemplates by viewingTemplates order
        console.log("Viewing templates:", viewingTemplates);
        whichTemplates.sort((a, b) => viewingTemplates.indexOf(a.name) - viewingTemplates.indexOf(b.name));

        console.log("Generating templates for", whichTemplates.map((t) => t.name));


    }, [viewingTemplates]);

    function flattenCells(cells: CellProps[][]): CellProps[] {
        let flattenedCells: CellProps[] = [];

        cells.map((row) => flattenedCells = [...flattenedCells, ...row])

        return flattenedCells
    }

    function showItem(item: Item, viewingTemplates: string[]): boolean {
        if (templates.length == 1) return true
        const templatesViewing = templates.filter((t) => viewingTemplates.includes(t.name));
        console.log("Viewing templates", templatesViewing);
        for (const template of templatesViewing) {
            for (const section of template.sections) {
                if (section.startingItems.some((i) => i.item.id == item.id)) {
                    return true;
                }
            }
        }
        return false
    }

    return (<>
        <dialog ref={dialogRef} className="template-dialog">
            <div className="template-dialog-div" >
                <h2>Templates</h2>
                <div className='templates'>

                    {templates.length > 1 && templates.filter((t) => !viewingTemplates.includes(t.name)).length > 0 && <img src={ForwardIcon} onClick={() => {

                        if (isMobile) {
                            const index = templates.findIndex((t) => t.name === viewingTemplates[0]);
                            const nextIndex = (index - 1 + templates.length) % templates.length;
                            setViewingTemplates([templates[nextIndex].name]);

                        } else {
                            setViewingTemplates((old) => {
                                // Find the index of the last (rightmost) template currently being viewed

                                const lastTemplateIndex = templates.findIndex((t) => t.name === old[0]);
                                // Get the next template index
                                const nextIndex = (lastTemplateIndex - 1 + templates.length) % templates.length;

                                // Slide the window: remove first template, keep second, add next
                                return [templates[nextIndex].name, old[0]];
                            });
                        }
                    }} className='back-mobile-areas' />}
                    {viewingTemplates.length === 0 && <div className='no-templates'>No templates available</div>}
                    {viewingTemplates.map((temp) => (
                        <div className='template'>
                            <img src={templates.find((t) => t.name === temp)!.previewImage} alt={temp} className='template-preview' />
                            <h3>{temp}</h3>
                            <div className='template-actions'>
                                <button className='template-select-btn' onClick={() => {
                                    if (isViewingArea) {
                                        const urlParams = new URLSearchParams(window.location.search);
                                        const companyIdParam = urlParams.get('companyId');
                                        const areaIdParam = urlParams.get('areaId');
                                        window.location.href = `/LayItOut/Layout/?companyId=${companyIdParam}&areaId=${areaIdParam}&type=edit-template&templateId=${templates.find((t) => t.name == temp)!.id}`
                                    } else {
                                        const selectedTemplate = templates.find((t) => t.name === temp)!;
                                        const newTemplate = new Template({
                                            name: selectedTemplate.name,
                                            id: selectedTemplate.id,
                                            previewImage: selectedTemplate.previewImage,
                                            sections: selectedTemplate.sections.map((section) => {
                                                return new Section({
                                                    name: section.name,
                                                    cellId: new CellId({ x: section.cellId.x * (isMobile ? 20 : 10), y: section.cellId.y * (isMobile ? 20 : 10) }),
                                                    cellsLong: section.cellsLong * (isMobile ? 20 : 10),
                                                    cellsTall: section.cellsTall * (isMobile ? 20 : 10),
                                                    startingItems: section.startingItems.map((item) => {
                                                        return new StaringItem({
                                                            cell: new CellId({ x: item.cell.x * (isMobile ? 2 : 1), y: item.cell.y * (isMobile ? 2 : 1) }),
                                                            item: new Item({
                                                                id: item.item.id,
                                                                name: item.item.name,
                                                                icon: item.item.icon,
                                                                cellsLong: item.item.cellsLong * 2,
                                                                cellsTall: item.item.cellsTall * 2,
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
                                    const updatedTemplates = templates.filter((t) => t.name !== temp);

                                    if (updatedTemplates.length == 1) {
                                        setViewingTemplates([updatedTemplates[0]!.name]);


                                    } else if (updatedTemplates.length == 0) {
                                        setViewingTemplates([]);
                                    } else if (updatedTemplates.length == 2) {
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
                    {templates.length > 1 && templates.filter((t) => !viewingTemplates.includes(t.name)).length > 0 && <img src={ForwardIcon} onClick={() => {
                        if (isMobile) {
                            const index = templates.findIndex((t) => t.name === viewingTemplates[0]);
                            const nextIndex = (index + 1) % templates.length;
                            setViewingTemplates([templates[nextIndex].name]);

                        } else {
                            //get index of the last template in viewingTemplates


                            //remove the last template from viewingTemplates and add the next template
                            setViewingTemplates((old) => {
                                // Find the index of the last (rightmost) template currently being viewed

                                const lastTemplateIndex = templates.findIndex((t) => t.name === old[old.length - 1]);
                                // Get the next template index
                                const nextIndex = (lastTemplateIndex + 1) % templates.length;

                                // Slide the window: remove first template, keep second, add next
                                return [old[1], templates[nextIndex].name];
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