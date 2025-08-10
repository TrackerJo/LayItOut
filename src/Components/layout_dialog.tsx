import { useEffect, useState, type RefObject } from 'react';
import './layout_dialog.css';
import { CellId, type Section } from '../constants';
import type { CellProps } from './cell';
import SectionArea from './section';
import Area from './area';

type LayoutDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;
    layoutSections: Section[];
    isOpen: boolean;
};

function LayoutDialog({ dialogRef, closeDialog, layoutSections, isOpen }: LayoutDialogProps) {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [cells, setCells] = useState<CellProps[][]>([]);
    const [sections, setSections] = useState<Section[]>([...layoutSections]);
    const cellSize = /Mobi|Android/i.test(navigator.userAgent) ? 5 : 10;

    function getSectionByCellId(cellId: CellId): Section | null {
        for (const section of sections) {
            if (cellId.x >= section.cellId.x && cellId.x < section.cellId.x + section.cellsLong &&
                cellId.y >= section.cellId.y && cellId.y < section.cellId.y + section.cellsTall) {
                return section;
            }
        }
        return null;
    }
    useEffect(() => {
        if (!isOpen) return;
        console.log("Layout dialog opened, generating cells and sections", layoutSections);

        const newCells: CellProps[][] = [];
        let currentWidth = 0;
        let currentHeight = 0;
        for (const section of layoutSections) {

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

        setWidth(currentWidth);
        setHeight(currentHeight);

        //set cunrent width and height to be closet to a multiple of cellSize without decimals


        [...Array((currentHeight / cellSize)).keys()].map((j) => {
            const rowCells: CellProps[] = [];
            [...Array((currentWidth / cellSize)).keys()].map((i) => {
                console.log(getSectionByCellId(new CellId({ x: i, y: j })) != null ? "In section" : "Outside section")
                rowCells.push({
                    id: new CellId({ x: i, y: j }), hasItem: false, itemId: "", mouseOver: false, canPlaceItem: false, mouseOverLocation: "", inSection: false, size: cellSize
                })
            })
            newCells.push(rowCells)
        })
        setCells([...newCells]);

        setTimeout(() => {

            const newSections: Section[] = [...layoutSections];
            for (const section of newSections) {
                console.log("Adding section", section.name, section.cellId)

                section.cellElement = document.querySelector(`.layout-dialog #${section.cellId.toId()}.cell:not(.cell-border)`) as HTMLElement;

                console.log("Section element found", section.cellElement)


            }
            console.log("Setting sections", newSections)
            setSections([...newSections]);



            setCells([...newCells]);
        }, 100)
    }, [isOpen, layoutSections]);

    function flattenCells(cells: CellProps[][]): CellProps[] {
        let flattenedCells: CellProps[] = [];

        cells.map((row) => flattenedCells = [...flattenedCells, ...row])

        return flattenedCells
    }

    return (
        <dialog ref={dialogRef} className="layout-dialog">
            <div className="layout-dialog-div" >
                <h2>Layout</h2>

                <Area width={width} height={height} cells={flattenCells(cells)} />
                <br />
                <button className='layout-dialog-close' onClick={closeDialog}>Close</button>


            </div>
            {sections.map((section) => <SectionArea takingPhoto={false} section={section} key={section.cellId.toId()} visible={true} cellSize={cellSize} />)}

        </dialog >

    );
}

export default LayoutDialog;