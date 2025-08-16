

import { useEffect, useRef, useState } from "react"
import { Item, type CellId, type InventoryItem } from "../constants"
import "./display_item.css"


type DisplayItemProps = {
    inventoryItem: InventoryItem
    addDraggingItem: (item: Item) => void,
    removeItem: (item: Item) => void,
    setSelectedItem: (item: Item | null) => void,
    tapAndPlaceMode: boolean


}

function DisplayItem({ inventoryItem, addDraggingItem, removeItem, setSelectedItem, tapAndPlaceMode }: DisplayItemProps) {
    const displayRef = useRef<HTMLDivElement>(null)
    const cellSize = /Mobi|Android/i.test(navigator.userAgent) ? 5 : 10;
    const textRef = useRef<HTMLParagraphElement>(null);
    const [fontSize, setFontSize] = useState<number>(12);
    const [currentItem, setCurrentItem] = useState<Item>(inventoryItem.item);


    // useEffect(() => {
    //     //Check if using mobile
    //     const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    //     if (isMobile) {

    //         inventoryItem.item.initialElement = displayRef.current!
    //         inventoryItem.item.id = inventoryItem.item.name + (Math.random() * 10000).toString()

    //         addItem(inventoryItem.item)
    //     }
    // }, [])

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

            if (currentWidth > element.offsetWidth && currentFontSize - 1 > 8) {

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

    const preventScroll = (e: TouchEvent) => {
        e.preventDefault();
    };
    return (<div className="display">

        <div ref={displayRef} id={inventoryItem.item.id} className={inventoryItem.item.isSectionItem ? `display-section` : `display-item ${inventoryItem.item.isSectionModifier ? inventoryItem.item.sectionModifierType!.toString() : ""}`} style={{ width: `${inventoryItem.item.cellsLong * 10}px`, height: `${inventoryItem.item.cellsTall * 10}px` }} onMouseDown={(e) => {
            if (tapAndPlaceMode) return;
            e.preventDefault();
            e.stopPropagation();
            inventoryItem.item.initialElement = displayRef.current!
            inventoryItem.item.id = inventoryItem.item.name + (Math.random() * 10000).toString()
            console.log("ADDING ITEM", inventoryItem.item.id, "to initialElement", inventoryItem.item.initialElement)
            setCurrentItem(new Item({
                ...inventoryItem.item, // copies all properties
            }))
            addDraggingItem(inventoryItem.item)

        }} onClick={(e) => {
            if (!tapAndPlaceMode) return;
            e.preventDefault();
            e.stopPropagation();
            inventoryItem.item.initialElement = displayRef.current!
            inventoryItem.item.id = inventoryItem.item.name + (Math.random() * 10000).toString()
            setSelectedItem(inventoryItem.item);

        }}
            onTouchStart={(e) => {
                if (tapAndPlaceMode) return;
                e.preventDefault();
                e.stopPropagation();


                inventoryItem.item.initialElement = displayRef.current!
                inventoryItem.item.id = inventoryItem.item.name + (Math.random() * 10000).toString()
                console.log("ADDING ITEM", inventoryItem.item.id, "to initialElement", inventoryItem.item.initialElement)
                setCurrentItem(new Item({
                    ...inventoryItem.item, // copies all properties
                }))
                addDraggingItem(inventoryItem.item)

            }}>
            {inventoryItem.item.isSectionModifier ? null : inventoryItem.item.icon.includes("custom-") ?
                <div className={inventoryItem.item.isSectionItem ? "custom-section" : "custom-icon"}>
                    <div>


                        <p ref={textRef} style={{ fontSize: `${fontSize}px` }}>{inventoryItem.item.icon.split("custom-")[1]}</p>
                    </div>
                </div>
                :
                <img src={inventoryItem.item.icon} alt="icon" />
            }

        </div>


        <p>{inventoryItem.item.name}</p>
        {inventoryItem.quantity > 0 && <p className="quantity">x{inventoryItem.quantity}</p>}
    </div >
    )
}

export default DisplayItem