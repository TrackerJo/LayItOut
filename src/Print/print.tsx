import { useEffect, useRef, useState } from 'react'


import './print.css'
import '../index.css'
import AreaComponent from '../Components/area';
import type { CellProps } from '../Components/cell';
import DraggableItem from '../Components/draggable_item';
import { Area, CellId, Item, Section, StaringItem, Template } from '../constants';



import SectionArea from '../Components/section';


import { getArea, saveCompanyArea } from '../api/firestore';
import { getLocalArea } from '../api/local_firestore';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(

  <Print />

)


function Print() {
  const [isMobile, setIsMobile] = useState<boolean>(/Mobi|Android/i.test(navigator.userAgent));
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [cells, setCells] = useState<CellProps[][]>([]);
  const [items, setItems] = useState<Item[]>([]);



  const cellSize = 10;



  const [sections, setSections] = useState<Section[]>([]);

  const [companyId, setCompanyId] = useState<string>("");
  const [areaId, setAreaId] = useState<string>("");
  const [designName, setDesignName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);






  function getSectionByCellId(cellId: CellId, sections: Section[]): Section | null {
    for (const section of sections) {
      if (cellId.x >= section.cellId.x && cellId.x < section.cellId.x + section.cellsLong &&
        cellId.y >= section.cellId.y && cellId.y < section.cellId.y + section.cellsTall) {
        return section;
      }
    }
    return null;
  }





  function generateCells(sectionsToGenerate: Section[]) {
    //check if localStorage has template




    let currentWidth = width;
    let currentHeight = height;

    const newCells: CellProps[][] = [];

    for (const section of sectionsToGenerate) {

      console.log("Generating cells for section", section.name, "at", section.cellId, "with size", section.cellsLong, "x", section.cellsTall)
      console.log("Needed section Width:", (section.cellsLong + section.cellId.x), "Current width:", currentWidth)

      if ((section.cellsLong + section.cellId.x) > currentWidth) {

        console.log("Added section Width:", section.cellsLong + section.cellId.x)
        currentWidth += (section.cellsLong + section.cellId.x) - currentWidth;
      }
      console.log("Needed section Height:", (section.cellsTall + section.cellId.y), "Current height:", currentHeight)
      if ((section.cellsTall + section.cellId.y) > currentHeight) {
        console.log("Added section Height:", section.cellsTall + section.cellId.y)
        currentHeight += (section.cellsTall + section.cellId.y) - currentHeight;
      }
    }


    setWidth(currentWidth);
    setHeight(currentHeight);


    [...Array((currentHeight)).keys()].map((j) => {
      const rowCells: CellProps[] = [];
      [...Array((currentWidth)).keys()].map((i) => {

        rowCells.push({
          id: new CellId({ x: i, y: j }), hasItem: false, itemId: "", mouseOver: false, canPlaceItem: false, mouseOverLocation: "", inSection: getSectionByCellId(new CellId({ x: i, y: j }), sectionsToGenerate) != null, size: cellSize
        })
      })
      newCells.push(rowCells)
    })
    setCells([...newCells]);

    setTimeout(() => {
      const newStartingItems: StaringItem[] = []
      const newSections: Section[] = [...sectionsToGenerate];
      for (const section of newSections) {


        section.cellElement = document.querySelector(`.App #${section.cellId.toId()}.cell:not(.cell-border)`) as HTMLElement;


        newStartingItems.push(...section.startingItems.map((item) => {
          return new StaringItem({
            cell: new CellId({ x: section.cellId.x + item.cell.x, y: section.cellId.y + item.cell.y }),
            item: new Item({
              id: item.item.id,
              name: item.item.name,
              cellsLong: item.item.cellsLong,
              cellsTall: item.item.cellsTall,
              icon: item.item.icon,
              initialElement: document.querySelector(`.App #${item.cell.toId()}.cell:not(.cell-border)`) as HTMLElement,
              starterItem: true,
              moveable: item.item.moveable,
              rotation: item.item.rotation || 0 // Ensure rotation is set
            })
          })
        }))

      }

      setSections([...newSections]);

      for (const startingItem of newStartingItems) {
        const getRotatedDimensions = (rotation: number) => {
          const isRotated = rotation % 2 === 1; // 90° or 270°
          return {
            cellsLong: isRotated ? startingItem.item.cellsTall : startingItem.item.cellsLong,
            cellsTall: isRotated ? startingItem.item.cellsLong : startingItem.item.cellsTall
          };
        };

        // Get the current rotation from the item
        const rotation = startingItem.item.rotation || 0;
        const rotatedDims = getRotatedDimensions(rotation);

        for (let i = 0; i < rotatedDims.cellsTall; i++) {
          for (let j = 0; j < rotatedDims.cellsLong; j++) {
            newCells[startingItem.cell.y + i][startingItem.cell.x + j].hasItem = true;
            newCells[startingItem.cell.y + i][startingItem.cell.x + j].itemId = startingItem.item.id;
          }
        }

        startingItem.item.initialElement = document.querySelector(`.App #${startingItem.cell.toId()}.cell:not(.cell-border)`) as HTMLElement;



        setItems((old) => [...old, startingItem.item])
      }

      setCells([...newCells]);
      setTimeout(() => {
        window.print();


        // setTimeout(() => {
        //   //pass in specific styles for printing


        // }, 1000)

      }, 500)
    }, 100)





  }



  async function loadArea() {
    const urlParams = new URLSearchParams(window.location.search);
    const companyId = urlParams.get("companyId");
    const areaId = urlParams.get("areaId");
    const designName = urlParams.get("designName");
    const designId = urlParams.get("designId");
    if (!companyId || !areaId || !designName || !designId) {
      alert("Invalid URL parameters");
      return;
    }
    setCompanyId(companyId);
    setAreaId(areaId);
    setDesignName(designName);


    const sectionsToGenerate: Section[] = [];


    let screenshotSections = localStorage.getItem("printSections");
    console.log("Screenshot sections from localStorage", screenshotSections);
    screenshotSections = screenshotSections?.split("LAYOUTSEPARATOR") || "";
    const screenshotSectionsObjects = [] as Section[];
    for (const sectionString of screenshotSections) {
      console.log("Section string", sectionString);


      screenshotSectionsObjects.push(Section.fromJSON(sectionString));
    }

    setSections([...screenshotSectionsObjects.map((section) => {
      return new Section({
        name: section.name,
        cellId: new CellId({ x: section.cellId.x, y: section.cellId.y }),
        cellsLong: section.cellsLong,
        cellsTall: section.cellsTall,
        startingItems: section.startingItems,
        items: section.startingItems.map((i) => new Item({
          id: i.item.id,
          name: i.item.name,
          sectionCell: i.cell,
          cellsLong: i.item.cellsLong,
          cellsTall: i.item.cellsTall,
          icon: i.item.icon,
          moveable: i.item.moveable,
          starterItem: i.item.starterItem,
          rotation: i.item.rotation,

        }))
      })
    }
    )]);
    sectionsToGenerate.push(...screenshotSectionsObjects.map((section) => {
      return new Section({
        name: section.name,
        cellId: new CellId({ x: section.cellId.x, y: section.cellId.y }),
        cellsLong: section.cellsLong,
        cellsTall: section.cellsTall,
        startingItems: section.startingItems,
        items: section.startingItems.map((i) => new Item({
          id: i.item.id,
          name: i.item.name,
          sectionCell: i.cell,
          cellsLong: i.item.cellsLong,
          cellsTall: i.item.cellsTall,
          icon: i.item.icon,
          moveable: i.item.moveable,
          starterItem: i.item.starterItem,
          rotation: i.item.rotation,

        }))
      })
    }
    ));


    console.log("SECTIONS TO GENERATE", sectionsToGenerate);

    generateCells(sectionsToGenerate);

  }

  useEffect(() => {


    loadArea();

    async function test() {
      const area = getLocalArea();
      saveCompanyArea("dMjfwNN0XFes0WxUH8h1", area);
    }
    test();


  }, [])


  function flattenCells(cells: CellProps[][]): CellProps[] {
    let flattenedCells: CellProps[] = [];

    cells.map((row) => flattenedCells = [...flattenedCells, ...row])

    return flattenedCells
  }







  return (
    <>

      <div className="App">
        <h1 className='title'>LayItOut</h1>
        <br />

        {loading && (
          <>
            <div className="loader-backdrop"></div>
            <div className="loader"></div>
          </>
        )} <div className='layout'>

          <AreaComponent width={width * cellSize} height={height * cellSize} cells={flattenCells(cells)} />

        </div>
      </div>
      {sections.map((section) => <SectionArea takingPhoto={false} section={section} key={section.cellId.toId()} visible={true} cellSize={cellSize} />)}
      {items.map((item) => {
        return <DraggableItem cellSize={cellSize} isViewingDesign={true} removeItem={() => { }} visible={true}

          item={item} canPlaceItem={() => { return false }} placeItem={() => { }} deleteItemRotate={() => { }} highlightCells={() => { }} unHighlightCells={() => { }} key={item.id} deleteItem={() => { }} isSelected={false}
          onSelect={() => { }}
          isUnselecting={false}
          onDeselect={() => { }} />
      })}

      <div className="print-footer">
        <p>Printed Layout from LayItOut.com</p>
        <p>Design Name: {designName}</p>
        <p>Generated on: {new Date().toLocaleString()}</p>
      </div>
    </>
  )
}

export default Print
