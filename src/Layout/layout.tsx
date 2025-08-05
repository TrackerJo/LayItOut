import { useEffect, useRef, useState } from 'react'


import './layout.css'
import '../index.css'
import AreaComponent from '../Components/area';
import type { CellProps } from '../Components/cell';
import DraggableItem from '../Components/draggable_item';
import { Area, CellId, InventoryItem, Item, Section, StaringItem, Template } from '../constants';
import Toolbox from '../Components/toolbox';


import SectionArea from '../Components/section';
import ForwardIcon from '../assets/forward.png';

import LayoutDialog from '../Components/layout_dialog';
import LayoutIcon from '../assets/layout_icon_white.png';
import TemplateIcon from '../assets/template.png';
import TemplateDialog from '../Components/template_dialog';
import AddCustomItemDialog from '../Components/add_custom_item_dialog';

import { getArea, saveAreaTemplates, saveCompanyArea } from '../api/firestore';
import { getLocalArea } from '../api/local_firestore';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(

  <Layout />

)


function Layout() {
  const [isMobile, setIsMobile] = useState<boolean>(/Mobi|Android/i.test(navigator.userAgent));
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [cells, setCells] = useState<CellProps[][]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [mobileHeight, setMobileHeight] = useState<number>(0);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [unselectingItemIds, setUnselectingItemIds] = useState<string[]>([]);
  const cellSize = /Mobi|Android/i.test(navigator.userAgent) ? 5 : 10;
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
  const [templateName, setTemplateName] = useState<string>("");
  const [companyId, setCompanyId] = useState<string>("");
  const [areaId, setAreaId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null);

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



    setLayoutSections([...sectionsToGenerate.map((section) => {
      return new Section({
        name: section.name,
        cellId: new CellId({ x: section.cellId.x / 2, y: section.cellId.y / 2 }),
        cellsLong: section.cellsLong / 2,
        cellsTall: section.cellsTall / 2,
        startingItems: []
      })
    })
    ]);
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
        console.log("Needed section Width:", (section.cellsLong + section.cellId.x) * cellSize, "Current width:", currentWidth)

        if ((section.cellsLong + section.cellId.x) * cellSize > currentWidth) {

          console.log("Added section Width:", section.cellsLong * cellSize + section.cellId.x)
          currentWidth += (section.cellsLong + section.cellId.x) * cellSize - currentWidth;
        }
        console.log("Needed section Height:", (section.cellsTall + section.cellId.y) * cellSize, "Current height:", currentHeight)
        if ((section.cellsTall + section.cellId.y) * cellSize > currentHeight) {
          console.log("Added section Height:", section.cellsTall * cellSize + section.cellId.y)
          currentHeight += (section.cellsTall + section.cellId.y) * cellSize - currentHeight;
        }
      }


      setWidth(currentWidth);
      setHeight(currentHeight);


      [...Array((currentHeight / cellSize)).keys()].map((j) => {
        const rowCells: CellProps[] = [];
        [...Array((currentWidth / cellSize)).keys()].map((i) => {

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
          setLoading(false);

        }, 500)
      }, 100)

    }



  }

  async function loadArea() {
    const urlParams = new URLSearchParams(window.location.search);
    const companyIdParam = urlParams.get('companyId');
    const areaIdParam = urlParams.get('areaId');
    const areaId = urlParams.get('areaId') || "";
    const companyId = urlParams.get('companyId') || "";
    const templateId = urlParams.get('templateId') || "";
    const area: Area = await getArea(companyId, areaId);
    const type = urlParams.get('type') || "";
    if (type === "create-template") {
      setIsCreatingTemplate(true);

    } else if (type === "edit-template") {
      setIsEditingTemplate(true);

      const template = area.templates.find((t) => t.id === templateId);
      if (template) {
        setEditingTemplate(template);
        setTemplateName(template.name);
      }
    }

    if (companyIdParam) {
      setCompanyId(companyIdParam);
    }
    if (areaIdParam) {
      setAreaId(areaIdParam);
    }
    setInventoryItems(area.inventoryItems.map(inv => new InventoryItem({
      item: new Item({
        id: inv.item.id,
        name: inv.item.name,
        cellsLong: inv.item.cellsLong,
        cellsTall: inv.item.cellsTall,
        icon: inv.item.icon,
        initialElement: inv.item.initialElement,
        moveable: inv.item.moveable,
        starterItem: inv.item.starterItem,
        displayItem: true
      }),
      quantity: inv.quantity
    })));
    const newTemplates: Template[] = [];
    const newUnmodifiedTemplates: Template[] = [];
    for (const template of area.templates) {
      const newSections: Section[] = [];
      const unmodifiedSections: Section[] = [];
      for (const section of template.sections) {
        newSections.push(new Section({
          name: section.name,
          cellId: new CellId({ x: (section.cellId.x) / (isMobile ? 20 : 10), y: (section.cellId.y) / (isMobile ? 20 : 10) }),
          cellsLong: section.cellsLong / (isMobile ? 20 : 10),
          cellsTall: section.cellsTall / (isMobile ? 20 : 10),
          startingItems: section.startingItems.map((item) => new StaringItem({
            cell: new CellId({ x: item.cell.x / (isMobile ? 2 : 1), y: item.cell.y / (isMobile ? 2 : 1) }), item: new Item({
              id: item.item.id,
              name: item.item.name,
              cellsLong: item.item.cellsLong / 2,
              cellsTall: item.item.cellsTall / 2,
              icon: item.item.icon,
              starterItem: true,
              moveable: item.item.moveable
            })
          })
          )
        }));
        unmodifiedSections.push(new Section({
          name: section.name,
          cellId: new CellId({ x: (section.cellId.x), y: (section.cellId.y) }),
          cellsLong: section.cellsLong,
          cellsTall: section.cellsTall,
          startingItems: section.startingItems.map((item) => new StaringItem({
            cell: new CellId({ x: item.cell.x, y: item.cell.y }), item: new Item({
              id: item.item.id,
              name: item.item.name,
              cellsLong: item.item.cellsLong,
              cellsTall: item.item.cellsTall,
              icon: item.item.icon,
              starterItem: true,
              moveable: item.item.moveable
            })
          })
          )
        }));
      }

      newTemplates.push(new Template({
        name: template.name,
        sections: newSections,
        id: template.id
      }));
      newUnmodifiedTemplates.push(new Template({
        name: template.name,
        sections: unmodifiedSections,
        id: template.id
      }));
    }

    setTemplates([...newTemplates]);
    const sectionsToGenerate: Section[] = [];
    const template = templateId === "" ? undefined : newUnmodifiedTemplates.find((t) => t.id === templateId);
    console.log("TEMPLATE", template, "AREA", area);
    if (template !== undefined) {

      setLayoutSections([...template.sections]);
      setSections([...template.sections.map((section) => {
        return new Section({
          name: section.name,
          cellId: new CellId({ x: section.cellId.x / 10, y: section.cellId.y / 10 }),
          cellsLong: section.cellsLong / 10,
          cellsTall: section.cellsTall / 10,
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
      sectionsToGenerate.push(...template.sections.map((section) => {
        return new Section({
          name: section.name,
          cellId: new CellId({ x: section.cellId.x / 10, y: section.cellId.y / 10 }),
          cellsLong: section.cellsLong / 10,
          cellsTall: section.cellsTall / 10,
          startingItems: section.startingItems,
          items: section.startingItems.map((i) => new Item({
            id: i.item.id,
            name: i.item.name,
            cellsLong: i.item.cellsLong,
            cellsTall: i.item.cellsTall,
            icon: i.item.icon,
            moveable: i.item.moveable,
            starterItem: i.item.starterItem,
            rotation: i.item.rotation,

            sectionCell: i.cell

          }))
        })
      }
      ));
    } else {
      setLayoutSections([...area.sections]);
      setSections([...area.sections.map((section) => {
        return new Section({
          name: section.name,
          cellId: new CellId({ x: section.cellId.x / 10, y: section.cellId.y / 10 }),
          cellsLong: section.cellsLong / 10,
          cellsTall: section.cellsTall / 10,
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
      sectionsToGenerate.push(...area.sections.map((section) => {
        return new Section({
          name: section.name,
          cellId: new CellId({ x: section.cellId.x / 10, y: section.cellId.y / 10 }),
          cellsLong: section.cellsLong / 10,
          cellsTall: section.cellsTall / 10,
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
    }
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
        id: startingItem.item.id,
        name: startingItem.item.name,
        cellsLong: startingItem.item.cellsLong,
        cellsTall: startingItem.item.cellsTall,
        icon: startingItem.item.icon,
        initialElement: startingItem.item.initialElement,
        starterItem: true,
        moveable: startingItem.item.moveable,
        rotation: startingItem.item.rotation,
      }));
    }


    console.log("Setting sections", newSections)
    setSections([...newSections]);




    console.log("ITEMS", newItems)
    setItems((old) => {
      //check if any of the items are already in the list
      const existingItems = old.filter((i) => !newItems.some((newItem) => newItem.id === i.id));
      return [...existingItems, ...newItems.map((item) => new Item({
        id: item.id,
        name: item.name,
        cellsLong: item.cellsLong,
        cellsTall: item.cellsTall,
        icon: item.icon,
        initialElement: item.initialElement,
        starterItem: true,
        moveable: item.moveable,
        rotation: item.rotation,
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
        return [...old, new InventoryItem({ item: new Item({ id: item.id, name: item.name, cellsLong: rotatedDims.cellsWide, cellsTall: rotatedDims.cellsTall, icon: item.icon }), quantity: 1 })];
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

      <div className="App">
        <h1 className='title'>LayItOut</h1>
        <br />
        {(isCreatingTemplate || isEditingTemplate) && <div className="template-name-row">
          <label htmlFor="template-name">Template Name:</label>
          <input type="text" id="template-name" name="template-name" onChange={(e) => setTemplateName(e.target.value)} value={templateName} />

        </div>}
        {(isCreatingTemplate || isEditingTemplate) && <div className='template-creation'>
          <button className='action-btn' onClick={() => {

            if (templateName.trim() == "") {
              alert("Please enter a template name");
              return;
            }

            if (templates.some((t) => t.name === templateName && (isEditingTemplate ? t.id !== editingTemplate!.id : true))) {
              alert("Template with this name already exists");
              return;
            }

            if (isEditingTemplate) {
              const updatedTemplates = templates.map((t) => {
                if (t.id === editingTemplate!.id) {
                  console.log("SECTION", sections)
                  return new Template({
                    name: templateName,
                    sections: sections.map((s) => new Section({
                      name: s.name,
                      cellId: new CellId({ x: t.sections.find((se) => se.name == s.name)!.cellId.x * (isMobile ? 20 : 10), y: t.sections.find((se) => se.name == s.name)!.cellId.y * (isMobile ? 20 : 10) }),
                      cellsLong: s.cellsLong * (isMobile ? 10 : 10),
                      cellsTall: s.cellsTall * (isMobile ? 10 : 10),
                      startingItems: s.items.map((i) => new StaringItem({
                        cell: new CellId({ x: i.sectionCell!.x, y: i.sectionCell!.y }),
                        item: new Item({
                          id: i.id,
                          name: i.name,
                          cellsLong: i.cellsLong,
                          cellsTall: i.cellsTall,
                          icon: i.icon,
                          starterItem: true,
                          moveable: i.moveable,
                        })
                      }))
                    })),
                    id: t.id
                  });
                }
                return new Template({
                  name: t.name,
                  sections: t.sections.map((s) => new Section({
                    name: s.name,
                    cellId: new CellId({ x: s.cellId.x * (isMobile ? 20 : 10), y: s.cellId.y * (isMobile ? 20 : 10) }),
                    cellsLong: s.cellsLong * (isMobile ? 20 : 10),
                    cellsTall: s.cellsTall * (isMobile ? 20 : 10),
                    startingItems: s.startingItems.map((i) => new StaringItem({
                      cell: new CellId({ x: i.cell.x * (isMobile ? 2 : 1), y: i.cell.y * (isMobile ? 2 : 1) }),
                      item: new Item({
                        id: i.item.id,
                        name: i.item.name,
                        cellsLong: i.item.cellsLong,
                        cellsTall: i.item.cellsTall,
                        icon: i.item.icon,
                        starterItem: i.item.starterItem,
                        moveable: i.item.moveable,
                      })
                    }))
                  })),
                  id: t.id
                });
              });
              setLoading(true);
              saveAreaTemplates(companyId, areaId, updatedTemplates).then(() => {

                console.log("Template updated successfully");
                setLoading(false);
              });

            }


          }
          }>{isCreatingTemplate ? "Create" : "Save"} Template</button>
          <button className='action-btn' onClick={() => {
            setIsCreatingTemplate(false);
            setTemplates([]);
            setLayoutSections([]);
            setSections([]);
            setMobileCells([]);
            setMobileAreas([]);
            setMobileViewingSection(null);
          }}>Cancel</button>

        </div>}
        {loading && (
          <>
            <div className="loader-backdrop"></div>
            <div className="loader"></div>
          </>
        )} <div className='layout'>
          <Toolbox isEditingTemplate={isEditingTemplate} isCreatingTemplate={isCreatingTemplate} maxHeight={isMobile ? 200 : height} showAddCustomItem={() => { addCustomItemDialogRef.current?.showModal(); }} addDraggingItem={addDraggingItem} removeItem={removeItem} inventoryItems={inventoryItems.map(inv =>
            new InventoryItem({
              item: new Item({
                id: inv.item.id,
                name: inv.item.name,
                cellsLong: inv.item.cellsLong,
                cellsTall: inv.item.cellsTall,
                icon: inv.item.icon,
                displayItem: true,
              })
              , quantity: inv.quantity
            })
          )} />
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
            : <AreaComponent width={width} height={height} cells={flattenCells(cells)} />}

        </div>
      </div>
      {sections.map((section) => <SectionArea section={section} key={section.cellId.toId()} visible={mobileViewingSection == null ? true : section.name == mobileViewingSection} cellSize={cellSize} />)}
      {items.map((item) => {
        return <DraggableItem removeItem={removeItem} visible={!isMobile ? true : !item.hasMoved && !item.starterItem ? true : mobileViewingSection == null ? false : item.starterItem ? sections.find((s) => s.name == mobileViewingSection)?.startingItems.some((i) => i.item.id === item.id) : sections.find((s) => s.name == mobileViewingSection)?.items.some((i) => i.id === item.id)}

          item={item} canPlaceItem={canPlaceItem} placeItem={placeItem} deleteItemRotate={deleteItemRotate} highlightCells={highlightCells} unHighlightCells={unHighlightCells} key={item.id} deleteItem={deleteItem} isSelected={selectedItemId === item.id}
          onSelect={onSelectItem}
          isUnselecting={unselectingItemIds.includes(item.id)}
          onDeselect={() => onDeselectItem(item.id)} />
      })}
      {isMobile && !loading && <div className='layout-icon' onClick={() => {
        layoutDialogRef.current?.showModal();
        setLayoutDialogOpen(true);
        console.log("Showing layout dialog")
      }}>

        <img src={LayoutIcon} alt="" />
      </div>}
      {!loading && !(isCreatingTemplate || isEditingTemplate) && <div className='template-icon' onClick={() => {
        templateDialogRef.current?.showModal();
        setTemplateDialogOpen(true);
        console.log("Showing template dialog")
      }}>

        <img src={TemplateIcon} alt="" />
      </div>}
      <TemplateDialog dialogRef={templateDialogRef} isOpen={templateDialogOpen} closeDialog={() => {
        templateDialogRef.current?.close();
        setTemplateDialogOpen(false);
      }} templates={templates} />
      < LayoutDialog dialogRef={layoutDialogRef} isOpen={layoutDialogOpen} closeDialog={() => {
        layoutDialogRef.current?.close();
        setLayoutDialogOpen(false);

      }} layoutSections={layoutSections} />

      <AddCustomItemDialog dialogRef={addCustomItemDialogRef} addInventoryItem={addInventoryItem} closeDialog={() => {
        addCustomItemDialogRef.current?.close();

      }} />
    </>
  )
}

export default Layout
