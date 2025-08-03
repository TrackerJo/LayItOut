import { useEffect, useRef, useState } from "react";
import type { Section } from "../constants";
import "./section.css";

type SectionAreaProps = {
    section: Section
    cellSize: number
    visible?: boolean
}

function SectionArea({ section, visible, cellSize }: SectionAreaProps) {


    const [x, setX] = useState(section.cellElement?.offsetLeft ?? 0);
    const [y, setY] = useState(section.cellElement?.offsetTop ?? 0);
    const textRef = useRef<HTMLParagraphElement>(null);
    const [fontSize, setFontSize] = useState<number>(16);

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
        temp.style.whiteSpace = 'no-wrap';
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

    const handleResize = () => {
        if (section.cellElement == null) return;


        setX(section.cellElement.offsetLeft)
        setY(section.cellElement.offsetTop)

    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [section.cellElement]);
    return (
        section.cellElement && (
            <div className={`section ${visible ?? true ? "" : "invisible"}`} style={{
                top: `${section.cellElement.offsetTop}px`,
                left: `${section.cellElement.offsetLeft}px`,
                width: `${section.cellsLong * cellSize - 2}px`,
                height: `${section.cellsTall * cellSize - 2}px`,

            }}>
                <h2 className="section-title" style={{
                    fontSize: `${fontSize}px`
                }} ref={textRef} >
                    {section.name}
                </h2>

            </div >
        )
    );
}

export default SectionArea;