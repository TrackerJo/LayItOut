import { useEffect, useState } from "react";
import type { Section } from "../constants";
import "./section.css";



function SectionArea({ section }: { section: Section }) {

    const cellSize = /Mobi|Android/i.test(navigator.userAgent) ? 5 : 10;
    const [x, setX] = useState(section.cellElement?.offsetLeft ?? 0);
    const [y, setY] = useState(section.cellElement?.offsetTop ?? 0);

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
            <div className="section" style={{
                top: `${section.cellElement.offsetTop}px`,
                left: `${section.cellElement.offsetLeft}px`,
                width: `${section.cellsLong * cellSize - 2}px`,
                height: `${section.cellsTall * cellSize - 2}px`,

            }}>
                <h2 className="section-title">
                    {section.name}
                </h2>

            </div>
        )
    );
}

export default SectionArea;