import Cell, { type CellProps } from "./cell"
import "./area.css"

type AreaProps = {
    width: number,
    height: number,
    cells: CellProps[]
}

function Area({ width, height, cells }: AreaProps) {
    return (
        <div className="area" style={{ width: `${width}px`, height: `${height}px` }}>
            {cells.map((cell) => <Cell id={cell.id} canPlaceItem={cell.canPlaceItem} mouseOver={cell.mouseOver} hasItem={cell.hasItem} itemId={cell.itemId} mouseOverLocation={cell.mouseOverLocation} inSection={cell.inSection} />)}

        </div>
    )
}

export default Area