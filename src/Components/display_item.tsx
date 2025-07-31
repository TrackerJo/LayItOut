

import { useEffect, useRef } from "react"
import type { InventoryItem, Item } from "../constants"
import "./display_item.css"

type DisplayItemProps = {
    inventoryItem: InventoryItem
    addItem: (item: Item) => void

}

function DisplayItem({ inventoryItem, addItem }: DisplayItemProps) {
    const displayRef = useRef<HTMLDivElement>(null)
    const cellSize = /Mobi|Android/i.test(navigator.userAgent) ? 5 : 10;

    useEffect(() => {
        //Check if using mobile
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        if (isMobile) {
            console.log("Mobile detected, setting initialElement and id")
            inventoryItem.item.initialElement = displayRef.current!
            inventoryItem.item.id = inventoryItem.item.name + (Math.random() * 10000).toString()
            console.log("ADDING ITEM")
            addItem(inventoryItem.item)
        }
    }, [])

    return (<div className="display">
        <div ref={displayRef} id={inventoryItem.item.id} className={`display-item`} style={{ width: `${inventoryItem.item.cellsLong * cellSize}px`, height: `${inventoryItem.item.cellsTall * cellSize}px` }} onMouseEnter={() => {
            inventoryItem.item.initialElement = displayRef.current!
            inventoryItem.item.id = inventoryItem.item.name + (Math.random() * 10000).toString()
            console.log("ADDING ITEM")
            addItem(inventoryItem.item)

        }} >
            {inventoryItem.item.icon.includes("custom-") ?
                <div className="custom-icon">
                    <p>{inventoryItem.item.icon.split("custom-")[1]}</p>
                </div>
                :
                <img src={inventoryItem.item.icon} alt="icon" />
            }
        </div>
        <p>{inventoryItem.item.name}</p>
        <p className="quantity">x{inventoryItem.quantity}</p>
    </div>
    )
}

export default DisplayItem