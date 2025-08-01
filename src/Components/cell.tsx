import type { CellId } from "../constants"
import "./cell.css"

export type CellProps = {
    id: CellId
    hasItem: boolean
    itemId: string
    mouseOver: boolean
    canPlaceItem: boolean,
    mouseOverLocation: string
    inSection: boolean
}

function Cell({ id, mouseOver, canPlaceItem, hasItem, mouseOverLocation, inSection }: CellProps) {
    return (
        <div className={`cell ${mouseOver ? "hovered" : ""} ${canPlaceItem ? "legal" : "illegal"} ${hasItem ? "hasItem" : ""} ${mouseOverLocation} ${!inSection ? "outside" : ""}`} id={id.toId()}>
            <div className="cell cell-border" id={id.toId()}>

            </div>
        </div>
    )
}

export default Cell