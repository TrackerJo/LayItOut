

import { useRef } from "react"
import type { InventoryItem, Item } from "../constants"
import "./display_item.css"

type DisplayItemProps = {
    inventoryItem: InventoryItem
    addItem: (item: Item) => void

}

function DisplayItem({ inventoryItem, addItem }: DisplayItemProps) {
    const displayRef = useRef<HTMLDivElement>(null)
    return (<div className="display">
        <div ref={displayRef} id={inventoryItem.item.id} className={`display-item`} style={{ width: `${inventoryItem.item.cellsLong * 25}px`, height: `${inventoryItem.item.cellsTall * 25}px` }} onMouseEnter={() => {
            inventoryItem.item.initialElement = displayRef.current!
            inventoryItem.item.id = inventoryItem.item.name + (Math.random() * 10000).toString()
            console.log("ADDING ITEM")
            addItem(inventoryItem.item)

        }} >
            <img src={inventoryItem.item.icon} alt="icon" />
        </div>
        <p>{inventoryItem.item.name}</p>
        <p className="quantity">x{inventoryItem.quantity}</p>
    </div>
    )
}

export default DisplayItem