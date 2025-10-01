import { useCallback, useEffect, useRef, useState } from "react"
import "./draggable_item.css"
import { CellId, Item } from "../constants";





type PlacingItemProps = {
    item: Item | null,
    canPlaceItem: (startCell: CellId, item: Item) => boolean,
    placeItem: (startCell: CellId, item: Item, removeCell: CellId | null) => void,
    highlightCells: (startCell: CellId, item: Item) => void
    unHighlightCells: () => void,
    setSelectingItem: () => void,
    addHighlightedCell: (cellId: CellId) => void,
    placeMultiItem: (item: Item) => void,
    cellSize: number
}

function PlacingItem({ item, setSelectingItem, addHighlightedCell, canPlaceItem, placeItem, highlightCells, unHighlightCells, cellSize, placeMultiItem }: PlacingItemProps) {
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)
    const textRef = useRef<HTMLParagraphElement>(null);
    const [prevX, setPrevX] = useState<number>(0)
    const [prevY, setPrevY] = useState<number>(0)
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [rotation, setRotation] = useState<number>(0)
    const [cell, setCell] = useState<HTMLElement | null>(null);
    const [canRotate, setCanRotate] = useState<boolean>(true);
    const [fontSize, setFontSize] = useState<number>(12); // Default font size
    const [dragOffset, setDragOffset] = useState<{ x: number; y: number } | null>(null);
    const itemRef = useRef<HTMLDivElement>(null);
    const [inViewport, setInViewport] = useState<boolean>(true);
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [isHighlighting, setIsHighlighting] = useState<boolean>(false);






    // Helper function to get rotated dimensions
    const getRotatedDimensions = useCallback((rotation: number) => {
        const isRotated = rotation % 2 === 1; // 90° or 270°

        return {
            width: isRotated ? item.cellsTall * cellSize : item.cellsLong * cellSize,
            height: isRotated ? item.cellsLong * cellSize : item.cellsTall * cellSize,
            cellsWide: isRotated ? item.cellsTall : item.cellsLong,
            cellsTall: isRotated ? item.cellsLong : item.cellsTall
        };
    }, [item, cellSize]);






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

    const onMouseDown = () => {
        setIsMouseDown(true);
    }

    const onMouseUp = () => {
        setIsMouseDown(false);
    }

    useEffect(() => {
        setTimeout(() => {
            if (textRef.current) {
                setFontSize(decreaseFontSize(fontSize));

            }


        }, 100);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        return () => {
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
        }



    }, []);






    useEffect(() => {

        if (item) {
            setIsDragging(true)
            // Calculate offset only once at drag start
            const rect = itemRef.current?.getBoundingClientRect();
            setDragOffset({
                x: rect ? rect.left - x : 0,
                y: rect ? rect.top - y : 0,
            });// Reset offset for new drag


        } else {
            console.log("No item to place, stopping dragging")
            setIsDragging(false);
            setDragOffset(null);
            setX(0);
            setY(0);
            setPrevX(0);
            setPrevY(0);
            setRotation(0);
            setCell(null);
            setCanRotate(true);
            setFontSize(12);
            setInViewport(true); // Reset offset for new drag


        }


    }, [item]);



    const preventScroll = (e: TouchEvent) => {
        e.preventDefault();
    };


    const handleMove = useCallback((clientX: number, clientY: number, e: MouseEvent | TouchEvent) => {
        if (item == null || !isDragging) return;
        if (!dragOffset) {

            return; // Wait for next move to use the offset
        }



        console.log("PLACING MOVE", item)
        const target = e.target as HTMLElement;

        // Create item with current rotation for highlighting
        const rotatedDims = getRotatedDimensions(rotation);
        const tempItem = Item.fromDoc(item.toDoc());
        tempItem.cellsLong = rotatedDims.cellsWide;
        tempItem.cellsTall = rotatedDims.cellsTall;
        tempItem.initialElement = item.initialElement;
        tempItem.rotation = rotation;
        tempItem.hasMoved = item.hasMoved;
        tempItem.id = item.id; // Ensure the ID is set for highlighting

        // For touch events, we need to find the element under the touch point
        let targetElement = target as HTMLElement;
        if (!targetElement || !targetElement.classList?.contains("cell")) {
            // Use elementFromPoint to find the cell under the touch
            const elementUnderTouch = document.elementFromPoint(clientX, clientY);
            if (elementUnderTouch?.classList?.contains("cell")) {
                targetElement = elementUnderTouch as HTMLElement;
            }
        }

        if (targetElement?.classList?.contains("cell") && !isHighlighting) {

            highlightCells(CellId.fromString(targetElement.id), tempItem);
        } else if (targetElement?.classList?.contains("section-modifier") && !isHighlighting) {
            // Highlight section modifier cells

            highlightCells(CellId.fromString(targetElement.dataset.cell as string), tempItem);

        } else if (!isHighlighting) {
            unHighlightCells();
        }
        // if (item.starterItem) {
        //     // setX(clientX);
        //     // setY(clientY);
        //     setX(clientX - initialOffsetX)
        //     setY(clientY - initialOffsetY + 5)

        // } else {
        setX(clientX - dragOffset.x)
        setY(clientY - dragOffset.y + (item.sectionModifierType?.includes("Door") ? 10 : 5));
        //check if mouse is pressed

        if (isMouseDown) {
            if (!isHighlighting) {
                unHighlightCells();
            }
            setIsHighlighting(true);
            addHighlightedCell(CellId.fromString(targetElement.id));
        }
        // Adjust for touch offset
        // }
    }, [item, isDragging, x, y, isHighlighting, isMouseDown, dragOffset, canPlaceItem, placeItem, getRotatedDimensions, rotation, highlightCells, unHighlightCells, itemRef]);

    const handleEnd = useCallback((e: MouseEvent) => {

        if (item == null) return;
        // Calculate the offset from mouse/touch to element when drag starts



        const clientX = e.clientX;
        const clientY = e.clientY;
        console.log("Drag ended")
        unHighlightCells();

        document.body.removeEventListener('touchmove', preventScroll);


        // Find the element under the final position
        const targetElement = document.elementFromPoint(clientX, clientY) as HTMLElement;

        if (!targetElement?.classList?.contains("cell") && !targetElement?.classList?.contains("section-modifier")) {
            const rotatedDims = getRotatedDimensions(rotation);
            const tempItem = {
                ...item,
                cellsLong: rotatedDims.cellsWide,
                cellsTall: rotatedDims.cellsTall
            };
            if (isHighlighting) {
                setIsHighlighting(false);
                placeMultiItem(tempItem);
            } else {
                setSelectingItem();

            }

            // setX(prevX)
            // setY(prevY)
        } else if (targetElement?.classList?.contains("section-modifier")) {
            console.log("Placing item on section modifier cell");
            console.log("Target element:", targetElement.dataset.cell);
            if (targetElement.dataset.cell == "") {

                return;
            }
            // Create item with current rotation for placement validation
            const rotatedDims = getRotatedDimensions(rotation);
            const tempItem = {
                ...item,
                cellsLong: rotatedDims.cellsWide,
                cellsTall: rotatedDims.cellsTall
            };



            if (!isHighlighting) {
                if (!canPlaceItem(CellId.fromString(targetElement.dataset.cell as string), tempItem)) {

                    // setX(prevX);
                    // setY(prevY);
                    // setIsDragging(false);
                    return;
                }
                placeItem(CellId.fromString(targetElement.dataset.cell as string), tempItem, cell != null ? CellId.fromString(cell.id) : null);
            } else {
                setIsHighlighting(false);
                placeMultiItem(tempItem);
            }
            console.log("Placed item at cell:", targetElement);
        }
        else {
            // Create item with current rotation for placement validation
            const rotatedDims = getRotatedDimensions(rotation);
            const tempItem = {
                ...item,
                cellsLong: rotatedDims.cellsWide,
                cellsTall: rotatedDims.cellsTall
            };



            if (!isHighlighting) {
                if (!canPlaceItem(CellId.fromString(targetElement.id), tempItem)) {

                    // setX(prevX);
                    // setY(prevY);
                    // setIsDragging(false);
                    return;
                }
                placeItem(CellId.fromString(targetElement.id), tempItem, cell != null ? CellId.fromString(cell.id) : null);
            } else {
                setIsHighlighting(false);
                placeMultiItem(tempItem);
            }
            console.log("Placed item at cell:", targetElement);

        }

    }, [item, rotation, setSelectingItem, isHighlighting, canPlaceItem, placeItem, cell, unHighlightCells, prevX, prevY]);

    const handleComputerMove = useCallback((e: MouseEvent) => {
        const clientX = e.clientX;
        const clientY = e.clientY;
        handleMove(clientX, clientY, e);
    }, [handleMove]);

    const handleMobileMove = useCallback((e: TouchEvent) => {
        const touch = e.touches[0];
        const clientX = touch.clientX;
        const clientY = touch.clientY;
        handleMove(clientX, clientY, e);
    }, [handleMove]);

    const handleMobileEnd = useCallback((e: TouchEvent) => {
        const touch = e.changedTouches[0];
        const clientX = touch.clientX;
        const clientY = touch.clientY;
        handleEnd({ clientX, clientY } as MouseEvent);
        document.body.removeEventListener('touchmove', preventScroll);
    }, [handleEnd, preventScroll]);






    useEffect(() => {
        if (!isDragging) return;

        document.body.addEventListener('touchmove', preventScroll, { passive: false });
        document.addEventListener('mousemove', handleComputerMove);
        document.addEventListener('mouseup', handleEnd);
        document.addEventListener('touchmove', handleMobileMove);
        document.addEventListener('touchend', handleMobileEnd);

        return () => {
            document.body.removeEventListener('touchmove', preventScroll);
            document.removeEventListener('mousemove', handleComputerMove);
            document.removeEventListener('mouseup', handleEnd);
            document.removeEventListener('touchmove', handleMobileMove);
            document.removeEventListener('touchend', handleMobileEnd);
        };
    }, [isDragging, handleComputerMove, handleEnd, handleMobileMove, handleMobileEnd, preventScroll]);




    return (
        x == 0 || y == 0 || !inViewport || item == null ? <></> :
            <>
                <div
                    id={item.id}
                    ref={itemRef}
                    className={`draggable-item ${item.isSectionModifier && !item.moveable ? "placed-modifier" : ""} ${item.isSectionModifier ? item.sectionModifierType?.toString() : ""} ${isDragging ? "dragging" : ""} ${!item.moveable ? "not-moveable" : ""}`}
                    style={{
                        top: `${y}px`,
                        left: `${x}px`,
                        width: `${item.cellsLong * (item.isDisplayItem && !isDragging && !item.hasMoved ? 10 : cellSize) - (item.sectionModifierType == "LeftWall" || item.sectionModifierType == "RightWall" || item.sectionModifierType?.includes("Corner") ? 1 : 0)}px`,
                        height: `${item.cellsTall * (item.isDisplayItem && !isDragging && !item.hasMoved ? 10 : cellSize) - (item.sectionModifierType == "TopWall" || item.sectionModifierType == "BottomWall" || item.sectionModifierType?.includes("Corner") ? 1 : 0)}px`,
                        rotate: `${rotation * 90}deg`,
                        transformOrigin: 'center center',
                        fontSize: `${fontSize}px`,
                        zIndex: isDragging ? 1000 : 1,
                    }}

                >
                    {item.isSectionModifier ? null : item.icon.includes("custom-") ?
                        <div className={item.isSectionItem ? "custom-section" : "custom-icon"} >
                            <div>
                                <p ref={textRef}>{item.icon.split("custom-")[1]}</p>

                            </div>
                        </div>
                        :
                        <img src={item.icon} alt="icon" />
                    }
                </div >


            </>
    )
}

export default PlacingItem