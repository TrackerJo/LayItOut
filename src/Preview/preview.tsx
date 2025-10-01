import { useEffect, useRef, useState } from 'react'


import './preview.css'
import '../index.css'
import AreaComponent from '../Components/area';
import type { CellProps } from '../Components/cell';
import DraggableItem from '../Components/draggable_item';
import { Area, Booth, CellId, Design, InventoryItem, Item, Section, StaringItem, Template } from '../constants';
import Toolbox from '../Components/toolbox';


import SectionArea from '../Components/section';
import ForwardIcon from '../assets/forward.png';

import LayoutDialog from '../Components/layout_dialog';
import LayoutIcon from '../assets/layout_icon_white.png';
import TemplateIcon from '../assets/template.png';
import TemplateDialog from '../Components/template_dialog';
import AddCustomItemDialog from '../Components/add_custom_item_dialog';

import { getArea, getAreaDesign, saveAreaTemplates, saveCompanyArea, updateAreaDesign } from '../api/firestore';
import { getLocalArea } from '../api/local_firestore';
import { createRoot } from 'react-dom/client';
import BoothItem from '../Components/booth_item';

createRoot(document.getElementById('root')!).render(

  <Layout />

)


function Layout() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [cells, setCells] = useState<CellProps[][]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [mobileHeight, setMobileHeight] = useState<number>(0);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [unselectingItemIds, setUnselectingItemIds] = useState<string[]>([]);
  const cellSize = 10;
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);

  const layoutDialogRef = useRef<HTMLDialogElement>(null);
  const [layoutDialogOpen, setLayoutDialogOpen] = useState<boolean>(false);
  const [layoutSections, setLayoutSections] = useState<Section[]>([]);

  const [sections, setSections] = useState<Section[]>([]);

  const [templates, setTemplates] = useState<Template[]>([]);
  const [templateDialogOpen, setTemplateDialogOpen] = useState<boolean>(false);
  const templateDialogRef = useRef<HTMLDialogElement>(null);

  const [mobileAreas, setMobileAreas] = useState<{ width: number, height: number, sectionName: string }[]>([]);
  const [mobileCells, setMobileCells] = useState<{ sectionName: string, cells: CellProps[][] }[]>([]);
  const [mobileViewingSection, setMobileViewingSection] = useState<string | null>(null);
  const [isCreatingTemplate, setIsCreatingTemplate] = useState<boolean>(false);
  const [isEditingTemplate, setIsEditingTemplate] = useState<boolean>(false);
  const [isViewingDesign, setIsViewingDesign] = useState<boolean>(false);
  const [isViewingArea, setIsViewingArea] = useState<boolean>(false);
  const [isEditingDesign, setIsEditingDesign] = useState<boolean>(false);
  const [isClientEditingDesign, setIsClientEditingDesign] = useState<boolean>(false);
  const [designName, setDesignName] = useState<string>("");
  const [templateName, setTemplateName] = useState<string>("");
  const [companyId, setCompanyId] = useState<string>("");
  const [areaId, setAreaId] = useState<string>("");
  const [designId, setDesignId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null);
  const [takingPhoto, setTakingPhoto] = useState<boolean>(false);
  const [tookScreenshot, setTookScreenshot] = useState<boolean>(false);
  const [booths, setBooths] = useState<Booth[]>([]);

  const addCustomItemDialogRef = useRef<HTMLDialogElement>(null);

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
    if (isMobile) {
      let mobileHeight = 0;
      const newMobileCells: { sectionName: string, cells: CellProps[][] }[] = [];
      const newSections: Section[] = [];
      for (const section of sectionsToGenerate) {
        const newCells: CellProps[][] = [];



        const newArea = {
          width: section.cellsLong * cellSize,
          height: section.cellsTall * cellSize,
          sectionName: section.name
        };
        if (newArea.height > mobileHeight) {
          mobileHeight = newArea.height;
        }

        setMobileAreas((old) => [...old, newArea]);
        section.cellId.x = 0;
        section.cellId.y = 0;



        [...Array((newArea.height / cellSize)).keys()].map((j) => {
          const rowCells: CellProps[] = [];
          [...Array((newArea.width / cellSize)).keys()].map((i) => {

            rowCells.push({
              id: new CellId({ x: i, y: j }), hasItem: false, itemId: "", mouseOver: false, canPlaceItem: false, mouseOverLocation: "", inSection: true, size: cellSize
            })
          })
          newCells.push(rowCells)
        })

        newMobileCells.push({ sectionName: section.name, cells: [...newCells] });
        newSections.push(section);
      }



      setMobileCells(newMobileCells);
      setSections(newSections);
      setMobileHeight(mobileHeight);

      setMobileViewingSection(sectionsToGenerate[0] ? sectionsToGenerate[0].name : null);
      setTimeout(() => {
        setLoading(false);

      }, 500)


    } else {
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
        const newBooths: Booth[] = [];
        const newSections: Section[] = [...sectionsToGenerate];
        for (const section of newSections) {


          section.cellElement = document.querySelector(`.App #${section.cellId.toId()}.cell:not(.cell-border)`) as HTMLElement;


          newStartingItems.push(...section.startingItems.map((item) => {
            return new StaringItem({
              cell: new CellId({ x: section.cellId.x + item.cell.x, y: section.cellId.y + item.cell.y }),
              item: new Item({
                ...item.item, // copies all properties
                initialElement: document.querySelector(`.App #${item.cell.toId()}.cell:not(.cell-border)`) as HTMLElement,
                starterItem: true,
                // Ensure rotation is set
              })
            })
          }))

          newStartingItems.push(...section.modifierItems.map((item) => {
            return new StaringItem({
              cell: new CellId({ x: section.cellId.x + item.cell.x, y: section.cellId.y + item.cell.y }),
              item: new Item({
                ...item.item, // copies all properties
                initialElement: document.querySelector(`.App #${item.cell.toId()}.cell:not(.cell-border)`) as HTMLElement,
                starterItem: true,
                // Ensure rotation is set
              })
            })
          }))

          newBooths.push(...section.booths.map((booth) => {
            return new Booth({
              ...booth, // copies all properties
              cell: new CellId({ x: section.cellId.x + booth.cell.x, y: section.cellId.y + booth.cell.y }),
              initialElement: document.querySelector(`.App #${booth.cell.toId()}.cell:not(.cell-border)`) as HTMLElement,
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

        for (const booth of newBooths) {


          // Get the current rotation from the item


          for (let i = 0; i < booth.cellsTall; i++) {
            for (let j = 0; j < booth.cellsLong; j++) {
              newCells[booth.cell.y + i][booth.cell.x + j].hasItem = true;
              newCells[booth.cell.y + i][booth.cell.x + j].itemId = booth.id;
            }
          }

          booth.initialElement = document.querySelector(`.App #${booth.cell.toId()}.cell:not(.cell-border)`) as HTMLElement;



          setBooths((old) => [...old, booth])
        }

        setCells([...newCells]);
        setTimeout(() => {
          setLoading(false);
          takeScreenshot(newSections, sectionsToGenerate);

        }, 500)
      }, 100)

    }



  }

  async function takeScreenshot(sections: Section[], layoutSections: Section[]) {

    setLoading(true);
    setTakingPhoto(true);
    setTimeout(async () => {
      const element = document.getElementById('capture');

      // Export to PNG
      const imgUrl = await domtoimage
        .toPng(element);
      setTakingPhoto(false);
      localStorage.setItem("screenshot", imgUrl);
      setTookScreenshot(true);
      setLoading(false);

    }, 500)
  }

  async function loadArea() {
    const urlParams = new URLSearchParams(window.location.search);

    const sectionsToGenerate: Section[] = [];


    let screenshotSections = localStorage.getItem("screenshotSections");
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
        modifierItems: section.modifierItems,
        booths: section.booths,
        items: section.startingItems.map((i) => new Item({
          ...i.item,


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
        modifierItems: section.modifierItems,
        booths: section.booths,
        items: section.startingItems.map((i) => new Item({
          ...i.item, // copies all properties

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
    // test();


  }, [])

  function handleChangeSection(mobileViewingSection: string, mobileCells: { sectionName: string, cells: CellProps[][] }[], sections: Section[]) {
    if (!isMobile || mobileViewingSection == null) return;
    const newSections: Section[] = [...sections];
    const newItems: Item[] = [];
    const newSection = sections.find((s) => s.name == mobileViewingSection)!;
    console.log("NEW SECTION", newSection)
    console.log("Adding section", newSection.name, newSection.cellId)
    console.log("MOBILE CELLS", mobileCells)
    newSection.cellElement = document.querySelector(`.App #${newSection.name.split(" ").join("-")} #${newSection.name.split(" ").join("")}${newSection.cellId.toId()}.cell:not(.cell-border)`) as HTMLElement;

    // newSection.cellsLong = newSection.cellsLong / 2;
    // newSection.cellsTall = newSection.cellsTall / 2;

    console.log("Section element found", newSection.cellElement)
    for (const startingItem of newSection.startingItems) {
      console.log("Placing starting item", startingItem.item.name, startingItem.cell)
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
          const mobileSection = mobileCells.find((m) => m.sectionName === newSection.name);
          mobileSection!.cells[startingItem.cell.y + i][startingItem.cell.x + j].hasItem = true;
          mobileSection!.cells[startingItem.cell.y + i][startingItem.cell.x + j].itemId = startingItem.item.id;
        }
      }

      startingItem.item.initialElement = document.querySelector(`.App #${newSection.name.split(" ").join("-")} #${newSection.name.split(" ").join("")}${startingItem.cell.toId()}.cell:not(.cell-border)`) as HTMLElement;


      console.log("Adding item to items", startingItem.item.initialElement)
      newItems.push(new Item({
        ...startingItem.item, // copies all properties

        starterItem: true,
      }));
    }


    console.log("Setting sections", newSections)
    setSections([...newSections]);




    console.log("ITEMS", newItems)
    setItems((old) => {
      //check if any of the items are already in the list
      const existingItems = old.filter((i) => !newItems.some((newItem) => newItem.id === i.id));
      return [...existingItems, ...newItems.map((item) => new Item({
        ...item, // copies all properties

        starterItem: true,
      }))];
    }

    );
  }

  function flattenCells(cells: CellProps[][]): CellProps[] {
    let flattenedCells: CellProps[] = [];

    cells.map((row) => flattenedCells = [...flattenedCells, ...row])

    return flattenedCells
  }





  function canPlaceItem(startCell: CellId, item: Item): boolean {
    console.log(startCell)
    const funcCells = isMobile ? mobileCells.find((m) => m.sectionName === mobileViewingSection)!.cells : cells;

    const rowLength = funcCells[startCell.y].length;
    const columnLength = funcCells.length;
    console.log(rowLength, columnLength)

    // Use rotated dimensions for boundary checking
    if (startCell.x + item.cellsLong > rowLength) {
      return false;
    }
    if (startCell.y + item.cellsTall > columnLength) {
      return false;
    }
    const startingSection = getSectionByCellId(startCell, sections);
    if (!startingSection && !isMobile) {
      console.log("Item is out of bounds of any section")
      return false;
    }
    // Use rotated dimensions for collision checking
    for (let i = 0; i < item.cellsTall; i++) {
      for (let j = 0; j < item.cellsLong; j++) {
        //Check section it is in
        if (!isMobile) {
          const section = getSectionByCellId(new CellId({ x: startCell.x + j, y: startCell.y + i }), sections);
          if (!section) {
            console.log("Item is out of bounds of any section")
            return false;
          }
          if (section.name != startingSection!.name) {
            console.log("Item is crossing section boundaries")
            return false;
          }
        }
        if (funcCells[startCell.y + i][startCell.x + j].hasItem && funcCells[startCell.y + i][startCell.x + j].itemId != item.id) {
          console.log("Something is already here")
          return false;
        }
      }
    }

    return true;
  }


  function placeItem(startCell: CellId, item: Item, removeCell: CellId | null) {
    const newCells: CellProps[][] = Array.from(isMobile ? mobileCells.find((m) => m.sectionName === mobileViewingSection)!.cells : cells);

    if (removeCell != null) {
      console.log("Removing item")
      const section = isMobile ? sections.find((m) => m.name === mobileViewingSection)! : getSectionByCellId(removeCell, sections);
      //remove item from section
      section!.items = section!.items.filter((i) => i.id != item.id);

      // Use rotated dimensions for removal
      for (let i = 0; i < item.cellsTall; i++) {
        for (let j = 0; j < item.cellsLong; j++) {
          newCells[removeCell.y + i][removeCell.x + j].hasItem = false;
          newCells[removeCell.y + i][removeCell.x + j].itemId = "";
        }
      }
    }
    const section = isMobile ? sections.find((m) => m.name === mobileViewingSection)! : getSectionByCellId(startCell, sections);
    // Add item to section
    const relativeCell = new CellId({ x: startCell.x - section!.cellId.x, y: startCell.y - section!.cellId.y });
    item.sectionCell = relativeCell;
    section!.items.push(item);

    // Use rotated dimensions for placement
    for (let i = 0; i < item.cellsTall; i++) {
      for (let j = 0; j < item.cellsLong; j++) {
        newCells[startCell.y + i][startCell.x + j].hasItem = true;
        newCells[startCell.y + i][startCell.x + j].itemId = item.id;
      }
    }

    console.log(newCells)
    if (isMobile) {
      const mobileSection = mobileCells.find((m) => m.sectionName === mobileViewingSection);
      if (mobileSection) {
        mobileSection.cells = newCells.map(row => row.map(cell => ({ ...cell })));
        setMobileCells([...mobileCells]);
      }
    }
    else {
      setCells(newCells);
    }

    // If the item is being placed, remove it from the inventory
    console.log("Removing item from inventory", item.name)

    if (!item.hasMoved) {
      const index = inventoryItems.findIndex((i) => i.item.name == item.name && !i.item.hasMoved);
      if (index !== -1) {
        const newInventoryItems = [...inventoryItems];
        newInventoryItems[index].quantity -= 1;
        if (newInventoryItems[index].quantity <= 0) {

          newInventoryItems.splice(index, 1);
        }
        setInventoryItems(newInventoryItems);
      } else {
        setInventoryItems(inventoryItems)
      }
    }

    setItems((old) => {
      console.log("Placing item", item.id)

      console.log("Updating item", item.id)
      if (!old.find((i) => i.id == item.id)!.hasMoved) {


        old.find((i) => i.id == item.id)!.hasMoved = true
      }
      return old;
    })
  }

  function addDraggingItem(item: Item) {
    // items.push(item)
    // setItems(items)
    if (items.find((i) => i.name == item.name && !i.hasMoved && !i.starterItem)) {
      return
    }
    setItems((old) => [...old, item])
  }


  function removeItem(item: Item) {
    console.log("Removing item", item.id)
    setItems((old) => {

      return old.filter((i) => i.id != item.id)
    })
  }


  function deleteItem(item: Item, cell: CellId) {
    const newCells: CellProps[][] = Array.from(cells)

    // Helper function to get rotated dimensions
    const getRotatedDimensions = (rotation: number) => {
      const isRotated = rotation % 2 === 1; // 90° or 270°
      return {
        cellsWide: isRotated ? item.cellsTall : item.cellsLong,
        cellsTall: isRotated ? item.cellsLong : item.cellsTall
      };
    };

    // Get the current rotation from the item
    const rotation = item.rotation || 0;
    const rotatedDims = getRotatedDimensions(rotation);

    // Use rotated dimensions for deletion
    for (let i = 0; i < rotatedDims.cellsTall; i++) {
      for (let j = 0; j < rotatedDims.cellsWide; j++) {
        newCells[cell.y + i][cell.x + j].hasItem = false;
        newCells[cell.y + i][cell.x + j].itemId = "";
      }
    }

    setCells(newCells);
    console.log("DELETING ITEM", item.id)
    setItems((old) => {
      console.log()
      return old.filter((i) => i.id != item.id)
    })
    //add the item to the inventory
    setInventoryItems((old) => {
      const index = old.findIndex((i) => i.item.name == item.name && !i.item.hasMoved);
      if (index !== -1) {
        const newInventoryItems = [...old];
        newInventoryItems[index].quantity += 1;
        return newInventoryItems;
      } else {
        return [...old, new InventoryItem({ item: new Item({ ...item }), quantity: 1 })];
      }
    })
  }

  function deleteItemRotate(item: Item, cell: CellId) {
    const newCells: CellProps[][] = Array.from(isMobile ? mobileCells.find((m) => m.sectionName === mobileViewingSection)!.cells : cells);
    console.log("DELETING ITEM ROTATE", item.id, item.rotation)

    // Helper function to get rotated dimensions
    const getRotatedDimensions = (rotation: number) => {
      const isRotated = rotation % 2 === 1; // 90° or 270°
      return {
        cellsWide: isRotated ? item.cellsTall : item.cellsLong,
        cellsTall: isRotated ? item.cellsLong : item.cellsTall
      };
    };

    // Get the current rotation from the item
    const rotation = item.rotation || 0;
    const rotatedDims = getRotatedDimensions(rotation);

    // Use rotated dimensions for deletion
    for (let i = 0; i < rotatedDims.cellsTall; i++) {
      for (let j = 0; j < rotatedDims.cellsWide; j++) {
        console.log("Deleting cell", cell.y + i, cell.x + j)
        newCells[cell.y + i][cell.x + j].hasItem = false;
        newCells[cell.y + i][cell.x + j].itemId = "";

      }
    }
    setCells([...newCells]);
    console.log("DELETING ITEM", item.id)

    // This function should only clear the grid cells, not remove the item
    // since it's used during rotation to clear the old position
  }
  function highlightCells(startCell: CellId, item: Item) {

    const funcCells = isMobile ? mobileCells.find((m) => m.sectionName === mobileViewingSection)!.cells : cells;

    const newCells: CellProps[][] = Array.from(funcCells)

    if (funcCells[startCell.y] == undefined) {

      unHighlightCells();
      return;
    }
    const canPlace = canPlaceItem(startCell, item);
    // Reset all cells to not hovered
    newCells.forEach(row => row.forEach(cell => { cell.mouseOver = false; cell.canPlaceItem = false; cell.mouseOverLocation = "" }));
    // Highlight the cells that the item would occupy

    for (let i = 0; i < item.cellsTall; i++) {
      for (let j = 0; j < item.cellsLong; j++) {
        if (startCell.y + i < newCells.length && startCell.x + j < newCells[startCell.y + i].length) {
          if (item.cellsLong === 1 && item.cellsTall === 1) {
            newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "single";
          } else if (item.cellsTall === 1) {
            if (j === 0) {
              newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "leftFull";
            } else if (j === item.cellsLong - 1) {
              newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "rightFull";
            } else {
              newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "middleFull";
            }
          } else if (item.cellsLong === 1) {
            if (i === 0) {
              newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "topFull";
            } else if (i === item.cellsTall - 1) {
              newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "bottomFull";
            } else {
              newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "middleVFull";
            }
          }

          else if (i === 0 && j === 0) {
            newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "topLeftCorner";
          } else if (i === 0 && j === item.cellsLong - 1) {
            newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "topRightCorner";
          } else if (i === item.cellsTall - 1 && j === 0) {
            newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "bottomLeftCorner";
          } else if (i === item.cellsTall - 1 && j === item.cellsLong - 1) {
            newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "bottomRightCorner";
          } else if (i === 0) {
            newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "top";
          } else if (i === item.cellsTall - 1) {
            newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "bottom";
          } else if (j === 0) {
            newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "left";
          } else if (j === item.cellsLong - 1) {
            newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "right";
          } else {
            newCells[startCell.y + i][startCell.x + j].mouseOverLocation = "middle";
          }
          newCells[startCell.y + i][startCell.x + j].mouseOver = true;
          newCells[startCell.y + i][startCell.x + j].canPlaceItem = canPlace;
        }
      }
    }
    if (isMobile) {
      // Update the mobile cells
      const mobileSection = mobileCells.find((m) => m.sectionName === mobileViewingSection);
      if (mobileSection) {
        mobileSection.cells = newCells.map(row => row.map(cell => ({ ...cell }))); // Create a new array to trigger re-render
        setMobileCells([...mobileCells]);
      }
      setMobileCells((old) => old.map((m) => m.sectionName === mobileViewingSection ? { ...m, cells: newCells } : m));

    } else {
      setCells(newCells);
    }
  }

  function unHighlightCells() {
    const newCells: CellProps[][] = Array.from(isMobile ? mobileCells.find((m) => m.sectionName === mobileViewingSection)!.cells : cells);
    newCells.forEach(row => row.forEach(cell => {
      cell.mouseOver = false;
      cell.canPlaceItem = false;
      cell.mouseOverLocation = "";
    }));
    setCells(newCells);
  }

  useEffect(() => {
    handleChangeSection(mobileViewingSection!, mobileCells, sections);
  }, [mobileViewingSection]);


  useEffect(() => {
    const handleDocumentClick = () => {

      const item = items.find((i) => i.id === selectedItemId)!;
      console.log("Unselecting item", selectedItemId)
      setSelectedItemId(null)

      if (!item) return;
      setUnselectingItemIds((prev) => [...prev, item.id])
      console.log("Unselecting item", item.id)

      setTimeout(() => {
        setUnselectingItemIds((prev) => prev.filter((id) => id !== item.id))
      }, 300)
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [selectedItemId, items]);

  function onDeselectItem(itemId: string) {

    setSelectedItemId(null)
    setUnselectingItemIds((prev) => [...prev, itemId])
    console.log("Unselecting item", itemId)
    setTimeout(() => {
      setUnselectingItemIds((prev) => prev.filter((id) => id !== itemId))
    }, 300)

  }

  function onSelectItem(itemId: string) {
    const item = items.find((i) => i.id === selectedItemId)!;
    console.log("Unselecting item", selectedItemId)
    setSelectedItemId(itemId)

    if (!item) return;
    setUnselectingItemIds((prev) => [...prev, item.id])
    console.log("Unselecting item", item.id)

    setTimeout(() => {
      setUnselectingItemIds((prev) => prev.filter((id) => id !== item.id))
    }, 300)

  }

  function addInventoryItem(inventoryItem: InventoryItem) {
    setInventoryItems((old) => [...old, inventoryItem])
  }


  return (
    <>

      <div className="App" >



        {loading && (
          <>
            <div className="loader-backdrop"></div>
            <div className="loader"></div>
          </>
        )} <div className='layout'>



          {isMobile ? <div className='mobile-areas' style={{ height: mobileHeight + "px" }}>
            <img src={ForwardIcon} onClick={() => {
              const index = sections.findIndex((s) => s.name == mobileViewingSection);
              if (index === -1) return;
              const nextIndex = (index - 1 + sections.length) % sections.length;
              setMobileViewingSection(sections[nextIndex].name);
              console.log("Changing viewing section to", sections[nextIndex].name)

            }} className='back-mobile-areas' />
            {mobileAreas.map((area, index) => (
              <AreaComponent width={area.width} height={area.height} cells={flattenCells(mobileCells.find((c) => c.sectionName == area.sectionName)!.cells)} key={index} id={area.sectionName} visibile={mobileViewingSection == null ? true : area.sectionName == mobileViewingSection} section={area.sectionName} />
            ))}
            <img src={ForwardIcon} onClick={() => {
              const index = sections.findIndex((s) => s.name == mobileViewingSection);
              if (index === -1) return;
              const nextIndex = (index + 1) % sections.length;
              setMobileViewingSection(sections[nextIndex].name);
              console.log("Changing viewing section to", sections[nextIndex].name)

            }} className='forward-mobile-areas' /></div>
            : <AreaComponent width={width * cellSize} height={height * cellSize} cells={flattenCells(cells)} />}

        </div>



      </div >
      <div id={takingPhoto ? 'capture' : ''}>
        {sections.map((section) => <SectionArea takingPhoto={takingPhoto} section={section} key={section.cellId.toId()} visible={mobileViewingSection == null ? true : section.name == mobileViewingSection} cellSize={cellSize} />)}
        {items.map((item) => {
          return <DraggableItem isPlacingItem={false} isCreatingArea={false} isCreatingTemplate={false} cellSize={cellSize} isViewingDesign={isViewingDesign} removeItem={removeItem} visible={!isMobile ? true : !item.hasMoved && !item.starterItem ? true : mobileViewingSection == null ? false : item.starterItem ? sections.find((s) => s.name == mobileViewingSection)?.startingItems.some((i) => i.item.id === item.id) : sections.find((s) => s.name == mobileViewingSection)?.items.some((i) => i.id === item.id)}

            item={item} canPlaceItem={canPlaceItem} placeItem={placeItem} deleteItemRotate={deleteItemRotate} highlightCells={highlightCells} unHighlightCells={unHighlightCells} key={item.id} deleteItem={deleteItem} isSelected={selectedItemId === item.id}
            onSelect={onSelectItem}
            isUnselecting={unselectingItemIds.includes(item.id)}
            onDeselect={() => onDeselectItem(item.id)} />
        })}
        {booths.map((booth) => {
          return <BoothItem canPick={true} visible={!isMobile ? true : mobileViewingSection == null ? false : (sections.find((s) => s.name == mobileViewingSection)?.booths.some((i) => i.id === booth.id) ?? false)} booth={booth} isViewingBooth={false} isSelected={selectedItemId == booth.id} cellSize={cellSize} key={booth.id} onSelect={onSelectItem}
            isUnselecting={unselectingItemIds.includes(booth.id)}
            onDeselect={() => onDeselectItem(booth.id)} onPickBooth={async (boothId) => {

            }} />
        })}
      </div>



    </>
  )
}

export default Layout