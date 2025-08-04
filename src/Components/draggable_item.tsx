import { useEffect, useRef, useState } from "react"
import "./draggable_item.css"
import { CellId, Item } from "../constants";
import XMark from "../assets/xmark.png";
import Rotate from "../assets/rotate.png";



type DraggableItemProps = {
    item: Item,
    canPlaceItem: (startCell: CellId, item: Item) => boolean
    placeItem: (startCell: CellId, item: Item, removeCell: CellId | null) => void,
    deleteItem: (item: Item, cell: CellId) => void,
    deleteItemRotate: (item: Item, cell: CellId) => void,
    isSelected: boolean,
    onSelect: (itemId: string) => void,
    onDeselect: () => void
    highlightCells: (startCell: CellId, item: Item) => void
    unHighlightCells: () => void,
    removeItem: (item: Item) => void,
    isUnselecting: boolean
    visible?: boolean
}

function DraggableItem({ item, canPlaceItem, placeItem, deleteItem, deleteItemRotate, isSelected, onSelect, onDeselect, isUnselecting, highlightCells, unHighlightCells, visible, removeItem }: DraggableItemProps) {
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
    const cellSize = /Mobi|Android/i.test(navigator.userAgent) ? 5 : 10;
    const itemRef = useRef<HTMLDivElement>(null);
    const [inViewport, setInViewport] = useState<boolean>(true);

    // Helper function to get rotated dimensions
    const getRotatedDimensions = (rotation: number) => {
        const isRotated = rotation % 2 === 1; // 90° or 270°
        return {
            width: isRotated ? item.cellsTall * cellSize : item.cellsLong * cellSize,
            height: isRotated ? item.cellsLong * cellSize : item.cellsTall * cellSize,
            cellsWide: isRotated ? item.cellsTall : item.cellsLong,
            cellsTall: isRotated ? item.cellsLong : item.cellsTall
        };
    };

    // Helper function to calculate position offset for rotation
    // Helper function to calculate position offset for rotation
    const getRotationOffset = (rotation: number) => {
        const originalWidth = item.cellsLong * cellSize;
        const originalHeight = item.cellsTall * cellSize;

        switch (rotation % 4) {
            case 0: // 0°
                return { x: 0, y: 0 };
            case 1: // 90°
                // When rotated 90°, adjust position to keep it aligned with grid
                return { x: (originalHeight - originalWidth) / 2, y: (originalWidth - originalHeight) / 2 };
            case 2: // 180°
                return { x: 0, y: 0 };
            case 3: // 270°
                // When rotated 270°, adjust position to keep it aligned with grid
                return { x: (originalHeight - originalWidth) / 2, y: (originalWidth - originalHeight) / 2 };
            default:
                return { x: 0, y: 0 };
        }
    };

    const rotateItem = () => {
        if (!item.hasMoved) return; // Can't rotate items that haven't been placed

        const newRotation = (rotation + 1);
        const rotatedDims = getRotatedDimensions(newRotation);

        // Create a temporary item with rotated dimensions for validation
        const tempItem = Item.fromDoc(item.toDoc());
        tempItem.cellsLong = rotatedDims.cellsWide;
        tempItem.cellsTall = rotatedDims.cellsTall;
        tempItem.initialElement = item.initialElement;
        tempItem.rotation = newRotation;
        tempItem.hasMoved = item.hasMoved;
        let currentCell = cell;
        // Check if rotation is valid at current position
        if ((!item.hasMoved && item.rotation != 0) || (currentCell && canPlaceItem(CellId.fromString(currentCell.id), tempItem))) {
            if (currentCell == null) {
                currentCell = item.initialElement!;
            }
            console.log("ROTATE ITEM", item.id, "to rotation:", newRotation, "at cell:", currentCell?.id);

            setRotation(newRotation);
            deleteItemRotate(item, CellId.fromString(currentCell.id));
            item.rotation = newRotation; // Update item's rotation state

            // Calculate new position based on rotation
            const offset = getRotationOffset(newRotation);
            const cellLeft = currentCell.offsetLeft;
            const cellTop = currentCell.offsetTop;

            setX(cellLeft + offset.x);
            setY(cellTop + offset.y);
            setPrevX(cellLeft + offset.x);
            setPrevY(cellTop + offset.y);

            // Update the item's dimensions in the grid
            // placeItem(CellId.fromString(currentCell.id), tempItem, CellId.fromString(currentCell.id));
        }
    };
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
            if (item.isDisplayItem && !item.hasMoved) {
                console.log("Starting item as dragging item");
                setIsDragging(true);

            }

        }, 100);

    }, []);




    useEffect(() => {

        if (item.initialElement != null && !item.hasMoved) {
            //rotate item if it has a rotation
            console.log("Item initial element:", item.rotation);
            if (item.rotation) {
                setTimeout(() => {
                    console.log("Rotating item to initial rotation:", item.rotation);
                    //repeat the rotation logic
                    for (let i = 0; i < item.rotation; i++) {
                        console.log("Rotating item", i + 1, "times");
                        setRotation((prevRotation) => {
                            const newRotation = (prevRotation + 1) % 4;
                            const offset = getRotationOffset(newRotation);
                            const cellLeft = item.initialElement!.offsetLeft;
                            const cellTop = item.initialElement!.offsetTop;

                            setX(cellLeft + offset.x);
                            setY(cellTop + offset.y);
                            setPrevX(cellLeft + offset.x);
                            setPrevY(cellTop + offset.y);
                            return newRotation;
                        });
                        // rotateItem();
                        // Delay each rotation by 100ms
                    }
                }, 100);
            }

            if (item.initialElement && !item.hasMoved) {
                if (item.initialElement.classList.contains("cell")) {
                    console.log("Setting cell to initial element:", item.initialElement.children[0] as HTMLElement);
                    setCell(item.initialElement.children[0] as HTMLElement);
                }
                const toolbox = document.querySelector(".toolbox")!;
                const scrollLeft = toolbox.scrollLeft;
                const scrollTop = toolbox.scrollTop;
                if (item.isDisplayItem) {

                    setX(item.initialElement.offsetLeft - scrollLeft);
                    setY(item.initialElement.offsetTop - scrollTop);
                    setPrevX(item.initialElement.offsetLeft - scrollLeft);
                    setPrevY(item.initialElement.offsetTop - scrollTop);
                } else {
                    setX(item.initialElement.offsetLeft);
                    setY(item.initialElement.offsetTop);
                    setPrevX(item.initialElement.offsetLeft);
                    setPrevY(item.initialElement.offsetTop);
                }

            }

            // setInterval(() => {
            //     //check if item is being dragged
            //     if (isDragging) return;
            //     if (itemRef.current) {
            //         if (itemRef.current.classList.contains("dragging")) {

            //             return;
            //         }
            //     }
            //     if (item.initialElement && !item.hasMoved) {
            //         // const toolbox = document.querySelector(".toolbox")!;
            //         // const scrollLeft = toolbox.scrollLeft;
            //         // const scrollTop = toolbox.scrollTop;
            //         // if (item.isDisplayItem) {

            //         //     setX(item.initialElement.offsetLeft - scrollLeft);
            //         //     setY(item.initialElement.offsetTop - scrollTop);
            //         //     setPrevX(item.initialElement.offsetLeft - scrollLeft);
            //         //     setPrevY(item.initialElement.offsetTop - scrollTop);
            //         // } else {
            //         setX(item.initialElement.offsetLeft);
            //         setY(item.initialElement.offsetTop);
            //         setPrevX(item.initialElement.offsetLeft);
            //         setPrevY(item.initialElement.offsetTop);
            //         // }

            //     }
            // }, 10);


        }


    }, [item]);

    const handleResize = () => {
        if (isDragging) return;
        if (cell == null) {
            setX(item.initialElement!.offsetLeft)
            setPrevX(item.initialElement!.offsetLeft)
            setY(item.initialElement!.offsetTop)
            setPrevY(item.initialElement!.offsetTop)
            return;

        }
        const cellTop = cell.offsetTop;
        const cellLeft = cell.offsetLeft;
        const offset = getRotationOffset(rotation);

        setX(cellLeft + offset.x)
        setY(cellTop + offset.y)
        setPrevX(cellLeft + offset.x)
        setPrevY(cellTop + offset.y)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [cell, rotation, isDragging]);
    const preventScroll = (e: TouchEvent) => {
        e.preventDefault();
    };
    useEffect(() => {
        console.log("IS Dragging: ", isDragging)
        if (isDragging) {
            setPrevX(x)
            setPrevY(y)



            document.body.addEventListener('touchmove', preventScroll, { passive: false });

            // Calculate the offset from mouse/touch to element when drag starts
            const rect = document.getElementById(item.id)?.getBoundingClientRect();

            const initialOffsetX = rect ? rect.left - x : 0;
            const initialOffsetY = rect ? rect.top - y : 0;

            if (isSelected) {
                onDeselect();
            }

            // Handle both mouse and touch events
            const handleMove = (clientX: number, clientY: number, target: EventTarget | null) => {
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

                if (targetElement?.classList?.contains("cell")) {

                    highlightCells(CellId.fromString(targetElement.id), tempItem);
                } else {
                    unHighlightCells();
                }
                // if (item.starterItem) {
                //     // setX(clientX);
                //     // setY(clientY);
                //     setX(clientX - initialOffsetX)
                //     setY(clientY - initialOffsetY + 5)

                // } else {
                setX(clientX - initialOffsetX)
                setY(clientY - initialOffsetY + 5)
                // Adjust for touch offset
                // }
            };

            const handleEnd = (clientX: number, clientY: number) => {
                console.log("Drag ended")
                unHighlightCells();

                document.body.removeEventListener('touchmove', preventScroll);


                // Find the element under the final position
                const targetElement = document.elementFromPoint(clientX, clientY) as HTMLElement;

                if (!targetElement?.classList?.contains("cell")) {
                    if (item.isDisplayItem && !item.hasMoved) {
                        console.log("Removing item from toolbox");
                        removeItem(item);
                        return;
                    }

                    setX(prevX)
                    setY(prevY)
                } else {
                    // Create item with current rotation for placement validation
                    const rotatedDims = getRotatedDimensions(rotation);
                    const tempItem = {
                        ...item,
                        cellsLong: rotatedDims.cellsWide,
                        cellsTall: rotatedDims.cellsTall
                    };

                    if (!canPlaceItem(CellId.fromString(targetElement.id), tempItem)) {
                        if (item.isDisplayItem && !item.hasMoved) {
                            console.log("Removing item from toolbox");
                            removeItem(item);
                            return;
                        }
                        setX(prevX);
                        setY(prevY);
                        setIsDragging(false);
                        return;
                    }

                    const cellTop = targetElement.offsetTop
                    const cellLeft = targetElement.offsetLeft;
                    const offset = getRotationOffset(rotation);

                    // Position the item at the cell location with rotation offset
                    const finalX = cellLeft + offset.x;
                    const finalY = cellTop + offset.y;

                    setX(finalX)
                    setY(finalY)
                    setPrevX(finalX)
                    setPrevY(finalY)

                    placeItem(CellId.fromString(targetElement.id), tempItem, cell != null ? CellId.fromString(cell.id) : null);
                    console.log("Placed item at cell:", targetElement);
                    setCell(targetElement)
                }
                setIsDragging(false)
            };

            // Mouse events
            document.onmousemove = (e) => {
                e.preventDefault();
                handleMove(e.clientX, e.clientY, e.target);
            };

            document.onmouseup = (e) => {
                handleEnd(e.clientX, e.clientY);
                document.onmousemove = null;
                document.onmouseup = null;
                document.ontouchmove = null;
                document.ontouchend = null;
            };

            // Touch events
            document.ontouchmove = (e) => {
                e.preventDefault(); // Prevent scrolling
                const touch = e.touches[0];
                handleMove(touch.clientX, touch.clientY, e.target);
            };

            document.ontouchend = (e) => {
                const touch = e.changedTouches[0];
                handleEnd(touch.clientX, touch.clientY);
                document.removeEventListener('touchmove', preventScroll);
                document.onmousemove = null;
                document.onmouseup = null;
                document.ontouchmove = null;
                document.ontouchend = null;
            };
            return () => {

                document.removeEventListener('touchmove', preventScroll);

            };

        } else {
            document.onmousemove = null;
            document.onmouseup = null;
            document.ontouchmove = null;
            document.ontouchend = null;
            document.body.removeEventListener('touchmove', preventScroll);
        }
    }, [isDragging, cell, rotation])

    const rotatedDims = getRotatedDimensions(rotation);



    function checkCanRotate() {
        if (cell) {
            const newRotation = (rotation + 1);
            const rotatedDims = getRotatedDimensions(newRotation);

            // Create a temporary item with rotated dimensions for validation
            const tempItem = {
                ...item,
                cellsLong: rotatedDims.cellsWide,
                cellsTall: rotatedDims.cellsTall
            };
            console.log("Can place item at cell:", canPlaceItem(CellId.fromString(cell?.id || ""), tempItem));

            setCanRotate(canPlaceItem(CellId.fromString(cell.id), tempItem));
        } else {
            setCanRotate(false);
        }

    }

    return (
        x == 0 || y == 0 || !inViewport ? null :
            <>
                <div
                    id={item.id}
                    ref={itemRef}
                    className={`draggable-item ${isDragging ? "dragging" : isSelected ? "selected" : ""} ${!item.moveable ? "not-moveable" : ""} ${visible ? "" : "invisible"}`}
                    style={{
                        top: `${y}px`,
                        left: `${x}px`,
                        width: `${item.cellsLong * (item.isDisplayItem && !isDragging && !item.hasMoved ? 10 : cellSize) - (isSelected ? 4 : 0)}px`,
                        height: `${item.cellsTall * (item.isDisplayItem && !isDragging && !item.hasMoved ? 10 : cellSize) - (isSelected ? 4 : 0)}px`,
                        rotate: `${rotation * 90}deg`,
                        transformOrigin: 'center center',
                        fontSize: `${fontSize}px`
                    }}
                    onMouseDown={item.moveable ? () => setIsDragging(true) : undefined}
                    onTouchStart={item.moveable ? (e) => {
                        e.preventDefault();
                        setIsDragging(true);
                    } : undefined}
                    onClick={(e) => {
                        e.stopPropagation();
                        if (!item.hasMoved) return;
                        if (isSelected) {
                            onDeselect();
                        } else {
                            checkCanRotate();
                            onSelect(item.id);
                        }
                    }}
                >
                    {item.icon.includes("custom-") ?
                        <div className="custom-icon" >
                            <div>
                                <p ref={textRef}>{item.icon.split("custom-")[1]}</p>

                            </div>
                        </div>
                        :
                        <img src={item.icon} alt="icon" />
                    }
                </div >
                {(isSelected || isUnselecting) && (
                    <>
                        {/* Check if mobile device */}
                        {/Mobi|Android/i.test(navigator.userAgent) ? (
                            // Mobile layout - split options left and right
                            <>
                                <div
                                    className={`draggable-item-options mobile-left ${isUnselecting ? "exiting" : ""}`}
                                    style={{
                                        top: `${y + (item.cellsTall * cellSize) / 2 - 10}px`, // Center vertically (10px = half of options height)
                                        left: `${x + (item.cellsLong * cellSize) / 2 - (rotatedDims.width) / 2 - 20}px`, // 30px left of item
                                        width: `10px`
                                    }}
                                >
                                    <img
                                        src={Rotate}
                                        alt="rotate"
                                        className={"rotate-icon" + (canRotate ? " can-rotate" : " cannot-rotate")}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            rotateItem();
                                        }}
                                    />
                                </div>
                                <div
                                    className={`draggable-item-options mobile-right ${isUnselecting ? "exiting" : ""}`}
                                    style={{
                                        top: `${y + (item.cellsTall * cellSize) / 2 - 10}px`, // Center vertically
                                        left: `${x + (item.cellsLong * cellSize) / 2 + (rotatedDims.width) / 2 + 10}px`, // 10px right of item
                                        width: `10px`
                                    }}
                                >
                                    <img
                                        src={XMark}
                                        alt="delete"
                                        className="delete-icon"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            deleteItem(item, CellId.fromString(cell?.id || ""));
                                        }}
                                    />
                                </div>
                            </>
                        ) : (
                            // Desktop layout - options above item
                            <div
                                className={`draggable-item-options ${isUnselecting ? "exiting" : ""}`}
                                style={{
                                    top: `${y + (item.cellsTall * cellSize) / 2 - (rotatedDims.height) / 2 - 20}px`,
                                    left: `${x + (item.cellsLong * cellSize) / 2 - (rotatedDims.width) / 2}px`,
                                    width: `${rotatedDims.width}px`
                                }}
                            >
                                <img
                                    src={Rotate}
                                    alt="rotate"
                                    className={"rotate-icon" + (canRotate ? " can-rotate" : " cannot-rotate")}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        rotateItem();
                                    }}
                                />
                                <img
                                    src={XMark}
                                    alt="delete"
                                    className="delete-icon"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteItem(item, CellId.fromString(cell?.id || ""));
                                    }}
                                />
                            </div>
                        )}
                    </>
                )
                }

            </>
    )
}

export default DraggableItem