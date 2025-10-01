import { useEffect, useRef, useState } from "react"
import "./draggable_item.css"
import { Booth } from "../constants";
import XMark from "../assets/xmark.png";
import Checkmark from "../assets/checkmark.png";
import PersonAdd from "../assets/person_add.png"
import "./booth_item.css";



type BoothItemProps = {
    booth: Booth,
    isViewingBooth: boolean,
    isSelected: boolean,
    onSelect: (boothId: string) => void,
    onDeselect: () => void,
    isUnselecting: boolean,
    onPickBooth: (boothId: string) => void,
    onRemoveVendorFromBooth: (boothId: string) => void,
    onAddVendorToBooth: (boothId: string) => void,
    visible: boolean,
    cellSize: number,
    hasPickedBooth: boolean,
    canPick: boolean,
    isPublicViewingBooth: boolean
}

function BoothItem({ booth, isViewingBooth, isSelected, onDeselect, onPickBooth, onSelect, isUnselecting, visible, cellSize, canPick, hasPickedBooth, onAddVendorToBooth, onRemoveVendorFromBooth, isPublicViewingBooth = false }: BoothItemProps) {
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)
    const textRef = useRef<HTMLParagraphElement>(null);
    const [prevX, setPrevX] = useState<number>(0)
    const [prevY, setPrevY] = useState<number>(0)
    const [isDragging, setIsDragging] = useState<boolean>(false)

    const [cell, setCell] = useState<HTMLElement | null>(null);

    const [fontSize, setFontSize] = useState<number>(12); // Default font size

    const itemRef = useRef<HTMLDivElement>(null);
    const [inViewport, setInViewport] = useState<boolean>(true);



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




    useEffect(() => {




        if (booth.initialElement!.classList.contains("cell")) {
            console.log("Setting cell to initial element:", booth.initialElement!.children[0] as HTMLElement);
            setCell(booth.initialElement!.children[0] as HTMLElement);
        }

        setX(booth.initialElement!.offsetLeft);
        setY(booth.initialElement!.offsetTop);
        setPrevX(booth.initialElement!.offsetLeft);
        setPrevY(booth.initialElement!.offsetTop);





    }, [booth]);

    const handleResize = () => {
        if (isDragging) return;
        if (cell == null) {
            setX(booth.initialElement!.offsetLeft)
            setPrevX(booth.initialElement!.offsetLeft)
            setY(booth.initialElement!.offsetTop)
            setPrevY(booth.initialElement!.offsetTop)
            return;

        }
        const cellTop = cell.offsetTop;
        const cellLeft = cell.offsetLeft;

        setX(cellLeft)
        setY(cellTop)
        setPrevX(cellLeft)
        setPrevY(cellTop)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [cell, isDragging]);


    return (
        x == 0 || y == 0 || !inViewport ? null :
            <>
                <div
                    id={booth.id}
                    ref={itemRef}
                    className={`booth draggable-item ${hasPickedBooth ? "viewing" : ""} ${isDragging ? "dragging" : isSelected ? "selected" : ""} ${booth.user != null && !isViewingBooth ? "no-select" : ""} ${isPublicViewingBooth ? "viewing" : ""} ${visible ? "" : "invisible"} ${!canPick && !isPublicViewingBooth ? "cannot-pick" : ""}`}
                    style={{
                        top: `${y}px`,
                        left: `${x}px`,
                        width: `${booth.cellsLong * (cellSize) - (isSelected ? 4 : 0)}px`,
                        height: `${booth.cellsTall * (cellSize) - (isSelected ? 4 : 0)}px`,

                        transformOrigin: 'center center',
                        fontSize: `${fontSize}px`
                    }}

                    onClick={(e) => {
                        e.stopPropagation();
                        if (hasPickedBooth) return;
                        if (booth.user != null && !isViewingBooth) return;
                        if (!canPick) return;
                        if (isSelected) {
                            onDeselect();
                        } else {

                            onSelect(booth.id);
                        }
                    }}
                >

                    <div className={"custom-icon"} >
                        <div className="booth-inner">
                            <p >{booth.name}</p>
                            <p className="booth-sizing">{booth.cellsLong}ft x {booth.cellsTall}ft</p>
                            <p ref={textRef}>{booth.user == null ? "Open " : booth.user!.businessName}</p>

                        </div>
                    </div>

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
                                        top: `${y + (booth.cellsTall * cellSize) / 2 - 10}px`, // Center vertically (10px = half of options height)
                                        left: `${x + (booth.cellsLong * cellSize) / 2 - (booth.cellsLong) / 2 - 20}px`, // 30px left of item
                                        width: `10px`
                                    }}
                                >
                                    {isViewingBooth ? <img
                                        src={PersonAdd}
                                        alt="Person Add"
                                        className={"person-icon"}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onAddVendorToBooth(booth.id);


                                        }}
                                    /> : <img
                                        src={Checkmark}
                                        alt="pick"
                                        className={"pick-icon"}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onPickBooth(booth.id);

                                        }}
                                    />}
                                </div>
                                <div
                                    className={`draggable-item-options mobile-right ${isUnselecting ? "exiting" : ""}`}
                                    style={{
                                        top: `${y + (booth.cellsTall * cellSize) / 2 - 10}px`, // Center vertically
                                        left: `${x + (booth.cellsLong * cellSize) / 2 + (booth.cellsLong * cellSize) / 2 + 10}px`, // 10px right of item
                                        width: `10px`
                                    }}
                                >
                                    {isViewingBooth && booth.user != null ? <img
                                        src={XMark}
                                        alt="delete"
                                        className="delete-icon"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onRemoveVendorFromBooth(booth.id);
                                        }}
                                    /> : !isViewingBooth ? <>
                                        <img
                                            src={XMark}
                                            alt="delete"
                                            className="delete-icon"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onDeselect();
                                            }}
                                        />
                                    </> : <></>}
                                </div>
                            </>
                        ) : (
                            // Desktop layout - options above item
                            <div
                                className={`draggable-item-options ${isUnselecting ? "exiting" : ""}`}
                                style={{
                                    top: `${y + (booth.cellsTall * cellSize) / 2 - (booth.cellsTall * cellSize) / 2 - 20}px`,
                                    left: `${x + (booth.cellsLong * cellSize) / 2 - (booth.cellsLong * cellSize) / 2}px`,
                                    width: `${booth.cellsLong * cellSize}px`
                                }}
                            >
                                {isViewingBooth && booth.user == null ? <img
                                    src={PersonAdd}
                                    alt="Person Add"
                                    className={"person-icon"}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onAddVendorToBooth(booth.id);


                                    }}
                                /> : isViewingBooth && booth.user != null ? <></> : <img
                                    src={Checkmark}
                                    alt="pick"
                                    className={"pick-icon"}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onPickBooth(booth.id);

                                    }}
                                />}
                                {isViewingBooth && booth.user != null ? <img
                                    src={XMark}
                                    alt="delete"
                                    className="delete-icon"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onRemoveVendorFromBooth(booth.id);
                                    }}
                                /> : !isViewingBooth ? <>
                                    <img
                                        src={XMark}
                                        alt="delete"
                                        className="delete-icon"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onDeselect();
                                        }}
                                    />
                                </> : <></>}
                            </div>
                        )}
                    </>
                )
                }

            </>
    )
}

export default BoothItem