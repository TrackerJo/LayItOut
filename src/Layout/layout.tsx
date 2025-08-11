import { useEffect, useRef, useState } from 'react'


import './layout.css'
import '../index.css'
import AreaComponent from '../Components/area';
import type { CellProps } from '../Components/cell';
import DraggableItem from '../Components/draggable_item';
import { Area, CellId, Design, InventoryItem, Item, Section, StaringItem, Template } from '../constants';
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


createRoot(document.getElementById('root')!).render(

  <Layout />

)


function Layout() {
  const [isMobile, setIsMobile] = useState<boolean>(/Mobi|Android/i.test(navigator.userAgent));
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [totalWidth, setTotalWidth] = useState<number>(0);
  const [totalHeight, setTotalHeight] = useState<number>(0);
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
  const [areaPreview, setAreaPreview] = useState<string | null>(null);

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
        cellId: new CellId({ x: section.cellId.x, y: section.cellId.y }),
        cellsLong: section.cellsLong,
        cellsTall: section.cellsTall,
        startingItems: []
      })
    })
    ]);
    let currentWidth = width;
    let currentHeight = height;
    if (isMobile) {
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
      setTotalHeight(currentHeight * 2);
      setTotalWidth(currentWidth * 2);
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
      setTotalWidth(currentWidth);
      setTotalHeight(currentHeight);
      console.log("Final width:", currentWidth, "Final height:", currentHeight);


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
    setAreaPreview(area.previewImage || null);
    const type = urlParams.get('type') || "";
    let isDesign = false;
    if (type === "create-template") {
      setIsCreatingTemplate(true);

    } else if (type === "edit-template") {
      setIsEditingTemplate(true);

      const template = area.templates.find((t) => t.id === templateId);
      if (template) {
        setEditingTemplate(template);
        setTemplateName(template.name);
      }
    } else if (type === "view-design") {
      isDesign = true;
      setIsViewingDesign(true);
      const designName = urlParams.get('designName') || "";
      setDesignName(designName);
      const designId = urlParams.get('designId') || "";
      setDesignId(designId);

    } else if (type === "view-area") {
      setIsViewingArea(true)
    } else if (type === "edit-design") {
      isDesign = true;
      setIsEditingDesign(true);
      const designName = urlParams.get('designName') || "";
      setDesignName(designName);
      const designId = urlParams.get('designId') || "";
      setDesignId(designId);
    } else if (type === "client-edit-design") {
      isDesign = true;
      setIsClientEditingDesign(true);
      const designName = urlParams.get('designName') || "";
      setDesignName(designName);
      const designId = urlParams.get('designId') || "";
      setDesignId(designId);
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
              moveable: item.item.moveable,
              rotation: item.item.rotation || 0, // Ensure rotation is set
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
              moveable: item.item.moveable,
              rotation: item.item.rotation || 0, // Ensure rotation is set
            })
          })
          )
        }));
      }

      newTemplates.push(new Template({
        name: template.name,
        sections: newSections,
        id: template.id,
        previewImage: template.previewImage
      }));
      newUnmodifiedTemplates.push(new Template({
        name: template.name,
        sections: unmodifiedSections,
        id: template.id,
        previewImage: template.previewImage
      }));
    }

    setTemplates([...newTemplates]);
    const sectionsToGenerate: Section[] = [];
    const template = templateId === "" ? undefined : newUnmodifiedTemplates.find((t) => t.id === templateId);
    console.log("TEMPLATE", template, "AREA", area);
    if (isDesign) {
      const design = await getAreaDesign(companyId, areaId, urlParams.get('designId') || "");
      if (design === null) {

        window.location.href = "/LayItOut/DNF/";
        return;
      }
      setLayoutSections([...design.sections]);
      setSections([...design.sections.map((section) => {
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
      sectionsToGenerate.push(...design.sections.map((section) => {
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

    } else if (template !== undefined) {

      setLayoutSections([...template.sections]);
      setSections([...template.sections.map((section) => {
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
      sectionsToGenerate.push(...template.sections.map((section) => {
        return new Section({
          name: section.name,
          cellId: new CellId({ x: section.cellId.x, y: section.cellId.y }),
          cellsLong: section.cellsLong,
          cellsTall: section.cellsTall,
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
      sectionsToGenerate.push(...area.sections.map((section) => {
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
    console.log("Adding item to section", section!.name, "at", relativeCell, item)
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
    const newCells: CellProps[][] = Array.from(isMobile ? mobileCells.find((m) => m.sectionName === mobileViewingSection)!.cells : cells);

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
    const section = isMobile ? sections.find((m) => m.name === mobileViewingSection)! : getSectionByCellId(cell, sections);
    //remove item from section
    section!.items = section!.items.filter((i) => i.id != item.id);
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
    console.log("DELETING ITEM", item.id)
    // Remove the item from the items list
    const section = isMobile ? sections.find((m) => m.name === mobileViewingSection)! : getSectionByCellId(cell, sections);
    section!.items = section!.items.filter((i) => i.id != item.id);
    const relativeCell = new CellId({ x: cell.x - section!.cellId.x, y: cell.y - section!.cellId.y });

    item.sectionCell = relativeCell;
    section!.items.push(item);

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
    console.log("Unhighlighting cells")
    const newCells: CellProps[][] = Array.from(isMobile ? mobileCells.find((m) => m.sectionName === mobileViewingSection)!.cells : cells);
    newCells.forEach(row => row.forEach(cell => {
      cell.mouseOver = false;
      cell.canPlaceItem = false;
      cell.mouseOverLocation = "";
    }));
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

  const preventScroll = (e: Event) => {
    console.log("Preventing scroll");
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo(0, 0);

  };


  useEffect(() => {
    //disable scrolling on body when taking photo

    if (takingPhoto) {

      window.addEventListener('scroll', preventScroll);
      window.addEventListener('touchmove', preventScroll, { passive: false });


    } else {
      window.removeEventListener('scroll', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    }
    return () => {
      window.removeEventListener('scroll', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    }
  }, [takingPhoto]);



  return (
    <>

      <div className="App" >
        <h1 className='title'>LayItOut</h1>
        <br />
        {(isCreatingTemplate || isEditingTemplate) && <div className="template-name-row">
          <label htmlFor="template-name">Template Name:</label>
          <input type="text" id="template-name" name="template-name" onChange={(e) => setTemplateName(e.target.value)} value={templateName} />

        </div>}
        {isViewingDesign && <div className='design-name-row'>
          <label htmlFor="design-name">Design Name: {designName}</label>
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
              setLoading(true);

              setTimeout(async () => {

                const screenshotSections = sections.map((s) => new Section({
                  name: s.name,
                  cellId: new CellId({ x: layoutSections.find((se) => se.name == s.name)!.cellId.x, y: layoutSections.find((se) => se.name == s.name)!.cellId.y }),
                  cellsLong: s.cellsLong,
                  cellsTall: s.cellsTall,
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
                      rotation: i.rotation
                    })
                  }))
                }));
                localStorage.setItem('screenshotSections', screenshotSections.map((s) => JSON.stringify(s.toJSON())).join("LAYOUTSEPARATOR"));
                console.log("Screenshot sections saved to localStorage", screenshotSections.map((s) => JSON.stringify(s.toJSON())).join("LAYOUTSEPARATOR"));
                localStorage.setItem('screenshot', '');
                setTakingPhoto(true);
                window.addEventListener('storage', async (event) => {
                  console.log("Storage event", event);
                  if (event.key === 'screenshot') {
                    setTakingPhoto(false);
                    const updatedTemplates = templates.map((t) => {
                      if (t.id === editingTemplate!.id) {
                        console.log("SECTION", sections)
                        return new Template({
                          name: templateName,
                          previewImage: event.newValue!,
                          sections: sections.map((s) => new Section({
                            name: s.name,
                            cellId: new CellId({ x: t.sections.find((se) => se.name == s.name)!.cellId.x, y: t.sections.find((se) => se.name == s.name)!.cellId.y }),
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
                                rotation: i.rotation
                              })
                            }))
                          })),
                          id: t.id
                        });
                      }
                      return new Template({
                        name: t.name,
                        previewImage: t.previewImage,
                        sections: t.sections.map((s) => new Section({
                          name: s.name,
                          cellId: new CellId({ x: s.cellId.x, y: s.cellId.y }),
                          cellsLong: s.cellsLong,
                          cellsTall: s.cellsTall,
                          startingItems: s.startingItems.map((i) => new StaringItem({
                            cell: new CellId({ x: i.cell.x, y: i.cell.y }),
                            item: new Item({
                              id: i.item.id,
                              name: i.item.name,
                              cellsLong: i.item.cellsLong,
                              cellsTall: i.item.cellsTall,
                              icon: i.item.icon,
                              starterItem: i.item.starterItem,
                              moveable: i.item.moveable,
                              rotation: i.item.rotation
                            })
                          }))
                        })),
                        id: t.id
                      });
                    });

                    saveAreaTemplates(companyId, areaId, updatedTemplates).then(() => {

                      console.log("Template updated successfully");
                      setLoading(false);
                      const urlParams = new URLSearchParams(window.location.search);
                      const companyIdParam = urlParams.get('companyId');
                      const areaIdParam = urlParams.get('areaId');
                      window.location.href = `/LayItOut/Layout/?companyId=${companyIdParam}&areaId=${areaIdParam}&type=view-area`
                    });
                  }
                })
                // open the url in the background

              }, 500)

            } else {
              setLoading(true);

              setTimeout(async () => {

                const screenshotSections = sections.map((s) => new Section({
                  name: s.name,
                  cellId: new CellId({ x: layoutSections.find((se) => se.name == s.name)!.cellId.x, y: layoutSections.find((se) => se.name == s.name)!.cellId.y }),
                  cellsLong: s.cellsLong,
                  cellsTall: s.cellsTall,
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
                      rotation: i.rotation
                    })
                  }))
                }));
                localStorage.setItem('screenshotSections', screenshotSections.map((s) => JSON.stringify(s.toJSON())).join("LAYOUTSEPARATOR"));
                console.log("Screenshot sections saved to localStorage", screenshotSections.map((s) => JSON.stringify(s.toJSON())).join("LAYOUTSEPARATOR"));
                localStorage.setItem('screenshot', '');
                setTakingPhoto(true);
                window.addEventListener('storage', async (event) => {
                  console.log("Storage event", event);
                  if (event.key === 'screenshot') {
                    setTakingPhoto(false);
                    const newTemplate = new Template({
                      name: templateName,
                      previewImage: event.newValue!,
                      sections: sections.map((s) => new Section({
                        name: s.name,
                        cellId: new CellId({ x: layoutSections.find((se) => se.name == s.name)!.cellId.x, y: layoutSections.find((se) => se.name == s.name)!.cellId.y }),
                        cellsLong: s.cellsLong,
                        cellsTall: s.cellsTall,
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
                            rotation: i.rotation
                          })
                        }))
                      })),
                      id: templateName + (Math.random() * 10000).toString()
                    });

                    const updatedTemplates = [...templates.map((t) => new Template({
                      name: t.name,
                      previewImage: t.previewImage,
                      sections: t.sections.map((s) => new Section({
                        name: s.name,
                        cellId: new CellId({ x: s.cellId.x, y: s.cellId.y }),
                        cellsLong: s.cellsLong,
                        cellsTall: s.cellsTall,
                        startingItems: s.startingItems.map((i) => new StaringItem({
                          cell: new CellId({ x: i.cell.x, y: i.cell.y }),
                          item: new Item({
                            id: i.item.id,
                            name: i.item.name,
                            cellsLong: i.item.cellsLong,
                            cellsTall: i.item.cellsTall,
                            icon: i.item.icon,
                            starterItem: i.item.starterItem,
                            moveable: i.item.moveable,
                            rotation: i.item.rotation
                          })
                        }))
                      })),
                      id: t.id
                    })), newTemplate];

                    saveAreaTemplates(companyId, areaId, updatedTemplates).then(() => {

                      console.log("Template updated successfully");
                      setLoading(false);
                      const urlParams = new URLSearchParams(window.location.search);
                      const companyIdParam = urlParams.get('companyId');
                      const areaIdParam = urlParams.get('areaId');
                      window.location.href = `/LayItOut/Layout/?companyId=${companyIdParam}&areaId=${areaIdParam}&type=view-area`
                    });
                  }
                })

                // open the url in the background

              }, 500)


            }


          }
          }>{isCreatingTemplate ? "Create" : "Save"} Template</button>
          <button className='action-btn' onClick={() => {
            const urlParams = new URLSearchParams(window.location.search);
            const companyIdParam = urlParams.get('companyId');
            const areaIdParam = urlParams.get('areaId');
            window.location.href = `/LayItOut/Layout/?companyId=${companyIdParam}&areaId=${areaIdParam}&type=view-area`
          }}>Cancel</button>

        </div>}
        {(isClientEditingDesign) && <div className='template-creation'>
          <button className='action-btn' onClick={() => {
            setLoading(true);

            setTimeout(async () => {
              //open url in new tab

              const screenshotSections = sections.map((s) => new Section({
                name: s.name,
                cellId: new CellId({ x: layoutSections.find((se) => se.name == s.name)!.cellId.x * (isMobile ? 20 : 20), y: layoutSections.find((se) => se.name == s.name)!.cellId.y * (isMobile ? 20 : 20) }),
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
                    rotation: i.rotation
                  })
                }))
              }));
              localStorage.setItem('screenshotSections', screenshotSections.map((s) => JSON.stringify(s.toJSON())).join("LAYOUTSEPARATOR"));
              console.log("Screenshot sections saved to localStorage", screenshotSections.map((s) => JSON.stringify(s.toJSON())).join("LAYOUTSEPARATOR"));
              localStorage.setItem('screenshot', '');
              setTakingPhoto(true);
              window.addEventListener('storage', async (event) => {
                console.log("Storage event", event);
                if (event.key === 'screenshot') {
                  setTakingPhoto(false);
                  const updatedDesign = new Design({
                    name: designName,
                    previewImage: event.newValue!,
                    areaId: areaId,
                    sections: sections.map((s) => new Section({
                      name: s.name,
                      cellId: new CellId({ x: layoutSections.find((se) => se.name == s.name)!.cellId.x, y: layoutSections.find((se) => se.name == s.name)!.cellId.y }),
                      cellsLong: s.cellsLong,
                      cellsTall: s.cellsTall,
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
                          rotation: i.rotation
                        })
                      }))
                    })),
                    id: designId
                  });
                  updateAreaDesign(companyId, areaId, updatedDesign).then(() => {
                    console.log("Design updated successfully");
                    setLoading(false);

                  });
                }
              })
              // open the url in the background






            }, 500)

          }
          }>Save</button>
          <button className='action-btn' onClick={() => {

          }}>Submit</button>

        </div>}


        {loading && (
          <>
            <div className="loader-backdrop">
              <div className="loader"></div>

            </div>
          </>
        )} <div className='layout'>


          {!isViewingDesign && <Toolbox isViewingDesign={isViewingDesign} isEditingTemplate={isEditingTemplate} isCreatingTemplate={isCreatingTemplate} maxHeight={isMobile ? 200 : height * cellSize} showAddCustomItem={() => { addCustomItemDialogRef.current?.showModal(); }} addDraggingItem={addDraggingItem} removeItem={removeItem} inventoryItems={inventoryItems.map(inv =>
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
          )} />}
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
        {isViewingDesign && <div className='design-view'>
          <button className='action-btn' onClick={() => {
            window.location.href = `/LayItOut/Print/?companyId=${companyId}&areaId=${areaId}&designName=${designName}&designId=${designId}`;
          }}>Print</button>

        </div>}
      </div >
      <div >
        {sections.map((section) => <SectionArea takingPhoto={false} section={section} key={section.cellId.toId()} visible={mobileViewingSection == null ? true : section.name == mobileViewingSection} cellSize={cellSize} />)}
        {items.map((item) => {
          return <DraggableItem cellSize={cellSize} isViewingDesign={isViewingDesign} removeItem={removeItem} visible={!isMobile ? true : !item.hasMoved && !item.starterItem ? true : mobileViewingSection == null ? false : item.starterItem ? sections.find((s) => s.name == mobileViewingSection)?.startingItems.some((i) => i.item.id === item.id) : sections.find((s) => s.name == mobileViewingSection)?.items.some((i) => i.id === item.id)}

            item={item} canPlaceItem={canPlaceItem} placeItem={placeItem} deleteItemRotate={deleteItemRotate} highlightCells={highlightCells} unHighlightCells={unHighlightCells} key={item.id} deleteItem={deleteItem} isSelected={selectedItemId === item.id}
            onSelect={onSelectItem}
            isUnselecting={unselectingItemIds.includes(item.id)}
            onDeselect={() => onDeselectItem(item.id)} />
        })}
      </div>

      {
        isMobile && !loading && <div className='layout-icon' onClick={() => {
          layoutDialogRef.current?.showModal();
          setLayoutDialogOpen(true);
          console.log("Showing layout dialog")
        }}>

          <img src={LayoutIcon} alt="" />
        </div>
      }
      {
        !loading && !(isCreatingTemplate || isEditingTemplate || isViewingDesign) && <div className='template-icon' onClick={() => {
          templateDialogRef.current?.showModal();
          setTemplateDialogOpen(true);
          console.log("Showing template dialog")
        }}>

          <img src={TemplateIcon} alt="" />
        </div>
      }
      <TemplateDialog isViewingArea={isViewingArea} dialogRef={templateDialogRef} isOpen={templateDialogOpen} closeDialog={() => {
        templateDialogRef.current?.close();
        setTemplateDialogOpen(false);
      }} templates={templates} />
      < LayoutDialog dialogRef={layoutDialogRef} closeDialog={() => {
        layoutDialogRef.current?.close();
        setLayoutDialogOpen(false);
      }} areaPreview={areaPreview || ""} />

      <AddCustomItemDialog dialogRef={addCustomItemDialogRef} addInventoryItem={addInventoryItem} closeDialog={() => {
        addCustomItemDialogRef.current?.close();

      }} />

      {takingPhoto && <iframe id="screenshot-iframe" title="Screenshot Iframe" src='http://localhost:5173/LayItOut/Preview/' width={totalWidth * cellSize + 20} height={totalHeight * cellSize + 20}></iframe>}
    </>
  )
}

export default Layout
