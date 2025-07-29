import { useEffect, useState } from "react"
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
    unHighlightCells: () => void
    isUnselecting: boolean
}

function DraggableItem({ item, canPlaceItem, placeItem, deleteItem, deleteItemRotate, isSelected, onSelect, onDeselect, isUnselecting, highlightCells, unHighlightCells }: DraggableItemProps) {
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)
    const [prevX, setPrevX] = useState<number>(0)
    const [prevY, setPrevY] = useState<number>(0)
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [rotation, setRotation] = useState<number>(0)
    const [cell, setCell] = useState<HTMLElement | null>(null);
    const [canRotate, setCanRotate] = useState<boolean>(true);

    // Helper function to get rotated dimensions
    const getRotatedDimensions = (rotation: number) => {
        const isRotated = rotation % 2 === 1; // 90° or 270°
        return {
            width: isRotated ? item.cellsTall * 25 : item.cellsLong * 25,
            height: isRotated ? item.cellsLong * 25 : item.cellsTall * 25,
            cellsWide: isRotated ? item.cellsTall : item.cellsLong,
            cellsTall: isRotated ? item.cellsLong : item.cellsTall
        };
    };

    // Helper function to calculate position offset for rotation
    // Helper function to calculate position offset for rotation
    const getRotationOffset = (rotation: number) => {
        const originalWidth = item.cellsLong * 25;
        const originalHeight = item.cellsTall * 25;

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
        const tempItem = {
            ...item,
            cellsLong: rotatedDims.cellsWide,
            cellsTall: rotatedDims.cellsTall
        };
        console.log("Rotating item", item.id, "to rotation", newRotation, "with tempItem", tempItem);
        console.log("Current cell:", cell);
        console.log("Can place item at cell:", canPlaceItem(CellId.fromString(cell?.id || ""), tempItem));
        // Check if rotation is valid at current position
        if (cell && canPlaceItem(CellId.fromString(cell.id), tempItem)) {
            setRotation(newRotation);
            deleteItemRotate(item, CellId.fromString(cell.id));
            item.roation = newRotation; // Update item's rotation state

            // Calculate new position based on rotation
            const offset = getRotationOffset(newRotation);
            const cellLeft = cell.offsetLeft;
            const cellTop = cell.offsetTop;

            setX(cellLeft + offset.x);
            setY(cellTop + offset.y);
            setPrevX(cellLeft + offset.x);
            setPrevY(cellTop + offset.y);

            // Update the item's dimensions in the grid
            placeItem(CellId.fromString(cell.id), tempItem, CellId.fromString(cell.id));
        }
    };

    useEffect(() => {
        if (item.initialElement != null && !item.hasMoved) {

            setX(item.initialElement.offsetLeft)
            setPrevX(item.initialElement.offsetLeft)
            setY(item.initialElement.offsetTop)
            setPrevY(item.initialElement.offsetTop)
        }


    }, [item])

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

    useEffect(() => {
        console.log("IS Dragging: ", isDragging)
        if (isDragging) {
            setPrevX(x)
            setPrevY(y)

            // Calculate the offset from mouse to element when drag starts
            const rect = document.getElementById(item.id)?.getBoundingClientRect();
            const initialOffsetX = rect ? rect.left - x : 0;
            const initialOffsetY = rect ? rect.top - y : 0;
            if (isSelected) {
                onDeselect();

            }
            document.onmousemove = (e) => {


                // Create item with current rotation for highlighting
                const rotatedDims = getRotatedDimensions(rotation);
                const tempItem = {
                    ...item,
                    cellsLong: rotatedDims.cellsWide,
                    cellsTall: rotatedDims.cellsTall
                };

                highlightCells(CellId.fromString((e.target! as HTMLElement).id), tempItem);
                setX(e.clientX - initialOffsetX)
                setY(e.clientY - initialOffsetY + 5)
            }

            document.onmouseup = (e) => {
                console.log(e.target)
                unHighlightCells();
                const targetElement = e.target! as HTMLElement

                if (!targetElement.classList.contains("cell")) {
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
                    setCell(targetElement)
                }
                setIsDragging(false)
            }
        } else {
            document.onmousemove = null
            document.onmouseup = null
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
        <>
            <div
                id={item.id}
                className={`draggable-item ${isDragging ? "dragging" : isSelected ? "selected" : ""}`}
                style={{
                    top: `${y}px`,
                    left: `${x}px`,
                    width: `${item.cellsLong * 25 - (isSelected ? 4 : 0)}px`,
                    height: `${item.cellsTall * 25 - (isSelected ? 4 : 0)}px`,
                    rotate: `${rotation * 90}deg`,
                    transformOrigin: 'center center'
                }}
                onMouseDown={() => setIsDragging(true)}
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
                <img src={item.icon} alt="icon" />
            </div>
            {(isSelected || isUnselecting) && (
                <div
                    className={`draggable-item-options ${isUnselecting ? "exiting" : ""}`}
                    style={{
                        top: `${y + (item.cellsTall * 25) / 2 - (rotatedDims.height) / 2 - 25}px`,

                        left: `${x + (item.cellsLong * 25) / 2 - (rotatedDims.width) / 2}px`,
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

export default DraggableItem