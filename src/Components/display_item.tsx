

import { useEffect, useRef, useState } from "react"
import type { InventoryItem, Item } from "../constants"
import "./display_item.css"

type DisplayItemProps = {
    inventoryItem: InventoryItem
    addItem: (item: Item) => void

}

function DisplayItem({ inventoryItem, addItem }: DisplayItemProps) {
    const displayRef = useRef<HTMLDivElement>(null)
    const cellSize = /Mobi|Android/i.test(navigator.userAgent) ? 5 : 10;
    const textRef = useRef<HTMLParagraphElement>(null);
    const [fontSize, setFontSize] = useState<number>(12);

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

    function getTextWidth(fontSize: number): number {
        const element = textRef.current!;
        const style = window.getComputedStyle(element);

        // Create temporary element
        const temp = document.createElement('span');
        temp.style.font = style.font;
        temp.style.fontSize = fontSize + 'px';
        temp.style.fontFamily = style.fontFamily;
        temp.style.fontWeight = style.fontWeight;
        temp.style.position = 'absolute';
        temp.style.visibility = 'hidden';
        temp.style.whiteSpace = 'nowrap';
        temp.textContent = element.textContent;

        document.body.appendChild(temp);
        const textWidth = temp.offsetWidth;
        document.body.removeChild(temp);
        return textWidth;
    }

    function decreaseFontSize(currentFontSize: number): number {

        // setFontSize(currentFontSize - 1);
        if (textRef.current) {
            const element = textRef.current;
            const currentWidth = getTextWidth(currentFontSize - 1);
            console.log("Current text width:", currentWidth);
            console.log("Paragraph width:", element.offsetWidth);

            if (currentWidth > element.offsetWidth && fontSize > 6) {
                console.log("Decreasing font size to:", currentFontSize - 1);
                return decreaseFontSize(currentFontSize - 1);

            } else {
                return currentFontSize - 1;
            }
        }
        return currentFontSize; // Fallback if textRef is not set
    }

    useEffect(() => {
        setTimeout(() => {
            if (textRef.current) {
                setFontSize(decreaseFontSize(fontSize));

            }

        }, 100);
    }, []);

    return (<div className="display">
        <div ref={displayRef} id={inventoryItem.item.id} className={`display-item`} style={{ width: `${inventoryItem.item.cellsLong * cellSize}px`, height: `${inventoryItem.item.cellsTall * cellSize}px` }} onMouseEnter={() => {
            inventoryItem.item.initialElement = displayRef.current!
            inventoryItem.item.id = inventoryItem.item.name + (Math.random() * 10000).toString()
            console.log("ADDING ITEM")
            addItem(inventoryItem.item)

        }} >
            {inventoryItem.item.icon.includes("custom-") ?
                <div className="custom-icon">
                    <div>


                        <p ref={textRef}>{inventoryItem.item.icon.split("custom-")[1]}</p>
                    </div>
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