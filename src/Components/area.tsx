import Cell, { type CellProps } from "./cell"
import "./area.css"

type AreaProps = {
    width: number,
    height: number,
    cells: CellProps[],
    id?: string,
    visibile?: boolean,
    section?: string
}

function Area({ width, height, cells, id, visibile, section }: AreaProps) {
    return (
        <div className={`area ${visibile ?? true ? "" : "invisible"}`} style={{ width: `${width}px`, height: `${height}px` }} id={id != null ? id.split(" ").join("-") : ""}>
            {cells.map((cell) => <Cell id={cell.id} canPlaceItem={cell.canPlaceItem} mouseOver={cell.mouseOver} hasItem={cell.hasItem} itemId={cell.itemId} mouseOverLocation={cell.mouseOverLocation} inSection={cell.inSection} section={section} />)}

        </div>
    )
}

export default Area