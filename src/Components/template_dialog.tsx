import { useEffect, useState, type RefObject } from 'react';
import './template_dialog.css';
import { CellId, Item, Section, StaringItem, Template } from '../constants';
import type { CellProps } from './cell';
import SectionArea from './section';
import Area from './area';
import DraggableItem from './draggable_item';
import ForwardIcon from '../assets/forward.png';


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

    function getSectionByCellId(cellId: CellId, template: Template): Section | null {
        for (const section of template.sections) {
            if (cellId.x >= section.cellId.x && cellId.x < section.cellId.x + section.cellsLong &&
                cellId.y >= section.cellId.y && cellId.y < section.cellId.y + section.cellsTall) {
                return section;
            }
        }
        return null;
    }


    function generateTemplates(whichTemplates: Template[], items: Item[], sections: Section[]) {

        const templateAreas: { width: number, height: number, templateName: string, cells: CellProps[][] }[] = [];
        const templatesToGenerate = templates.filter((template) => whichTemplates.some((t) => t.name === template.name));
        //sort by viewingTemplates order
        templatesToGenerate.sort((a, b) => whichTemplates.indexOf(a) - whichTemplates.indexOf(b));
        for (const template of templatesToGenerate) {
            const newCells: CellProps[][] = [];
            let currentWidth = 0;
            let currentHeight = 0;

            for (const section of template.sections) {
                // section.cellsLong = section.cellsLong / 2;
                // section.cellsTall = section.cellsTall / 2;
                // section.cellId.x = section.cellId.x / 2;
                // section.cellId.y = section.cellId.y / 2;

                console.log("Generating cells for section", section.name, "at", section.cellId, "with size", section.cellsLong, "x", section.cellsTall)

                console.log("Added section Length:", section.cellsLong * cellSize + section.cellId.x)
                if ((section.cellsLong + section.cellId.x) * cellSize > currentWidth) {
                    currentWidth += section.cellsLong * cellSize;
                }
                if ((section.cellsTall + section.cellId.y) * cellSize > currentHeight) {
                    currentHeight += section.cellsTall * cellSize;
                }
            }
            console.log("Current width:", currentWidth, "Current height:", currentHeight);


            //set cunrent width and height to be closet to a multiple of cellSize without decimals


            [...Array((currentHeight / cellSize)).keys()].map((j) => {
                const rowCells: CellProps[] = [];
                [...Array((currentWidth / cellSize)).keys()].map((i) => {

                    rowCells.push({
                        id: new CellId({ x: i, y: j }), hasItem: false, itemId: "", mouseOver: false, canPlaceItem: false, mouseOverLocation: "", inSection: false, size: cellSize
                    })
                })
                newCells.push(rowCells)
            })
            templateAreas.push({ width: currentWidth, height: currentHeight, templateName: template.name, cells: newCells });



        }
        setTemplateAreas([...templateAreas]);
        setTimeout(() => {
            const newSections: Section[] = [];
            const newItems: Item[] = [];

            for (const template of templatesToGenerate) {
                const newStartingItems: StaringItem[] = [];

                for (const section of template.sections) {
                    console.log("Adding section", section.name, section.cellId, template.name.split(" ").join("-"));

                    section.cellElement = document.querySelector(`.template-dialog #${template.name.split(" ").join("-")} #${section.cellId.toId()}.cell:not(.cell-border)`) as HTMLElement;

                    console.log("Section element found", section.cellElement)
                    newSections.push(section);
                    newStartingItems.push(...section.startingItems.map((item) => {
                        return new StaringItem({
                            cell: new CellId({ x: section.cellId.x + item.cell.x, y: section.cellId.y + item.cell.y }),
                            item: new Item({
                                id: item.item.id,
                                name: item.item.name,
                                cellsLong: item.item.cellsLong,
                                cellsTall: item.item.cellsTall,
                                icon: item.item.icon,
                                initialElement: document.querySelector(`.template-dialog #${template.name.split(" ").join("-")} #${item.cell.toId()}.cell:not(.cell-border)`) as HTMLElement,
                                starterItem: true,
                                moveable: item.item.moveable,
                                rotation: item.item.rotation || 0 // Ensure rotation is set
                            })
                        })
                    }))

                }
                for (const startingItem of newStartingItems) {
                    console.log("Placing starting item", startingItem.item.name, startingItem.cell)
                    for (let i = 0; i < startingItem.item.cellsTall; i++) {
                        for (let j = 0; j < startingItem.item.cellsLong; j++) {
                            templateAreas[templateAreas.findIndex((t) => t.templateName == template.name)].cells[startingItem.cell.y + i][startingItem.cell.x + j].hasItem = true;
                            templateAreas[templateAreas.findIndex((t) => t.templateName == template.name)].cells[startingItem.cell.y + i][startingItem.cell.x + j].itemId = startingItem.item.id;
                        }
                    }

                    startingItem.item.initialElement = document.querySelector(`.template-dialog #${template.name.split(" ").join("-")} #${startingItem.cell.toId()}.cell:not(.cell-border)`) as HTMLElement;





                    console.log("Adding item to items", startingItem.item.initialElement)
                    newItems.push(new Item({
                        id: startingItem.item.id,
                        name: startingItem.item.name,
                        cellsLong: startingItem.item.cellsLong,
                        cellsTall: startingItem.item.cellsTall,
                        icon: startingItem.item.icon,
                        initialElement: startingItem.item.initialElement,
                        starterItem: true,
                        moveable: startingItem.item.moveable,
                        rotation: startingItem.item.rotation || 0 // Ensure rotation is set
                    }));

                }



            }
            setItems((old) => [...newItems]);

            setSections([...newSections]);
        }, 100)
    }

    useEffect(() => {
        if (!isOpen) return;
        console.log("Layout dialog opened, generating cells and sections", templates);
        if (templates.length === 0) return;
        if (templates.length == 1) {
            generateTemplates([templates[0]], items, sections);
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

        generateTemplates(whichTemplates, items, sections);
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

    return (
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
                    {templateAreas.map((area, index) => (
                        <div>
                            <Area
                                key={index}
                                width={area.width}
                                height={area.height}
                                cells={flattenCells(area.cells)}
                                id={area.templateName.split(" ").join("-")}
                                visibile={true}

                            />
                            <h3>{area.templateName}</h3>
                            <button className='template-select-btn' onClick={() => {
                                if (isViewingArea) {
                                    const urlParams = new URLSearchParams(window.location.search);
                                    const companyIdParam = urlParams.get('companyId');
                                    const areaIdParam = urlParams.get('areaId');
                                    window.location.href = `/LayItOut/Layout/?companyId=${companyIdParam}&areaId=${areaIdParam}&type=edit-template&templateId=${templates.find((temp) => temp.name == area.templateName)!.id}`
                                } else {
                                    const selectedTemplate = templates.find((t) => t.name === area.templateName)!;
                                    const newTemplate = new Template({
                                        name: selectedTemplate.name,
                                        id: selectedTemplate.id,
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
                <button className='template-dialog-close' onClick={closeDialog}>Close</button>


            </div>
            {sections.map((section) => <SectionArea section={section} key={section.cellId.toId()} visible={true} cellSize={cellSize} />)}
            {
                items.map((item) => {
                    return <DraggableItem cellSize={isMobile ? 5 : 10} isViewingDesign={true} removeItem={() => { }} visible={showItem(item, viewingTemplates)}

                        item={item} canPlaceItem={() => { return false }} placeItem={() => { }} deleteItemRotate={() => { }} highlightCells={() => { }} unHighlightCells={() => { }} key={item.id} deleteItem={() => { }} isSelected={false}
                        onSelect={(itemId) => {

                        }}
                        isUnselecting={false}
                        onDeselect={() => {


                        }} />
                })
            }
        </dialog >

    );
}

export default TemplateDialog;