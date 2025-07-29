import type { CellId } from "../constants"
import "./cell.css"

export type CellProps = {
    id: CellId
    hasItem: boolean
    itemId: string
    mouseOver: boolean
    canPlaceItem: boolean
}

function Cell({ id, mouseOver, canPlaceItem, hasItem }: CellProps) {
    return (
        <div className={`cell ${mouseOver ? "hovered" : ""} ${canPlaceItem ? "legal" : "illegal"} ${hasItem ? "hasItem" : ""}`} id={id.toId()}>
            <div className="cell cell-border" id={id.toId()}>

            </div>
        </div>
    )
}

export default Cell