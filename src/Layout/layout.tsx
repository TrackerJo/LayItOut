import { useEffect, useRef, useState } from 'react'


import './layout.css'
import '../index.css'
import AreaComponent from '../Components/area';
import type { CellProps } from '../Components/cell';
import DraggableItem from '../Components/draggable_item';
import { Area, Booth, BoothMap, CellId, Company, Design, InventoryItem, Item, Section, StaringItem, Template, Vendor } from '../constants';
import Toolbox from '../Components/toolbox';


import SectionArea from '../Components/section';
import ForwardIcon from '../assets/forward.png';

import LayoutDialog from '../Components/layout_dialog';
import LayoutIcon from '../assets/layout_icon_white.png';
import TemplateIcon from '../assets/template.png';
import TemplateDialog from '../Components/template_dialog';
import AddCustomItemDialog from '../Components/add_custom_item_dialog';

import { deleteArea, deleteBoothMap, getArea, getAreaBoothMap, getAreaDesign, getCompany, placeAreaSections, saveAreaBoothMap, saveAreaSections, saveAreaTemplates, saveCompanyArea, updateAreaDesign } from '../api/firestore';
import { getLocalArea } from '../api/local_firestore';
import { createRoot } from 'react-dom/client';
import AddSectionDialog from '../Components/add_section_dialog';
import AddInventoryItemDialog from '../Components/add_inventory_item_dialog';
import PlacingItem from '../Components/placing_item';
import LoginDialog from '../Components/login_dialog';
import { getCurrentUser } from '../api/auth';
import BoothItem from '../Components/booth_item';
import VendorsTile from '../Components/vendors_tile';
import AddVendorDialog from '../Components/add_vendor_dialog';
import EditVendorDialog from '../Components/edit_vendor_dialog';
import KeyTile from '../Components/key_tile';
import AddVendorToBoothDialog from '../Components/add_vendor_to_booth';


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
  const [tapAndPlaceMode, setTapAndPlaceMode] = useState<boolean>(false);
  const [placingItem, setPlacingItem] = useState<Item | null>(null);
  const [placingItemId, setPlacingItemId] = useState<string | null>(null);
  const [sectionModifierItems, setSectionModifierItems] = useState<Item[]>([
    new Item({
      id: "left-wall",
      name: "Left Wall",
      cellsLong: 1,
      cellsTall: 1,
      icon: "",
      moveable: true,
      starterItem: false,
      displayItem: true,
      isSectionModifier: true,
      sectionModifierType: "LeftWall"
    }),
    new Item({
      id: "right-wall",
      name: "Right Wall",
      cellsLong: 1,
      cellsTall: 1,
      icon: "",
      moveable: true,
      starterItem: false,
      displayItem: true,
      isSectionModifier: true,
      sectionModifierType: "RightWall"
    }),
    new Item({
      id: "top-wall",
      name: "Top Wall",
      cellsLong: 1,
      cellsTall: 1,
      icon: "",
      moveable: true,
      starterItem: false,
      displayItem: true,
      isSectionModifier: true,
      sectionModifierType: "TopWall"
    }),

    new Item({
      id: "bottom-wall",
      name: "Bottom Wall",
      cellsLong: 1,
      cellsTall: 1,
      icon: "",
      moveable: true,
      starterItem: false,
      displayItem: true,
      isSectionModifier: true,
      sectionModifierType: "BottomWall"
    }),
    new Item({
      id: "left-door",
      name: "Left Door",
      cellsLong: 1,
      cellsTall: 1,
      icon: "https://firebasestorage.googleapis.com/v0/b/kazoom-layitout.firebasestorage.app/o/public%2Fleft_door.png?alt=media&token=91fde31c-ebc6-4807-9670-f846c8d75cb6",
      moveable: true,
      starterItem: false,
      displayItem: true,
      isSectionModifier: true,
      sectionModifierType: "LeftDoor",
    }),
    new Item({
      id: "right-door",
      name: "Right Door",
      cellsLong: 1,
      cellsTall: 1,
      icon: "https://firebasestorage.googleapis.com/v0/b/kazoom-layitout.firebasestorage.app/o/public%2Fright_door.png?alt=media&token=8c6f3b4d-5e7a-4b9c-8d2f-0a3b5e6f7c8d",
      moveable: true,
      starterItem: false,
      displayItem: true,
      isSectionModifier: true,
      sectionModifierType: "RightDoor",
    }),
    new Item({
      id: "left-window",
      name: "Left Window",
      cellsLong: 1,
      cellsTall: 1,
      icon: "",
      moveable: true,
      starterItem: false,
      displayItem: true,
      isSectionModifier: true,
      sectionModifierType: "LeftWindow"
    }),
    new Item({
      id: "right-window",
      name: "Right Window",
      cellsLong: 1,
      cellsTall: 1,
      icon: "",
      moveable: true,
      starterItem: false,
      displayItem: true,
      isSectionModifier: true,
      sectionModifierType: "RightWindow"
    }),
    new Item({
      id: "top-window",
      name: "Top Window",
      cellsLong: 1,
      cellsTall: 1,
      icon: "",
      moveable: true,
      starterItem: false,
      displayItem: true,
      isSectionModifier: true,
      sectionModifierType: "TopWindow"
    }),
    new Item({
      id: "bottom-window",
      name: "Bottom Window",
      cellsLong: 1,
      cellsTall: 1,
      icon: "",
      moveable: true,
      starterItem: false,
      displayItem: true,
      isSectionModifier: true,
      sectionModifierType: "BottomWindow"
    })



  ]);

  const layoutDialogRef = useRef<HTMLDialogElement>(null);
  const [layoutDialogOpen, setLayoutDialogOpen] = useState<boolean>(false);
  const [layoutSections, setLayoutSections] = useState<Section[]>([]);

  const [sections, setSections] = useState<Section[]>([]);
  const [booths, setBooths] = useState<Booth[]>([]);

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
  const [isCreatingArea, setIsCreatingArea] = useState<boolean>(false);
  const [creatingAreaStage, setCreatingAreaStage] = useState<"placing-sections" | "modify-sections" | "placing-items">("placing-sections");
  const [isEditingDesign, setIsEditingDesign] = useState<boolean>(false);
  const [isViewingBoothMap, setIsViewingBoothMap] = useState<boolean>(false);
  const [isCreatingBoothMap, setIsCreatingBoothMap] = useState<boolean>(false);
  const [isPickingBoothMap, setIsPickingBoothMap] = useState<boolean>(false);
  const [isClientEditingDesign, setIsClientEditingDesign] = useState<boolean>(false);
  const [isPublicPreviewingDesign, setIsPublicPreviewingDesign] = useState<boolean>(false);
  const [designName, setDesignName] = useState<string>("");
  const [design, setDesign] = useState<Design | null>(null);
  const [templateName, setTemplateName] = useState<string>("");
  const [companyId, setCompanyId] = useState<string>("");
  const [company, setCompany] = useState<Company | null>(null);
  const [areaId, setAreaId] = useState<string>("");
  const [area, setArea] = useState<Area | null>(null);
  const [designId, setDesignId] = useState<string>("");
  const [boothMapId, setBoothMapId] = useState<string>("");
  const [boothMap, setBoothMap] = useState<BoothMap | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null);
  const [takingPhoto, setTakingPhoto] = useState<boolean>(false);
  const [areaPreview, setAreaPreview] = useState<string | null>(null);
  const [highlightedCells, setHighlightedCells] = useState<CellId[]>([]);
  const [canSave, setCanSave] = useState<boolean>(false);
  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [hasPickedBooth, setHasPickedBooth] = useState<boolean>(false);
  const [editVendor, setEditVendor] = useState<Vendor | null>(null);
  const [selectedBooth, setSelectedBooth] = useState<Booth | null>(null);

  const addCustomItemDialogRef = useRef<HTMLDialogElement>(null);
  const addSectionDialogRef = useRef<HTMLDialogElement>(null);
  const addInventoryItemDialogRef = useRef<HTMLDialogElement>(null);
  const addVendorDialogRef = useRef<HTMLDialogElement>(null);
  const editVendorDialogRef = useRef<HTMLDialogElement>(null);
  const addVendorToBoothDialogRef = useRef<HTMLDialogElement>(null);


  function getSectionByCellId(cellId: CellId, sections: Section[]): Section | null {
    for (const section of sections) {
      if (cellId.x >= section.cellId.x && cellId.x < section.cellId.x + section.cellsLong &&
        cellId.y >= section.cellId.y && cellId.y < section.cellId.y + section.cellsTall) {
        return section;
      }
    }
    return null;
  }





  function generateCells(sectionsToGenerate: Section[], area: Area, isCreatingArea: boolean, creatingAreaStage: "placing-sections" | "modify-sections" | "placing-items") {
    //check if localStorage has template



    setLayoutSections([...sectionsToGenerate.map((section) => {
      return new Section({
        name: section.name,
        cellId: new CellId({ x: section.cellId.x, y: section.cellId.y }),
        cellsLong: section.cellsLong,
        cellsTall: section.cellsTall,
        modifierItems: section.modifierItems.map((item) => new StaringItem({
          cell: new CellId({ x: item.cell.x, y: item.cell.y }),
          item: new Item({
            ...item.item, // copies all properties
            starterItem: true,
          })
        })),
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
      setTotalHeight((currentHeight / cellSize) * 2);
      setTotalWidth((currentWidth / cellSize) * 2);
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




      setWidth(area.width);
      setHeight(area.height);
      setTotalWidth(area.width);
      setTotalHeight(area.height);
      console.log("Final width:", currentWidth, "Final height:", currentHeight);


      [...Array((area.height)).keys()].map((j) => {
        const rowCells: CellProps[] = [];
        [...Array((area.width)).keys()].map((i) => {
          console.log("Creating cell at", i, j, "with size", cellSize, isCreatingArea)
          rowCells.push({
            id: new CellId({ x: i, y: j }), hasItem: false, itemId: "", mouseOver: false, canPlaceItem: false, mouseOverLocation: "", inSection: isCreatingArea && creatingAreaStage == 'placing-sections' ? true : getSectionByCellId(new CellId({ x: i, y: j }), sectionsToGenerate) != null, size: cellSize
          })
        })
        newCells.push(rowCells)
      })
      setCells([...newCells]);

      setTimeout(() => {
        const newStartingItems: StaringItem[] = []
        const newSections: Section[] = [...sectionsToGenerate];
        const newBooths: Booth[] = [];
        for (const section of newSections) {


          section.cellElement = document.querySelector(`.App #${section.cellId.toId()}.cell:not(.cell-border)`) as HTMLElement;


          newStartingItems.push(...section.startingItems.map((item) => {

            return new StaringItem({
              cell: new CellId({ x: section.cellId.x + item.cell.x, y: section.cellId.y + item.cell.y }),
              item: new Item({
                ...item.item, // copies all properties
                initialElement: document.querySelector(`.App #${item.cell.toId()}.cell:not(.cell-border)`) as HTMLElement,
                starterItem: true,
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
                moveable: false,
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
    if (area === null) {
      window.location.href = "/LayItOut/DNF/";
      return;
    }
    setArea(area);
    setAreaPreview(area.previewImage || null);
    const type = urlParams.get('type') || "";
    let isDesign = false;
    let isCreatingArea = false;
    let creaingAreaStage: "placing-sections" | "modify-sections" | "placing-items" = "modify-sections";
    let isBoothMap = false;
    let boothMap: BoothMap | null = null;
    if (type === "public-preview") {
      setIsPublicPreviewingDesign(true);
      const designName = urlParams.get('designName') || "";
      setDesignName(designName);
      const designId = urlParams.get('designId') || "";
      setDesignId(designId);
    } else if (type === "create-template") {
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
    } else if (type === "create-area") {
      isCreatingArea = true;
      setIsCreatingArea(true);
      const creatingAreaStageParam = urlParams.get('stage');
      if (creatingAreaStageParam === "placing-sections") {
        creaingAreaStage = "placing-sections";
        setCreatingAreaStage("placing-sections");
      } else if (creatingAreaStageParam === "modify-sections") {
        setCreatingAreaStage("modify-sections");
        creaingAreaStage = "modify-sections";
        setInventoryItems(sectionModifierItems.map(item => new InventoryItem({
          item: new Item({
            ...item, // copies all properties
            displayItem: true,
          }),
          quantity: -1
        })));
      } else if (creatingAreaStageParam === "placing-items") {
        setCreatingAreaStage("placing-items");
        creaingAreaStage = "placing-items";
        setInventoryItems(area.inventoryItems.map(inv => new InventoryItem({
          item: new Item({
            ...inv.item, // copies all properties
            displayItem: true,
          }),
          quantity: inv.quantity
        })));
      }

    } else if (type === "view-boothMap") {
      isBoothMap = true;
      setIsViewingBoothMap(true);
      const boothMapId = urlParams.get('boothMapId') || "";
      setBoothMapId(boothMapId);
      const newBoothMap = await getAreaBoothMap(companyId, areaId, boothMapId);
      if (newBoothMap === null) {
        window.location.href = "/LayItOut/DNF/";
        return;
      }
      setBoothMap(newBoothMap);
      boothMap = newBoothMap;

    } else if (type === "pick-booth") {
      isBoothMap = true;
      setIsPickingBoothMap(true);
      const boothMapId = urlParams.get('boothMapId') || "";
      setBoothMapId(boothMapId);
      const newBoothMap = await getAreaBoothMap(companyId, areaId, boothMapId);
      if (newBoothMap === null) {
        window.location.href = "/LayItOut/DNF/";
        return;
      }
      setBoothMap(newBoothMap);
      boothMap = newBoothMap;
      const vendorId = urlParams.get('vendorId') || "";
      if (vendorId !== "") {
        const vendor = newBoothMap.vendors.find((v) => v.id === vendorId);
        if (vendor) {
          setVendor(vendor);
          console.log("Vendor found", vendor);
          let pickedBooth = false;
          boothMap.sections.forEach((section) => {
            section.booths.forEach((item) => {
              if (item.user?.id === vendor.id) {
                pickedBooth = true;

              }
            })
          })
          setHasPickedBooth(pickedBooth);
          const company = await getCompany(companyId);
          if (company === null) {
            window.location.href = "/LayItOut/DNF/";
            return;
          }
          setCompany(company);

        } else {
          window.location.href = "/LayItOut/DNF/";
          return;
        }
      }


    } else if (type === "create-boothMap") {
      isBoothMap = true;
      setIsCreatingBoothMap(true);

      const boothMapId = urlParams.get('boothMapId') || "";
      setBoothMapId(boothMapId);
      const newBoothMap = await getAreaBoothMap(companyId, areaId, boothMapId);
      if (newBoothMap === null) {
        window.location.href = "/LayItOut/DNF/";
        return;
      }
      setBoothMap(newBoothMap);
      boothMap = newBoothMap;

    } else if (type === "public-preview-boothMap") {
      isBoothMap = true;
      setIsPublicPreviewingDesign(true);
      const boothMapId = urlParams.get('boothMapId') || "";
      setBoothMapId(boothMapId);
      const designName = urlParams.get('designName') || "";
      setDesignName(designName);
      const newBoothMap = await getAreaBoothMap(companyId, areaId, boothMapId);
      if (newBoothMap === null) {
        window.location.href = "/LayItOut/DNF/";
        return;
      }
      setBoothMap(newBoothMap);
      boothMap = newBoothMap;


    }

    if (companyIdParam) {
      setCompanyId(companyIdParam);
    }
    if (areaIdParam) {
      setAreaId(areaIdParam);
    }

    if (!isCreatingArea) {
      setInventoryItems(area.inventoryItems.map(inv => new InventoryItem({
        item: new Item({
          ...inv.item, // copies all properties
          displayItem: true,
        }),
        quantity: inv.quantity
      })));
    }

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
          modifierItems: section.modifierItems.map((item) => new StaringItem({
            cell: new CellId({ x: item.cell.x, y: item.cell.y }),
            item: new Item({
              ...item.item, // copies all properties
              starterItem: true,// Ensure display item is set
              // Ensure rotation is set
            })
          })),
          startingItems: section.startingItems.map((item) => new StaringItem({
            cell: new CellId({ x: item.cell.x, y: item.cell.y }), item: new Item({
              ...item.item, // copies all properties
              starterItem: true,// Ensure rotation is set
            })
          })
          )
        }));
        unmodifiedSections.push(new Section({
          name: section.name,
          cellId: new CellId({ x: (section.cellId.x), y: (section.cellId.y) }),
          cellsLong: section.cellsLong,
          cellsTall: section.cellsTall,
          modifierItems: section.modifierItems.map((item) => new StaringItem({
            cell: new CellId({ x: item.cell.x, y: item.cell.y }),
            item: new Item({
              ...item.item, // copies all properties
              starterItem: true,// Ensure display item is set
              // Ensure rotation is set
            })
          })),
          startingItems: section.startingItems.map((item) => new StaringItem({
            cell: new CellId({ x: item.cell.x, y: item.cell.y }), item: new Item({
              ...item.item, // copies all properties
              starterItem: true,// Ensure rotation is set
            })
          })
          )
        }));
      }

      newTemplates.push(new Template({
        name: template.name,
        sections: newSections,
        inventoryItems: template.inventoryItems,
        id: template.id,
        previewImage: template.previewImage
      }));
      newUnmodifiedTemplates.push(new Template({
        name: template.name,
        sections: unmodifiedSections,
        id: template.id,
        previewImage: template.previewImage,
        inventoryItems: template.inventoryItems,
      }));
    }

    setTemplates([...newTemplates]);
    const sectionsToGenerate: Section[] = [];
    const template = templateId === "" ? undefined : newUnmodifiedTemplates.find((t) => t.id === templateId);
    console.log("TEMPLATE", template, "AREA", area);
    if (isBoothMap && boothMap) {
      setInventoryItems(boothMap.inventoryItems.map(inv => new InventoryItem({
        item: new Item({
          ...inv.item, // copies all properties
          displayItem: true,
        }),
        quantity: inv.quantity
      })));
      setLayoutSections([...boothMap.sections]);
      setSections([...boothMap.sections.map((section) => {
        return new Section({
          name: section.name,
          cellId: new CellId({ x: section.cellId.x, y: section.cellId.y }),
          cellsLong: section.cellsLong,
          cellsTall: section.cellsTall,
          startingItems: section.startingItems,
          booths: section.booths,
          modifierItems: section.modifierItems,
          items: section.startingItems.map((i) => new Item({
            ...i.item, // copies all properties
            sectionCell: new CellId({ x: i.cell.x, y: i.cell.y }),



          }))
        })
      }
      )]);
      sectionsToGenerate.push(...boothMap.sections.map((section) => {
        return new Section({
          name: section.name,
          cellId: new CellId({ x: section.cellId.x, y: section.cellId.y }),
          cellsLong: section.cellsLong,
          cellsTall: section.cellsTall,
          startingItems: section.startingItems,
          booths: section.booths,
          modifierItems: section.modifierItems,
          items: section.startingItems.map((i) => new Item({
            ...i.item, // copies all properties
            sectionCell: new CellId({ x: i.cell.x, y: i.cell.y }),

          }))
        })
      }
      ));
    } else
      if (isDesign) {
        const design = await getAreaDesign(companyId, areaId, urlParams.get('designId') || "");
        if (design === null) {

          window.location.href = "/LayItOut/DNF/";
          return;
        }
        setDesign(design);
        setInventoryItems(design.inventoryItems.map(inv => new InventoryItem({
          item: new Item({
            ...inv.item, // copies all properties
            displayItem: true,
          }),
          quantity: inv.quantity
        })));
        setLayoutSections([...design.sections]);
        setSections([...design.sections.map((section) => {
          return new Section({
            name: section.name,
            cellId: new CellId({ x: section.cellId.x, y: section.cellId.y }),
            cellsLong: section.cellsLong,
            cellsTall: section.cellsTall,
            startingItems: section.startingItems,
            modifierItems: section.modifierItems,
            items: section.startingItems.map((i) => new Item({
              ...i.item, // copies all properties
              sectionCell: new CellId({ x: i.cell.x, y: i.cell.y }),



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
            modifierItems: section.modifierItems,
            items: section.startingItems.map((i) => new Item({
              ...i.item, // copies all properties
              sectionCell: new CellId({ x: i.cell.x, y: i.cell.y }),


            }))
          })
        }
        ));

      } else if (template !== undefined) {
        setInventoryItems(template.inventoryItems.map(inv => new InventoryItem({
          item: new Item({
            ...inv.item, // copies all properties
            displayItem: true,
          }),
          quantity: inv.quantity
        })));
        setLayoutSections([...template.sections]);
        setSections([...template.sections.map((section) => {
          return new Section({
            name: section.name,
            cellId: new CellId({ x: section.cellId.x, y: section.cellId.y }),
            cellsLong: section.cellsLong,
            cellsTall: section.cellsTall,
            startingItems: section.startingItems,
            modifierItems: section.modifierItems,
            items: section.startingItems.map((i) => new Item({
              ...i.item, // copies all properties
              sectionCell: new CellId({ x: i.cell.x, y: i.cell.y }),


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
            modifierItems: section.modifierItems,
            startingItems: section.startingItems,
            items: section.startingItems.map((i) => new Item({
              ...i.item, // copies all properties
              sectionCell: new CellId({ x: i.cell.x, y: i.cell.y }),
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
            modifierItems: section.modifierItems,
            startingItems: section.startingItems,
            items: section.startingItems.map((i) => new Item({
              ...i.item, // copies all properties
              sectionCell: new CellId({ x: i.cell.x, y: i.cell.y }),
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
            modifierItems: section.modifierItems,
            items: section.startingItems.map((i) => new Item({
              ...i.item, // copies all properties
              sectionCell: new CellId({ x: i.cell.x, y: i.cell.y }),


            }))
          })
        }
        ));
      }
    console.log("SECTIONS TO GENERATE", sectionsToGenerate);

    generateCells(sectionsToGenerate, area, type === "create-area", creaingAreaStage);

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
    const newBooths: Booth[] = [];
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
      }));

    }

    for (const startingItem of newSection.modifierItems) {
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




      console.log("Adding item to items", document.querySelector(`.App #${newSection.name.split(" ").join("-")} #${newSection.name.split(" ").join("")}${startingItem.cell.toId()}.cell:not(.cell-border)`) as HTMLElement)
      newItems.push(
        new Item({
          ...startingItem.item, // copies all properties
          initialElement: document.querySelector(`.App #${newSection.name.split(" ").join("-")} #${newSection.name.split(" ").join("")}${startingItem.cell.toId()}.cell:not(.cell-border)`) as HTMLElement,
          starterItem: true,
          moveable: false,
          // Ensure rotation is set
        })

      );

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
    newBooths.push(...newSection.booths.map((booth) => {
      return new Booth({
        ...booth, // copies all properties
        initialElement: document.querySelector(`.App #${newSection.name.split(" ").join("-")} #${newSection.name.split(" ").join("")}${booth.cell.toId()}.cell:not(.cell-border)`) as HTMLElement,
      })
    }))
    for (const booth of newBooths) {


      // Get the current rotation from the item


      for (let i = 0; i < booth.cellsTall; i++) {
        for (let j = 0; j < booth.cellsLong; j++) {
          const mobileSection = mobileCells.find((m) => m.sectionName === newSection.name);
          mobileSection!.cells[booth.cell.y + i][booth.cell.x + j].hasItem = true;
          mobileSection!.cells[booth.cell.y + i][booth.cell.x + j].itemId = booth.id;
        }
      }





      setBooths((old) => [...old, booth])
    }
  }

  function flattenCells(cells: CellProps[][]): CellProps[] {
    let flattenedCells: CellProps[] = [];

    cells.map((row) => flattenedCells = [...flattenedCells, ...row])

    return flattenedCells
  }


  function vendorHasBooth(vendor: Vendor, boothMap: BoothMap): boolean {
    let hasBooth = false;
    boothMap.sections.forEach((section) => {
      section.booths.forEach((item) => {
        if (item.user?.id === vendor.id) {
          hasBooth = true;

        }
      })
    })
    return hasBooth;
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
    if (!startingSection && !isMobile && (creatingAreaStage !== "placing-sections" || !isCreatingArea)) {
      console.log("Item is out of bounds of any section")
      return false;
    }
    // Use rotated dimensions for collision checking
    for (let i = 0; i < item.cellsTall; i++) {
      for (let j = 0; j < item.cellsLong; j++) {
        //Check section it is in
        if (!isMobile) {
          const section = getSectionByCellId(new CellId({ x: startCell.x + j, y: startCell.y + i }), sections);
          if (!section && (creatingAreaStage !== "placing-sections" || !isCreatingArea)) {
            console.log("Item is out of bounds of any section")
            return false;
          }
          if (section?.name != startingSection?.name && (creatingAreaStage !== "placing-sections" || !isCreatingArea)) {
            console.log("Item is crossing section boundaries")
            return false;
          }
        }
        if (funcCells[startCell.y + i][startCell.x + j].hasItem && funcCells[startCell.y + i][startCell.x + j].itemId != item.id) {
          console.log("Something is already here")
          //Check if item in cell is a section modifier item
          const occupyingItem = items.find((it) => it.id == funcCells[startCell.y + i][startCell.x + j].itemId);
          if (occupyingItem && occupyingItem.isSectionModifier) {
            //Check if the item being placed on edge of section modifier
            // if((item.isSectionModifier))

            //Check if item is on edge of section modifier
            if (occupyingItem.sectionModifierType === "LeftDoor" || occupyingItem.sectionModifierType === "RightDoor") {
              console.log("Item is on door of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              return false;
            }
            if (occupyingItem.sectionModifierType === "RightWall") {
              console.log("Item is on left wall of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (j == item.cellsLong - 1) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            } else if (occupyingItem.sectionModifierType === "LeftWall") {
              console.log("Item is on right wall of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (j == 0) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            }
            else if (occupyingItem.sectionModifierType === "TopWall") {
              console.log("Item is on bottom wall of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (i == 0) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            }
            else if (occupyingItem.sectionModifierType === "BottomWall") {
              console.log("Item is on top wall of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (i == item.cellsTall - 1) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            } else if (occupyingItem.sectionModifierType === "TopRightCornerWall") {
              console.log("Item is on bottom left corner of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (i == 0 && j == item.cellsLong - 1) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            } else if (occupyingItem.sectionModifierType === "TopLeftCornerWall") {
              console.log("Item is on bottom right corner of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (i == 0 && j == 0) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            } else if (occupyingItem.sectionModifierType === "BottomRightCornerWall") {
              console.log("Item is on top left corner of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (i == item.cellsTall - 1 && j == item.cellsLong - 1) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            } else if (occupyingItem.sectionModifierType === "BottomLeftCornerWall") {
              console.log("Item is on top right corner of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (i == item.cellsTall - 1 && j == 0) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            }
          } else {
            return false;
          }
        }
      }
    }

    return true;
  }

  function canPlaceMultiItem(funcCells: CellProps[][], startCell: CellId, item: Item): boolean {
    console.log(startCell)
    console.log("CELLS", funcCells)


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
    if (!startingSection && !isMobile && (creatingAreaStage !== "placing-sections" || !isCreatingArea)) {
      console.log("Item is out of bounds of any section")
      return false;
    }
    // Use rotated dimensions for collision checking
    for (let i = 0; i < item.cellsTall; i++) {
      for (let j = 0; j < item.cellsLong; j++) {
        //Check section it is in
        if (!isMobile) {
          const section = getSectionByCellId(new CellId({ x: startCell.x + j, y: startCell.y + i }), sections);
          if (!section && (creatingAreaStage !== "placing-sections" || !isCreatingArea)) {
            console.log("Item is out of bounds of any section")
            return false;
          }
          if (section?.name != startingSection?.name && (creatingAreaStage !== "placing-sections" || !isCreatingArea)) {
            console.log("Item is crossing section boundaries")
            return false;
          }
        }
        if (funcCells[startCell.y + i][startCell.x + j].hasItem && funcCells[startCell.y + i][startCell.x + j].itemId != item.id) {
          console.log("Something is already here")
          //Check if item in cell is a section modifier item
          const occupyingItem = items.find((it) => it.id == funcCells[startCell.y + i][startCell.x + j].itemId);
          if (occupyingItem && occupyingItem.isSectionModifier) {
            //Check if the item being placed on edge of section modifier
            if (occupyingItem.sectionModifierType === "LeftDoor" || occupyingItem.sectionModifierType === "RightDoor") {
              console.log("Item is on door of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              return false;
            }
            if (occupyingItem.sectionModifierType === "RightWall") {
              console.log("Item is on left wall of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (j == item.cellsLong - 1) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            } else if (occupyingItem.sectionModifierType === "LeftWall") {
              console.log("Item is on right wall of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (j == 0) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            }
            else if (occupyingItem.sectionModifierType === "TopWall") {
              console.log("Item is on bottom wall of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (i == 0) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            }
            else if (occupyingItem.sectionModifierType === "BottomWall") {
              console.log("Item is on top wall of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (i == item.cellsTall - 1) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            } else if (occupyingItem.sectionModifierType === "TopRightCornerWall") {
              console.log("Item is on bottom left corner of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (i == 0 && j == item.cellsLong - 1) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            } else if (occupyingItem.sectionModifierType === "TopLeftCornerWall") {
              console.log("Item is on bottom right corner of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (i == 0 && j == 0) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            } else if (occupyingItem.sectionModifierType === "BottomRightCornerWall") {
              console.log("Item is on top left corner of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (i == item.cellsTall - 1 && j == item.cellsLong - 1) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            } else if (occupyingItem.sectionModifierType === "BottomLeftCornerWall") {
              console.log("Item is on top right corner of section modifier, can place item", i, j, item.cellsTall, item.cellsLong)
              if (i == item.cellsTall - 1 && j == 0) {
                continue;
              } else {
                console.log("Item is not on edge of section modifier, cannot place item")
                return false;
              }
            }
          } else {
            return false;
          }
        }
      }
    }

    return true;
  }


  function placeItem(startCell: CellId, item: Item, removeCell: CellId | null) {
    const newCells: CellProps[][] = Array.from(isMobile ? mobileCells.find((m) => m.sectionName === mobileViewingSection)!.cells : cells);
    setCanSave(true);
    if (removeCell != null) {
      console.log("Removing item", item.id, "from cell", removeCell.toId())
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
    if (creatingAreaStage !== "placing-sections" || !isCreatingArea) {
      const section = isMobile ? sections.find((m) => m.name === mobileViewingSection)! : getSectionByCellId(startCell, sections);
      // Add item to section
      const relativeCell = new CellId({ x: startCell.x - section!.cellId.x, y: startCell.y - section!.cellId.y });
      item.sectionCell = relativeCell;
      console.log("Adding item to section", section!.name, "at", relativeCell, item)
      section!.items.push(item);
    } else {
      item.sectionCell = new CellId({ x: startCell.x, y: startCell.y });
    }

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
    console.log("Removing item from inventory", item.name, item.hasMoved)
    let removedItem = false;

    if (!item.hasMoved) {
      console.log("INVENTORY ITEMs", inventoryItems)
      const index = inventoryItems.findIndex((i) => i.item.name == item.name && !i.item.hasMoved);

      if (index !== -1) {
        const newInventoryItems = [...inventoryItems];
        console.log("Found item in inventory", newInventoryItems[index])
        if (newInventoryItems[index].quantity > 0) {
          newInventoryItems[index].quantity -= 1;
          if (newInventoryItems[index].quantity <= 0) {
            removedItem = true;

            newInventoryItems.splice(index, 1);
          }
          setInventoryItems(newInventoryItems);
        }
      } else {
        setInventoryItems(inventoryItems)
      }
    }

    setItems((old) => {
      console.log("Placing item", item)

      console.log("Updating item", item.id)
      if (tapAndPlaceMode && placingItem && item.id == placingItem.id) {
        console.log("Updating placing item", item.id)
        item.hasMoved = true;
        item.starterItem = true;
        item.isDisplayItem = false;
        item.initialElement = document.querySelector(`.App #${startCell.toId()}.cell:not(.cell-border)`) as HTMLElement;
        return [...old, new Item({
          ...item, // copies all properties
          hasMoved: true,
          id: item.name + Math.floor(Math.random() * 100000).toString(),
        })];
      } else {
        if (!old.find((i) => i.id == item.id)!.hasMoved) {


          old.find((i) => i.id == item.id)!.hasMoved = true
          old.find((i) => i.id == item.id)!.sectionCell = item.sectionCell;
        }
      }
      return old;
    })
    if (tapAndPlaceMode && placingItem) {


      if (removedItem) {

        setPlacingItem(null);

        return;
      }

    }
  }

  function addDraggingItem(item: Item) {
    // items.push(item)
    // setItems(items)
    if (items.find((i) => i.name == item.name && !i.hasMoved && !i.starterItem)) {
      return
    }
    setItems((old) => [...old, item])
  }



  useEffect(() => {
    if (placingItem) {
      console.log("Adding placing item", placingItem.id)
      setPlacingItemId(placingItem.id);
      // placingItem.initialElement = undefined;
      // setItems((old) => [...old, placingItem])



    } else {
      console.log("Removing placing item", placingItemId)
      setPlacingItemId("");
      // setItems((old) => {

      //   return old.filter((i) => i.id != placingItemId)
      // })

    }

  }, [placingItem]);







  function removeItem(item: Item) {
    console.log("Removing item", item.id)
    setItems((old) => {

      return old.filter((i) => i.id != item.id)
    })
  }


  function deleteItem(item: Item, cell: CellId) {
    const newCells: CellProps[][] = Array.from(isMobile ? mobileCells.find((m) => m.sectionName === mobileViewingSection)!.cells : cells);
    setCanSave(true);
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
    if ((creatingAreaStage !== "placing-sections" || !isCreatingArea)) {
      const section = isMobile ? sections.find((m) => m.name === mobileViewingSection)! : getSectionByCellId(cell, sections);
      //remove item from section
      section!.items = section!.items.filter((i) => i.id != item.id);
      console.log("DELETING ITEM", item.id)
    }
    setItems((old) => {
      console.log()
      return old.filter((i) => i.id != item.id)
    })

    //add the item to the inventory
    setInventoryItems((old) => {
      const index = old.findIndex((i) => i.item.name == item.name && !i.item.hasMoved);
      if (index !== -1) {
        const newInventoryItems = [...old];
        if (newInventoryItems[index].quantity > 0) {
          newInventoryItems[index].quantity += 1;
        }
        return newInventoryItems;
      } else {
        return [...old, new InventoryItem({
          item: new Item({
            ...item, // copies all properties
            hasMoved: false,
          }), quantity: 1
        })];
      }
    })
  }

  function deleteItemRotate(item: Item, cell: CellId) {
    const newCells: CellProps[][] = Array.from(isMobile ? mobileCells.find((m) => m.sectionName === mobileViewingSection)!.cells : cells);
    console.log("DELETING ITEM ROTATE", item.id, item.rotation)
    setCanSave(true);
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
      console.log("Start cell is out of bounds", startCell);

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
    // setPlacingItem(null);

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

  async function placeSections(sections: Item[]) {
    const newSections: Section[] = [];
    setLoading(true);
    for (const section of sections) {
      const sectionName = section.name;
      const sectionCellId = new CellId({ x: section.sectionCell!.x, y: section.sectionCell!.y });

      const newSection = new Section({
        name: sectionName,
        cellId: sectionCellId,
        cellsLong: section.cellsLong,
        cellsTall: section.cellsTall,
        modifierItems: [],
        startingItems: [],
        items: []
      });
      newSections.push(newSection);
    }
    let currentWidth = 0;
    let currentHeight = 0;
    for (const section of newSections) {

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
    await placeAreaSections(companyId, areaId, newSections, currentWidth, currentHeight);

    window.location.href = `/LayItOut/Layout/?companyId=${companyId}&areaId=${areaId}&type=create-area&stage=modify-sections`;

  }

  async function saveSectionModifierItems(items: Item[], sections: Section[]) {
    const newSections: Section[] = [];
    setLoading(true);
    for (const section of sections) {
      const sectionName = section.name;
      const sectionCellId = new CellId({ x: section.cellId.x, y: section.cellId.y });
      console.log("Saving section modifier items for section", sectionName, section.items.map((i) => i.name), "at cell", sectionCellId);
      const newSection = new Section({
        name: sectionName,
        cellId: sectionCellId,
        cellsLong: section.cellsLong,
        cellsTall: section.cellsTall,
        startingItems: [],
        items: [],
        modifierItems: section.items.map((m) => new StaringItem({
          cell: new CellId({ x: m.sectionCell!.x, y: m.sectionCell!.y }),
          item: new Item({
            ...m, // copies all properties
            isSectionModifier: true,
          })

        }))
      });
      newSections.push(newSection);
    }
    console.log("Saving section modifier items", newSections);
    await saveAreaSections(companyId, areaId, newSections);
    console.log("Section modifier items saved successfully");

    window.location.href = `/LayItOut/Layout/?companyId=${companyId}&areaId=${areaId}&type=create-area&stage=placing-items`;
  }

  async function saveArea(sections: Section[], inventoryItems: InventoryItem[]) {
    setLoading(true);
    const newSections: Section[] = [];
    for (const section of sections) {
      const sectionName = section.name;
      const sectionCellId = new CellId({ x: section.cellId.x, y: section.cellId.y });
      const newSection = new Section({
        name: sectionName,
        cellId: sectionCellId,
        cellsLong: section.cellsLong,
        cellsTall: section.cellsTall,
        modifierItems: section.modifierItems,
        startingItems: section.items.map((i) => new StaringItem({
          cell: new CellId({ x: i.sectionCell!.x, y: i.sectionCell!.y }),
          item: new Item({
            ...i, // copies all properties
            starterItem: true,
          })
        })),
        items: []
      });
      newSections.push(newSection);
    }
    console.log("Saving area sections", newSections);

    localStorage.setItem('screenshotSections', newSections.map((s) => JSON.stringify(s.toJSON())).join("LAYOUTSEPARATOR"));
    console.log("Screenshot sections saved to localStorage", newSections.map((s) => JSON.stringify(s.toJSON())).join("LAYOUTSEPARATOR"));
    localStorage.setItem('screenshot', '');
    setTakingPhoto(true);
    window.addEventListener('storage', async (event) => {
      console.log("Storage event", event);
      if (event.key === 'screenshot') {
        const newArea = new Area({
          id: areaId,
          name: area!.name,
          sections: newSections,
          templates: [],
          previewImage: event.newValue!,
          width: area!.width,
          height: area!.height,
          inventoryItems: inventoryItems.map((i) => new InventoryItem({
            item: new Item({
              ...i.item, // copies all properties
              starterItem: true,
            }),
            quantity: i.quantity
          }))
        });
        await saveCompanyArea(companyId!, newArea);
        console.log("Area saved successfully");
        setLoading(false);
        window.location.href = `/LayItOut/Layout/?companyId=${companyId}&areaId=${areaId}&type=view-area`;
      }
    })
  }

  function addHighlightedCell(startCell: CellId) {
    const newCells: CellProps[][] = Array.from(isMobile ? mobileCells.find((m) => m.sectionName === mobileViewingSection)!.cells : cells);
    if (newCells[startCell.y] == undefined) {
      return;
    }
    newCells[startCell.y][startCell.x].mouseOver = true;
    newCells[startCell.y][startCell.x].canPlaceItem = true;
    newCells[startCell.y][startCell.x].mouseOverLocation = "single";
    setHighlightedCells((old) => [...old, startCell]);
    if (isMobile) {
      // Update the mobile cells
      const mobileSection = mobileCells.find((m) => m.sectionName === mobileViewingSection);
      if (mobileSection) {
        mobileSection.cells = newCells.map(row => row.map(cell => ({ ...cell }))); // Create a new array to trigger re-render
        setMobileCells([...mobileCells]);
      }
      setMobileCells((old) => old.map((m) => m.sectionName === mobileViewingSection ? { ...m, cells: newCells } : m));

    } else {
      console.log("Adding highlighted cell", startCell.toId())
      setCells(newCells);
    }
  }

  function placeHighlightedCells(item: Item) {
    const newCells: CellProps[][] = Array.from(isMobile ? mobileCells.find((m) => m.sectionName === mobileViewingSection)!.cells : cells);
    setCanSave(true);
    const cellsToAdd: CellId[] = [];
    highlightedCells.forEach((cell) => {
      if (!cellsToAdd.some((c) => c.toId() === cell.toId())) {
        cellsToAdd.push(cell);
      }
    });
    setHighlightedCells([]);
    const newItems: Item[] = [];
    const inventoryIndex = inventoryItems.findIndex((i) => i.item.name == item.name && !i.item.hasMoved);
    let inventoryQuantity = inventoryIndex !== -1 ? inventoryItems[inventoryIndex].quantity : 0;
    cellsToAdd.forEach((cell) => {
      const newItem = new Item({
        ...item, // copies all properties

      });
      newItem.id = newItem.name + Math.floor(Math.random() * 100000).toString();
      console.log("Placing item", newItem.name, "at", cell.toId(), "CAN PLACE?", canPlaceMultiItem(newCells, cell, newItem))
      if (canPlaceMultiItem(newCells, cell, newItem) && inventoryQuantity != 0) {
        if (inventoryIndex !== -1) {
          inventoryQuantity -= 1;
        }
        if (creatingAreaStage !== "placing-sections" || !isCreatingArea) {
          const section = isMobile ? sections.find((m) => m.name === mobileViewingSection)! : getSectionByCellId(cell, sections);
          // Add item to section
          console.log("Adding item to section", section!.name, "at", section!.cellId, "with cell", cell.toId(), cell.x - section!.cellId.x, cell.y - section!.cellId.y)
          const relativeCell = new CellId({ x: cell.x - section!.cellId.x, y: cell.y - section!.cellId.y });
          newItem.sectionCell = relativeCell;
          console.log("Adding item to section", section!.name, "at", relativeCell, newItem)
          section!.items.push(newItem);
          console.log("SECTION ITEMS", section!.items.map((i) => i.name))
        } else {
          newItem.sectionCell = new CellId({ x: cell.x, y: cell.y });
        }

        // Use rotated dimensions for placement
        for (let i = 0; i < item.cellsTall; i++) {
          for (let j = 0; j < item.cellsLong; j++) {
            newCells[cell.y + i][cell.x + j].hasItem = true;
            newCells[cell.y + i][cell.x + j].itemId = newItem.id;
          }
        }
        newItem.hasMoved = true;
        newItem.starterItem = true;
        newItem.isDisplayItem = false;
        newItem.initialElement = document.querySelector(`.App #${cell.toId()}.cell:not(.cell-border)`) as HTMLElement;
        const newestItem = new Item({
          ...newItem, // copies all properties
        });
        newItems.push(newestItem);
      }
    });
    for (const item of newItems) {
      console.log("Adding item to items", item.id)
      setItems((old) => [...old, item]);
    }
    // Update inventory
    if (inventoryIndex !== -1) {
      setInventoryItems((old) => {
        const newInventory = [...old];
        if (newInventory[inventoryIndex].quantity > 0) {
          newInventory[inventoryIndex].quantity = inventoryQuantity;
          if (newInventory[inventoryIndex].quantity == 0) {
            newInventory.splice(inventoryIndex, 1);
          }
        }
        return newInventory;
      });
    }
    if (inventoryQuantity == 0) {
      setPlacingItem(null);
    }
    if (isMobile) {
      const mobileSection = mobileCells.find((m) => m.sectionName === mobileViewingSection);
      if (mobileSection) {
        mobileSection.cells = newCells.map(row => row.map(cell => ({ ...cell }))); // Create a new array to trigger re-render
        setMobileCells([...mobileCells]);
      }
      setMobileCells((old) => old.map((m) => m.sectionName === mobileViewingSection ? { ...m, cells: newCells } : m));

    } else {
      setCells(newCells);
    }
    setSections(sections);
  }

  function saveBoothMap(sections: Section[], inventoryItems: InventoryItem[], boothMap: BoothMap | null) {
    setLoading(true);
    const newSections: Section[] = [];
    for (const section of sections) {
      const sectionName = section.name;
      const sectionCellId = new CellId({ x: section.cellId.x, y: section.cellId.y });
      const booths = section.items.filter((i) => i.isBooth);
      const items = section.items.filter((i) => !i.isBooth);
      const newSection = new Section({
        name: sectionName,
        cellId: sectionCellId,
        cellsLong: section.cellsLong,
        cellsTall: section.cellsTall,
        modifierItems: section.modifierItems,
        startingItems: items.map((i) => new StaringItem({
          cell: new CellId({ x: i.sectionCell!.x, y: i.sectionCell!.y }),
          item: new Item({
            ...i, // copies all properties
            displayItem: true,
          })
        })),
        booths: booths.map((b) => new Booth({
          id: b.name + Math.floor(Math.random() * 100000).toString(),
          name: b.name,
          cell: new CellId({ x: b.sectionCell!.x, y: b.sectionCell!.y }),
          cellsLong: b.cellsLong,
          cellsTall: b.cellsTall,
          user: b.boothUser,
        })),
        items: []
      });
      newSections.push(newSection);
    }
    console.log("Saving area sections", newSections);

    localStorage.setItem('screenshotSections', newSections.map((s) => JSON.stringify(s.toJSON())).join("LAYOUTSEPARATOR"));
    console.log("Screenshot sections saved to localStorage", newSections.map((s) => JSON.stringify(s.toJSON())).join("LAYOUTSEPARATOR"));
    localStorage.setItem('screenshot', '');
    setTakingPhoto(true);
    window.addEventListener('storage', async (event) => {
      console.log("Storage event", event);
      if (event.key === 'screenshot') {
        const newBoothMap = new BoothMap({
          id: boothMap!.id,
          name: boothMap!.name,
          sections: newSections,
          areaId: areaId,
          previewImage: event.newValue!,


          inventoryItems: inventoryItems.map((i) => new InventoryItem({
            item: new Item({
              ...i.item, // copies all properties
              starterItem: true,
            }),
            quantity: i.quantity
          })),

        });
        await saveAreaBoothMap(companyId!, newBoothMap);
        console.log("Booth Map saved successfully");
        setLoading(false);
        window.location.href = `/LayItOut/Layout/?companyId=${companyId}&areaId=${areaId}&type=view-boothMap&boothMapId=${boothMapId}`;
      }
    })
  }


  return (
    console.log("RENDERING APP", !(isCreatingArea && creatingAreaStage != "placing-items")),
    <>

      <div className="App" >
        <h1 className='title'>LayItOut</h1>
        <br />
        {isPickingBoothMap && <div className='area-creation'>
          {!hasPickedBooth ? <><h2 className='area-creation-title'>Picking Booth</h2>
            <label htmlFor="">Tap on an open booth then click on the checkmark to pick a booth</label> </> : <><h2 className='area-creation-title'>You have already picked a booth</h2>
            <label htmlFor="">Contact {company?.supportEmail} to change booths</label>
          </>}
          <label htmlFor="">Booth Size: {vendor?.plotWidth}ft x {vendor?.plotHeight}ft</label>
          <br />
        </div>}
        {isCreatingBoothMap && <div className='area-creation'>
          <h2 className='area-creation-title'>Create Booth Map</h2>
          <label htmlFor="">Create a booth map by placing items and then creating and placing booths, same way you create and place items</label>
        </div>}
        {isCreatingArea && <div className='area-creation'>
          <h2 className='area-creation-title'>Create Area</h2>
          <label htmlFor="">{creatingAreaStage == "placing-sections" ? "Create new sections and place them" : creatingAreaStage == "modify-sections" ? "Add walls and doors to sections" : "Add items to the inventory and place items"}</label>
        </div>}
        {(isCreatingTemplate || isEditingTemplate) && <div className="template-name-row">
          <label htmlFor="template-name">Template Name:</label>
          <input type="text" id="template-name" name="template-name" onChange={(e) => setTemplateName(e.target.value)} value={templateName} />

        </div>}
        {(isViewingDesign || isPublicPreviewingDesign) && <div className='design-name-row'>
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
                  modifierItems: s.modifierItems,
                  startingItems: s.items.map((i) => new StaringItem({
                    cell: new CellId({ x: i.sectionCell!.x, y: i.sectionCell!.y }),
                    item: new Item({
                      ...i, // copies all properties
                      starterItem: true,
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
                          inventoryItems: inventoryItems,
                          previewImage: event.newValue!,
                          sections: sections.map((s) => new Section({
                            name: s.name,
                            cellId: new CellId({ x: t.sections.find((se) => se.name == s.name)!.cellId.x, y: t.sections.find((se) => se.name == s.name)!.cellId.y }),
                            cellsLong: s.cellsLong,
                            modifierItems: s.modifierItems,
                            cellsTall: s.cellsTall,
                            startingItems: s.items.map((i) => new StaringItem({
                              cell: new CellId({ x: i.sectionCell!.x, y: i.sectionCell!.y }),
                              item: new Item({
                                ...i, // copies all properties
                                starterItem: true,
                              })
                            }))
                          })),
                          id: t.id
                        });
                      }
                      return new Template({
                        name: t.name,
                        previewImage: t.previewImage,
                        inventoryItems: t.inventoryItems,
                        sections: t.sections.map((s) => new Section({
                          name: s.name,
                          cellId: new CellId({ x: s.cellId.x, y: s.cellId.y }),
                          cellsLong: s.cellsLong,
                          cellsTall: s.cellsTall,
                          modifierItems: s.modifierItems,
                          startingItems: s.startingItems.map((i) => new StaringItem({
                            cell: new CellId({ x: i.cell.x, y: i.cell.y }),
                            item: new Item({
                              ...i.item, // copies all properties

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
                  modifierItems: s.modifierItems,
                  startingItems: s.items.map((i) => new StaringItem({
                    cell: new CellId({ x: i.sectionCell!.x, y: i.sectionCell!.y }),
                    item: new Item({
                      ...i, // copies all properties
                      starterItem: true,
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
                      inventoryItems: inventoryItems,
                      sections: sections.map((s) => new Section({
                        name: s.name,
                        cellId: new CellId({ x: layoutSections.find((se) => se.name == s.name)!.cellId.x, y: layoutSections.find((se) => se.name == s.name)!.cellId.y }),
                        cellsLong: s.cellsLong,
                        cellsTall: s.cellsTall,
                        modifierItems: s.modifierItems,
                        startingItems: s.items.map((i) => new StaringItem({
                          cell: new CellId({ x: i.sectionCell!.x, y: i.sectionCell!.y }),
                          item: new Item({
                            ...i, // copies all properties
                            starterItem: true,
                          })
                        }))
                      })),
                      id: templateName + (Math.random() * 10000).toString()
                    });

                    const updatedTemplates = [...templates.map((t) => new Template({
                      name: t.name,
                      previewImage: t.previewImage,
                      inventoryItems: t.inventoryItems,
                      sections: t.sections.map((s) => new Section({
                        name: s.name,
                        cellId: new CellId({ x: s.cellId.x, y: s.cellId.y }),
                        cellsLong: s.cellsLong,
                        cellsTall: s.cellsTall,
                        modifierItems: s.modifierItems,
                        startingItems: s.startingItems.map((i) => new StaringItem({
                          cell: new CellId({ x: i.cell.x, y: i.cell.y }),
                          item: new Item({
                            ...i.item, // copies all properties

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
          {canSave && <button className='action-btn' onClick={() => {
            setLoading(true);

            setTimeout(async () => {
              //open url in new tab

              const screenshotSections = sections.map((s) => new Section({
                name: s.name,
                cellId: new CellId({ x: layoutSections.find((se) => se.name == s.name)!.cellId.x, y: layoutSections.find((se) => se.name == s.name)!.cellId.y }),
                cellsLong: s.cellsLong,
                cellsTall: s.cellsTall,
                modifierItems: s.modifierItems,
                startingItems: s.items.map((i) => new StaringItem({
                  cell: new CellId({ x: i.sectionCell!.x, y: i.sectionCell!.y }),
                  item: new Item({
                    ...i, // copies all properties
                    starterItem: true,
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
                    inventoryItems: inventoryItems,
                    sections: sections.map((s) => new Section({
                      name: s.name,
                      cellId: new CellId({ x: layoutSections.find((se) => se.name == s.name)!.cellId.x, y: layoutSections.find((se) => se.name == s.name)!.cellId.y }),
                      cellsLong: s.cellsLong,
                      cellsTall: s.cellsTall,
                      modifierItems: s.modifierItems,
                      startingItems: s.items.map((i) => new StaringItem({
                        cell: new CellId({ x: i.sectionCell!.x, y: i.sectionCell!.y }),
                        item: new Item({
                          ...i, // copies all properties
                          starterItem: true,
                        })
                      }))
                    })),
                    id: designId
                  });
                  updateAreaDesign(companyId, areaId, updatedDesign).then(() => {
                    console.log("Design updated successfully");
                    setCanSave(false);
                    setLoading(false);


                  });
                }
              })
              // open the url in the background






            }, 500)

          }
          }>Save</button>}
          <button className='action-btn' onClick={() => {

          }}>Submit</button>

        </div>}

        {!isViewingDesign && !isViewingArea && !isViewingBoothMap && !isPickingBoothMap && !isPublicPreviewingDesign && < div className='place-mode-row'>
          <label htmlFor="tap-and-place-mode">Place Mode: </label>
          <select id="tap-and-place-mode" name="tap-and-place-mode" value={tapAndPlaceMode ? "tap" : "drag"} onChange={(e) => setTapAndPlaceMode(e.target.value === "tap")} className='place-mode-select'>
            <option value="drag">Drag and Drop</option>
            <option value="tap">Tap and Place</option>
          </select>

        </div>}
        {loading && (
          <>
            <div className="loader-backdrop">
              <div className="loader"></div>

            </div>
          </>
        )} <div className='layout'>


          {!isViewingDesign && !isViewingArea && !isViewingBoothMap && !isPickingBoothMap && !isPublicPreviewingDesign && <Toolbox setSelectedItem={setPlacingItem} tapAndPlaceMode={tapAndPlaceMode} isModifyingSections={isCreatingArea && creatingAreaStage == 'modify-sections'} isViewingDesign={isViewingDesign} isEditingTemplate={isEditingTemplate} isCreatingTemplate={isCreatingTemplate} maxHeight={isMobile ? 200 : height * cellSize} showAddCustomItem={() => {
            if (creatingAreaStage == "placing-sections" && isCreatingArea) {
              addSectionDialogRef.current?.showModal();
            } else if (creatingAreaStage == "placing-items" && isCreatingArea) {
              addInventoryItemDialogRef.current?.showModal();
            } else { addCustomItemDialogRef.current?.showModal(); }
          }} addDraggingItem={addDraggingItem} removeItem={removeItem} inventoryItems={inventoryItems.map(inv =>
            new InventoryItem({
              item: new Item({
                ...inv.item, // copies all properties
                displayItem: true,
              })
              , quantity: inv.quantity
            })
          )} />}
          {isViewingBoothMap && boothMap ? <VendorsTile onDeleteVendor={async (vendorId) => {
            setLoading(true);
            const updatedBoothMap = new BoothMap({
              ...boothMap,
              vendors: boothMap.vendors.filter((v) => v.id !== vendorId),
              sections: boothMap.sections.map((s) => {
                return new Section({
                  ...s,
                  booths: s.booths.map((b) => {
                    if (b.user?.id === vendorId) {
                      return new Booth({
                        ...b,
                        user: null,
                        initialElement: b.initialElement ?? undefined
                      });
                    }
                    return b;
                  })
                });
              })
            });
            await saveAreaBoothMap(companyId, updatedBoothMap);
            setBoothMap(updatedBoothMap);
            window.location.reload();
          }} onEditVendor={(editVendor) => {
            setEditVendor(editVendor);
            editVendorDialogRef.current?.showModal();

          }} boothMap={boothMap} vendors={boothMap?.vendors ?? []} maxHeight={isMobile ? undefined : height * cellSize} onAddVendor={() => {
            addVendorDialogRef.current?.showModal();
          }} /> : null}
          {isMobile ? <div className='mobile-areas' style={{ height: mobileHeight + "px" }}>
            {sections.length > 1 && <img src={ForwardIcon} onClick={() => {
              const index = sections.findIndex((s) => s.name == mobileViewingSection);
              if (index === -1) return;
              const nextIndex = (index - 1 + sections.length) % sections.length;
              setMobileViewingSection(sections[nextIndex].name);
              console.log("Changing viewing section to", sections[nextIndex].name)

            }} className='back-mobile-areas' />}
            {mobileAreas.map((area, index) => (
              <AreaComponent width={area.width} height={area.height} cells={flattenCells(mobileCells.find((c) => c.sectionName == area.sectionName)!.cells)} key={index} id={area.sectionName} visibile={mobileViewingSection == null ? true : area.sectionName == mobileViewingSection} section={area.sectionName} />
            ))}
            {sections.length > 1 && <img src={ForwardIcon} onClick={() => {
              const index = sections.findIndex((s) => s.name == mobileViewingSection);
              if (index === -1) return;
              const nextIndex = (index + 1) % sections.length;
              setMobileViewingSection(sections[nextIndex].name);
              console.log("Changing viewing section to", sections[nextIndex].name)

            }} className='forward-mobile-areas' />}</div>
            : <AreaComponent width={width * cellSize} height={height * cellSize} cells={flattenCells(cells)} />}
          {(creatingAreaStage == "placing-items" || !isCreatingArea) && <KeyTile maxHeight={isMobile ? undefined : height * cellSize} />}
        </div>
        {isViewingBoothMap && <div className='design-view'>
          <button className='action-btn' onClick={() => {
            const screenshotSections = sections.map((s) => new Section({
              name: s.name,
              cellId: new CellId({ x: layoutSections.find((se) => se.name == s.name)!.cellId.x, y: layoutSections.find((se) => se.name == s.name)!.cellId.y }),
              cellsLong: s.cellsLong,
              cellsTall: s.cellsTall,
              modifierItems: s.modifierItems,
              booths: s.booths,
              startingItems: s.items.map((i) => new StaringItem({
                cell: new CellId({ x: i.sectionCell!.x, y: i.sectionCell!.y }),
                item: new Item({
                  ...i, // copies all properties
                  starterItem: true,
                })
              }))
            }));
            localStorage.setItem('printSections', screenshotSections.map((s) => JSON.stringify(s.toJSON())).join("LAYOUTSEPARATOR"));
            window.open(window.location.origin + `/LayItOut/Print/?companyId=${companyId}&areaId=${areaId}&designName=${boothMap?.name}`, '_blank');
          }}>Print</button>
        </div>}
        {isViewingDesign && <div className='design-view'>
          <button className='action-btn' onClick={() => {
            const screenshotSections = sections.map((s) => new Section({
              name: s.name,
              cellId: new CellId({ x: layoutSections.find((se) => se.name == s.name)!.cellId.x, y: layoutSections.find((se) => se.name == s.name)!.cellId.y }),
              cellsLong: s.cellsLong,
              cellsTall: s.cellsTall,
              modifierItems: s.modifierItems,
              booths: s.booths,
              startingItems: s.items.map((i) => new StaringItem({
                cell: new CellId({ x: i.sectionCell!.x, y: i.sectionCell!.y }),
                item: new Item({
                  ...i, // copies all properties
                  starterItem: true,
                })
              }))
            }));
            localStorage.setItem('printSections', screenshotSections.map((s) => JSON.stringify(s.toJSON())).join("LAYOUTSEPARATOR"));
            window.open(window.location.origin + `/LayItOut/Print/?companyId=${companyId}&areaId=${areaId}&designName=${designName}&designId=${designId}`, '_blank');
          }}>Print</button>
          <button className='action-btn' onClick={() => {

            const newTemplate = new Template({
              name: designName,
              previewImage: design!.previewImage,
              inventoryItems: design!.inventoryItems,
              sections: design!.sections,
              id: design!.name + (Math.random() * 10000).toString()
            });
            const updatedTemplates = [...templates.map((t) => new Template({
              name: t.name,
              previewImage: t.previewImage,
              inventoryItems: t.inventoryItems,
              sections: t.sections.map((s) => new Section({
                name: s.name,
                cellId: new CellId({ x: s.cellId.x, y: s.cellId.y }),
                cellsLong: s.cellsLong,
                cellsTall: s.cellsTall,
                modifierItems: s.modifierItems,
                startingItems: s.startingItems.map((i) => new StaringItem({
                  cell: new CellId({ x: i.cell.x, y: i.cell.y }),
                  item: new Item({
                    ...i.item, // copies all properties

                  })
                }))
              })),
              id: t.id
            })), newTemplate];
            saveAreaTemplates(companyId, areaId, updatedTemplates).then(() => {


              console.log("Template updated successfully");
              setTemplates(updatedTemplates);


              window.location.href = `/LayItOut/Layout/?companyId=${companyId}&areaId=${areaId}&type=edit-template&templateId=${newTemplate.id}`;
            });
          }}>Turn into a Template</button>

          <button className='action-btn' onClick={() => {

            window.location.href = `/LayItOut/?view=desings`;
          }}>Back</button>

        </div>}
        {isViewingBoothMap && <div className='design-view'>
          <button className='action-btn' onClick={() => {
            window.location.href = `/LayItOut/?view=boothmaps`;
          }}>Back</button>
        </div>

        }
        {isViewingArea && <div className='design-view'>


          <button className='action-btn' onClick={() => {

            window.location.href = `/LayItOut/?view=areas`;
          }}>Back</button>

        </div>}
        {isCreatingArea && <div className='design-view'>
          <button className='action-btn' onClick={() => {
            if (creatingAreaStage == "placing-sections") {
              placeSections(items.filter((i) => i.isSectionItem));

            } else if (creatingAreaStage == "modify-sections") {
              saveSectionModifierItems(items.filter((i) => i.isSectionModifier), sections);
            } else if (creatingAreaStage == "placing-items") {
              saveArea(sections, inventoryItems);
            }
          }
          }>{creatingAreaStage == "placing-items" ? "Create Area" : "Next"}</button>

          <button className='action-btn' onClick={async () => {
            setLoading(true);
            await deleteArea(companyId, areaId);
            window.location.href = `/LayItOut/`
          }}>Cancel</button>

        </div >}
        {isCreatingBoothMap && <div className='design-view'>
          <button className='action-btn' onClick={() => {
            console.log("Creating booth map with sections", sections, "and inventory items", inventoryItems, "and boothMap", boothMap);
            saveBoothMap(sections, inventoryItems, boothMap);
          }
          }>Create Booth Map</button>

          <button className='action-btn' onClick={async () => {
            setLoading(true);
            await deleteBoothMap(companyId, areaId, boothMapId);
            window.location.href = `/LayItOut/?view=boothmaps`
          }}>Cancel</button>

        </div >}

      </div >
      <div >
        {sections.map((section) => <SectionArea takingPhoto={false} section={section} key={section.cellId.toId()} visible={mobileViewingSection == null ? true : section.name == mobileViewingSection} cellSize={cellSize} />)}
        {items.map((item) => {
          return <DraggableItem isPlacingItem={placingItem != null} isCreatingArea={isCreatingArea} isCreatingTemplate={isCreatingTemplate || isEditingTemplate} cellSize={cellSize} isViewingDesign={isViewingDesign || isViewingArea || isViewingBoothMap || isPickingBoothMap || isPublicPreviewingDesign} removeItem={removeItem} visible={!isMobile ? true : !item.hasMoved && !item.starterItem ? true : mobileViewingSection == null ? false : item.isSectionModifier ? sections.find((s) => s.name == mobileViewingSection)?.modifierItems.some((i) => i.item.id === item.id) : item.starterItem ? sections.find((s) => s.name == mobileViewingSection)?.startingItems.some((i) => i.item.id === item.id) : sections.find((s) => s.name == mobileViewingSection)?.items.some((i) => i.id === item.id)}

            item={item} canPlaceItem={canPlaceItem} placeItem={placeItem} deleteItemRotate={deleteItemRotate} highlightCells={highlightCells} unHighlightCells={unHighlightCells} key={item.id} deleteItem={deleteItem} isSelected={selectedItemId === item.id}
            onSelect={onSelectItem}
            isUnselecting={unselectingItemIds.includes(item.id)}
            onDeselect={() => onDeselectItem(item.id)} />
        })}
        {booths.map((booth) => {
          console.log("CAN PICK BOOTH", booth.cellsLong == vendor?.plotWidth && booth.cellsTall == vendor!.plotHeight, "BOOTH", booth, "VENDOR", vendor);
          return <BoothItem canPick={isViewingBoothMap || hasPickedBooth || (booth.cellsLong == vendor?.plotWidth && booth.cellsTall == vendor!.plotHeight)} visible={!isMobile ? true : mobileViewingSection == null ? false : (sections.find((s) => s.name == mobileViewingSection)?.booths.some((i) => i.id === booth.id) ?? false)} booth={booth} isViewingBooth={isViewingBoothMap} isPublicViewingBooth={isPublicPreviewingDesign} hasPickedBooth={hasPickedBooth} isSelected={selectedItemId == booth.id} cellSize={cellSize} key={booth.id} onSelect={onSelectItem}
            isUnselecting={unselectingItemIds.includes(booth.id)}
            onDeselect={() => onDeselectItem(booth.id)} onPickBooth={async (boothId) => {
              setLoading(true);
              const updatedSections = sections.map((s) => {
                if (s.name === mobileViewingSection) {
                  return new Section({
                    ...s,
                    booths: s.booths.map((i) => {
                      if (i.id === boothId) {
                        return new Booth({
                          ...i,
                          user: vendor,
                          initialElement: i.initialElement ?? undefined,
                        });
                      }
                      return i;
                    })
                  });
                } else if (s.booths.some((i) => i.id === boothId)) {
                  return new Section({
                    ...s,
                    booths: s.booths.map((i) => {
                      if (i.id === boothId) {
                        return new Booth({
                          ...i,
                          user: vendor,
                          initialElement: i.initialElement ?? undefined,
                        });
                      }
                      return i;
                    })


                  });
                } else {
                  return s;
                }
              });
              console.log("Updated sections", updatedSections);
              setSections(updatedSections);
              const updatedBoothMap = new BoothMap({
                ...boothMap!,
                sections: updatedSections
              });
              await saveAreaBoothMap(companyId, updatedBoothMap);
              window.location.reload();
              setLoading(false);
            }}
            onRemoveVendorFromBooth={() => {
              setLoading(true);
              const updatedSections = sections.map((s) => {
                return new Section({
                  ...s,
                  booths: s.booths.map((b) => {
                    if (b.user?.id === booth.user?.id) {
                      return new Booth({
                        ...b,
                        user: null,
                        initialElement: b.initialElement ?? undefined
                      });
                    }
                    return b;
                  })
                });
              });
              const updatedBoothMap = new BoothMap({
                ...boothMap!,
                sections: updatedSections,

              });
              saveAreaBoothMap(companyId, updatedBoothMap).then(() => {
                window.location.reload();
              });
            }} onAddVendorToBooth={() => {
              setSelectedBooth(booth);
              addVendorToBoothDialogRef.current?.showModal();
            }} />
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
        !loading && !(isCreatingTemplate || isEditingTemplate || isViewingDesign || isCreatingBoothMap || isCreatingArea || isViewingBoothMap || isPickingBoothMap || isPublicPreviewingDesign) && <div className='template-icon' onClick={() => {
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
      }} duplicateTemplate={(temp) => {
        const newTemplate = new Template({
          name: temp.name + " Copy",
          previewImage: temp.previewImage,
          inventoryItems: temp.inventoryItems,
          sections: temp.sections,
          id: temp.name + "Copy" + (Math.random() * 10000).toString()
        });
        const updatedTemplates = [...templates.map((t) => new Template({
          name: t.name,
          previewImage: t.previewImage,
          inventoryItems: t.inventoryItems,
          sections: t.sections.map((s) => new Section({
            name: s.name,
            cellId: new CellId({ x: s.cellId.x, y: s.cellId.y }),
            cellsLong: s.cellsLong,
            cellsTall: s.cellsTall,
            modifierItems: s.modifierItems,
            startingItems: s.startingItems.map((i) => new StaringItem({
              cell: new CellId({ x: i.cell.x, y: i.cell.y }),
              item: new Item({
                ...i.item, // copies all properties

              })
            }))
          })),
          id: t.id
        })), newTemplate];
        saveAreaTemplates(companyId, areaId, updatedTemplates).then(() => {
          templateDialogRef.current?.close();

          console.log("Template updated successfully");
          setTemplates(updatedTemplates);
          setTemplateDialogOpen(false);

          window.location.href = `/LayItOut/Layout/?companyId=${companyId}&areaId=${areaId}&type=edit-template&templateId=${newTemplate.id}`;
        });
      }}

        templates={templates} selectTemplate={(temp) => {
          setLoading(true);

          setTimeout(async () => {
            //open url in new tab

            const screenshotSections = temp.sections.map((s) => new Section({
              name: s.name,
              cellId: new CellId({ x: temp.sections.find((se) => se.name == s.name)!.cellId.x, y: temp.sections.find((se) => se.name == s.name)!.cellId.y }),
              cellsLong: s.cellsLong,
              cellsTall: s.cellsTall,
              modifierItems: s.modifierItems,
              startingItems: s.startingItems.map((i) => new StaringItem({
                cell: new CellId({ x: i.cell.x, y: i.cell.y }),
                item: new Item({
                  ...i.item, // copies all properties
                  starterItem: true,
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
                  inventoryItems: temp.inventoryItems,
                  sections: temp.sections.map((s) => new Section({
                    name: s.name,
                    cellId: new CellId({ x: temp.sections.find((se) => se.name == s.name)!.cellId.x, y: temp.sections.find((se) => se.name == s.name)!.cellId.y }),
                    cellsLong: s.cellsLong,
                    cellsTall: s.cellsTall,
                    modifierItems: s.modifierItems,
                    startingItems: s.startingItems.map((i) => new StaringItem({
                      cell: new CellId({ x: i.cell.x, y: i.cell.y }),
                      item: new Item({
                        ...i.item, // copies all properties
                        starterItem: true,
                      })
                    }))
                  })),
                  id: designId
                });
                console.log("UPDATED DESIGN", updatedDesign);
                updateAreaDesign(companyId, areaId, updatedDesign).then(() => {
                  console.log("Design updated successfully");
                  setCanSave(false);
                  setLoading(false);
                  window.location.reload();


                });
              }
            })
            // open the url in the background






          }, 500)

        }} />
      < LayoutDialog dialogRef={layoutDialogRef} closeDialog={() => {
        layoutDialogRef.current?.close();
        setLayoutDialogOpen(false);
      }} areaPreview={areaPreview || ""} />

      <AddCustomItemDialog canBeBooth={isCreatingBoothMap} dialogRef={addCustomItemDialogRef} addInventoryItem={addInventoryItem} closeDialog={() => {
        addCustomItemDialogRef.current?.close();

      }} />

      <AddSectionDialog dialogRef={addSectionDialogRef} closeDialog={() => {
        addSectionDialogRef.current?.close();
      }} addSection={addInventoryItem} />

      <AddInventoryItemDialog dialogRef={addInventoryItemDialogRef} closeDialog={() => {
        addInventoryItemDialogRef.current?.close();
      }} addInventoryItem={addInventoryItem} />

      <PlacingItem placeMultiItem={placeHighlightedCells} addHighlightedCell={addHighlightedCell} item={placingItem} setSelectingItem={() => {
        setPlacingItem(null);
      }} canPlaceItem={canPlaceItem} placeItem={placeItem} highlightCells={highlightCells} unHighlightCells={unHighlightCells} cellSize={cellSize} />

      <AddVendorDialog dialogRef={addVendorDialogRef} closeDialog={() => {
        addVendorDialogRef.current?.close();
      }} addVendor={async (newVendor) => {
        const newBoothMap = new BoothMap({
          ...boothMap!,
          vendors: [...(boothMap!.vendors), newVendor]
        });
        setBoothMap(newBoothMap);
        await saveAreaBoothMap(companyId, newBoothMap);



      }} />

      <EditVendorDialog oldVendor={editVendor} dialogRef={editVendorDialogRef} closeDialog={() => {
        editVendorDialogRef.current?.close();
      }} editVendor={async (newVendor) => {
        const newBoothMap = new BoothMap({
          ...boothMap!,
          vendors: boothMap!.vendors.map((v) => {
            if (v.id === newVendor.id) {
              return newVendor;
            }
            return v;
          })
        });
        setBoothMap(newBoothMap);
        await saveAreaBoothMap(companyId, newBoothMap);



      }} />

      <AddVendorToBoothDialog dialogRef={addVendorToBoothDialogRef} vendors={boothMap?.vendors.filter((v) => !vendorHasBooth(v, boothMap)) ?? []} closeDialog={() => {
        addVendorToBoothDialogRef.current?.close();
      }} addVendorToBooth={async (vendor) => {
        setLoading(true);
        const updatedSections = sections.map((s) => {
          if (s.name === mobileViewingSection) {
            return new Section({
              ...s,
              booths: s.booths.map((i) => {
                if (i.id === selectedBooth!.id) {
                  return new Booth({
                    ...i,
                    user: vendor,
                    initialElement: i.initialElement ?? undefined
                  });
                }
                return i;
              })
            });
          } else if (s.booths.some((i) => i.id === selectedBooth!.id)) {
            return new Section({
              ...s,
              booths: s.booths.map((i) => {
                if (i.id === selectedBooth!.id) {
                  return new Booth({
                    ...i,
                    user: vendor,
                    initialElement: i.initialElement ?? undefined
                  });
                }
                return i;
              })
            });
          } else {
            return s;
          }
        });
        console.log("Updated sections", updatedSections);
        setSections(updatedSections);
        const updatedBoothMap = new BoothMap({
          ...boothMap!,
          sections: updatedSections
        });
        await saveAreaBoothMap(companyId, updatedBoothMap);
        window.location.reload();
        setLoading(false);
      }} />

      {takingPhoto && <iframe id="screenshot-iframe" title="Screenshot Iframe" src={window.location.origin + '/LayItOut/Preview/'} width={totalWidth * cellSize + 20} height={totalHeight * cellSize + 20}></iframe>}
    </>
  )
}

export default Layout
