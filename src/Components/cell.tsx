import type { CellId } from "../constants"
import "./cell.css"

export type CellProps = {
    id: CellId
    hasItem: boolean
    itemId: string
    mouseOver: boolean
    canPlaceItem: boolean,
    mouseOverLocation: string
    inSection: boolean,
    section?: string
}

function Cell({ id, mouseOver, canPlaceItem, hasItem, mouseOverLocation, inSection, section }: CellProps) {
    return (
        <div className={`cell ${mouseOver ? "hovered" : ""} ${canPlaceItem ? "legal" : "illegal"} ${hasItem ? "hasItem" : ""} ${mouseOverLocation} ${!inSection ? "outside" : ""}`} id={`${section == null ? "" : section.split(" ").join("")}${id.toId()}`}>
            <div className="cell cell-border" id={`${section == null ? "" : section.split(" ").join("")}${id.toId()}`}>

            </div>
        </div>
    )
}

export default Cell