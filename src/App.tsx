import { useEffect, useState } from 'react'


import './App.css'
import Area from './Components/area'
import type { CellProps } from './Components/cell';
import DraggableItem from './Components/draggable_item';
import { CellId, InventoryItem, Item, Section, StaringItem } from './constants';
import Toolbox from './Components/toolbox';
import ChairIcon from './assets/chair.png';
import RectangleTable from './assets/rectangle_table.png';
import RectangleTableChairs from './assets/rectangle_table_chairs.png';
import SectionArea from './Components/section';
import ForwardIcon from './assets/forward.png';
import BackwardIcon from './assets/backward.png';



function App() {
  const [isMobile, setIsMobile] = useState<boolean>(/Mobi|Android/i.test(navigator.userAgent));
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [cells, setCells] = useState<CellProps[][]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [mobileHeight, setMobileHeight] = useState<number>(0);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [unselectingItemIds, setUnselectingItemIds] = useState<string[]>([]);
  const cellSize = /Mobi|Android/i.test(navigator.userAgent) ? 5 : 10;
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([
    new InventoryItem({ quantity: 60, item: new Item({ id: "1", name: "Chair", cellsLong: 2, cellsTall: 2, icon: ChairIcon }) }), new InventoryItem({ quantity: 4, item: new Item({ id: "2", name: "Table", cellsLong: 8, cellsTall: 4, icon: RectangleTable }) })
  ]);
  const [startingItems, setStartingItems] = useState<StaringItem[]>([


  ]);
  const [sections, setSections] = useState<Section[]>([new Section({
    cellId: new CellId({ x: 0, y: 0 }),
    cellsLong: 500 / cellSize,
    cellsTall: 300 / cellSize,
    startingItems: [new StaringItem({ cell: new CellId({ x: 0, y: 4 }), item: new Item({ id: "Start 2", name: "Kitchen", cellsLong: 8, cellsTall: 8, icon: "custom-Kitchen", starterItem: true, moveable: false }) })],
    name: "Main Area"
  }),
  new Section({
    cellId: new CellId({ x: 0, y: 300 / cellSize }),
    cellsLong: 500 / cellSize,
    cellsTall: 300 / cellSize,
    startingItems: [new StaringItem({ cell: new CellId({ x: 0, y: 4 }), item: new Item({ id: "Start 3", name: "Kitchen", cellsLong: 8, cellsTall: 8, icon: "custom-Kitchen", starterItem: true, moveable: false }) })],
    name: "Kitchen"
  }),
  new Section({
    cellId: new CellId({ x: 500 / cellSize, y: 300 / cellSize }),
    cellsLong: 300 / cellSize,
    cellsTall: 200 / cellSize,
    startingItems: [new StaringItem({ cell: new CellId({ x: 0, y: 4 }), item: new Item({ id: "Start 4", name: "Kitchen", cellsLong: 8, cellsTall: 8, icon: "custom-Kitchen", starterItem: true, moveable: false }) })],
    name: "Outdoor Area"
  }),
  new Section({
    cellId: new CellId({ x: 500 / cellSize, y: 0 }),
    cellsLong: 200 / cellSize,
    cellsTall: 300 / cellSize,
    startingItems: [],
    name: "Bathroom"
  })
  ]);

  const [mobileAreas, setMobileAreas] = useState<{ width: number, height: number, sectionName: string }[]>([]);
  const [mobileCells, setMobileCells] = useState<{ sectionName: string, cells: CellProps[][] }[]>([]);
  const [mobileViewingSection, setMobileViewingSection] = useState<string | null>(null);

  function getSectionByCellId(cellId: CellId): Section | null {
    for (const section of sections) {
      if (cellId.x >= section.cellId.x && cellId.x < section.cellId.x + section.cellsLong &&
        cellId.y >= section.cellId.y && cellId.y < section.cellId.y + section.cellsTall) {
        return section;
      }
    }
    return null;
  }


  function generateCells() {
    let currentWidth = width;
    let currentHeight = height;
    if (isMobile) {
      let mobileHeight = 0;
      const newMobileCells: { sectionName: string, cells: CellProps[][] }[] = [];
      const newSections: Section[] = [];
      for (const section of sections) {
        const newCells: CellProps[][] = [];



        const newArea = {
          width: section.cellsLong / 2 * cellSize,
          height: section.cellsTall / 2 * cellSize,
          sectionName: section.name
        };
        if (newArea.height > mobileHeight) {
          mobileHeight = newArea.height;
        }
        setMobileAreas((old) => [...old, newArea]);
        section.cellId.x = 0;
        section.cellId.y = 0;

        section.cellsLong = section.cellsLong / 2;
        section.cellsTall = section.cellsTall / 2;

        [...Array((newArea.height / cellSize)).keys()].map((j) => {
          const rowCells: CellProps[] = [];
          [...Array((newArea.width / cellSize)).keys()].map((i) => {

            rowCells.push({
              id: new CellId({ x: i, y: j }), hasItem: false, itemId: "", mouseOver: false, canPlaceItem: false, mouseOverLocation: "", inSection: true
            })
          })
          newCells.push(rowCells)
        })
        console.log("Generated cells for section", { sectionName: section.name, cells: [...newCells] })
        newMobileCells.push({ sectionName: section.name, cells: [...newCells] });
        newSections.push(section);
      }

      console.log("New mobile cells", newMobileCells)
      console.log("New sections", newSections)
      setMobileCells(newMobileCells);
      setSections(newSections);
      setMobileHeight(mobileHeight);

      setMobileViewingSection(newSections[0].name);

      setTimeout(() => {
        // handleChangeSection(newSections[0].name, newMobileCells, sections);
      }, 300)

    } else {
      const newCells: CellProps[][] = [];

      for (const section of sections) {
        console.log("Generating cells for section", section.name, "at", section.cellId, "with size", section.cellsLong, "x", section.cellsTall)

        console.log("Added section Length:", section.cellsLong * cellSize + section.cellId.x)
        if ((section.cellsLong + section.cellId.x) * cellSize > currentWidth) {
          currentWidth += section.cellsLong * cellSize;
        }
        if ((section.cellsTall + section.cellId.y) * cellSize > currentHeight) {
          currentHeight += section.cellsTall * cellSize;
        }
      }
      console.log("Current width:", currentWidth, "Current height:", currentHeight);

      setWidth(currentWidth);
      setHeight(currentHeight);


      [...Array((currentHeight / cellSize)).keys()].map((j) => {
        const rowCells: CellProps[] = [];
        [...Array((currentWidth / cellSize)).keys()].map((i) => {
          console.log(getSectionByCellId(new CellId({ x: i, y: j })) != null ? "In section" : "Outside section")
          rowCells.push({
            id: new CellId({ x: i, y: j }), hasItem: false, itemId: "", mouseOver: false, canPlaceItem: false, mouseOverLocation: "", inSection: getSectionByCellId(new CellId({ x: i, y: j })) != null
          })
        })
        newCells.push(rowCells)
      })
      setCells([...newCells]);

      setTimeout(() => {
        const newStartingItems: StaringItem[] = [...startingItems]
        const newSections: Section[] = [...sections];
        for (const section of newSections) {
          console.log("Adding section", section.name, section.cellId)

          section.cellElement = document.querySelector(`#${section.cellId.toId()}.cell:not(.cell-border)`) as HTMLElement;

          console.log("Section element found", section.cellElement)
          newStartingItems.push(...section.startingItems.map((item) => {
            return new StaringItem({
              cell: new CellId({ x: section.cellId.x + item.cell.x, y: section.cellId.y + item.cell.y }),
              item: new Item({
                id: item.item.id,
                name: item.item.name,
                cellsLong: item.item.cellsLong,
                cellsTall: item.item.cellsTall,
                icon: item.item.icon,
                initialElement: document.querySelector(`#${item.cell.toId()}.cell:not(.cell-border)`) as HTMLElement,
                starterItem: true,
                moveable: item.item.moveable
              })
            })
          }))

        }
        console.log("Setting sections", newSections)
        setSections([...newSections]);

        for (const startingItem of newStartingItems) {
          console.log("Placing starting item", startingItem.item.name, startingItem.cell)
          for (let i = 0; i < startingItem.item.cellsTall; i++) {
            for (let j = 0; j < startingItem.item.cellsLong; j++) {
              newCells[startingItem.cell.y + i][startingItem.cell.x + j].hasItem = true;
              newCells[startingItem.cell.y + i][startingItem.cell.x + j].itemId = startingItem.item.id;
            }
          }

          startingItem.item.initialElement = document.querySelector(`#${startingItem.cell.toId()}.cell:not(.cell-border)`) as HTMLElement;


          console.log("Adding item to items", startingItem.item.initialElement)
          setItems((old) => [...old, startingItem.item])
        }

        setCells([...newCells]);
      }, 100)

    }
    // setSections((old) => {
    //   return old.map((section) => {
    //     return new Section({
    //       name: section.name,
    //       cellId: new CellId({ x: section.cellId.x, y: section.cellId.y }),
    //       cellsLong: section.cellsLong,
    //       cellsTall: section.cellsTall,
    //       startingItems: section.startingItems
    //     })
    //   })
    // });



  }

  function handleChangeSection(mobileViewingSection: string, mobileCells: { sectionName: string, cells: CellProps[][] }[], sections: Section[]) {
    if (!isMobile || mobileViewingSection == null) return;
    const newSections: Section[] = [...sections];
    const newItems: Item[] = [];
    const newSection = sections.find((s) => s.name == mobileViewingSection)!;
    console.log("NEW SECTION", newSection)
    console.log("Adding section", newSection.name, newSection.cellId)
    console.log("MOBILE CELLS", mobileCells)
    newSection.cellElement = document.querySelector(`#${newSection.name.split(" ").join("-")} #${newSection.name.split(" ").join("")}${newSection.cellId.toId()}.cell:not(.cell-border)`) as HTMLElement;

    // newSection.cellsLong = newSection.cellsLong / 2;
    // newSection.cellsTall = newSection.cellsTall / 2;

    console.log("Section element found", newSection.cellElement)
    for (const startingItem of newSection.startingItems) {
      console.log("Placing starting item", startingItem.item.name, startingItem.cell)
      for (let i = 0; i < startingItem.item.cellsTall; i++) {
        for (let j = 0; j < startingItem.item.cellsLong; j++) {
          const mobileSection = mobileCells.find((m) => m.sectionName === newSection.name);
          mobileSection!.cells[startingItem.cell.y + i][startingItem.cell.x + j].hasItem = true;
          mobileSection!.cells[startingItem.cell.y + i][startingItem.cell.x + j].itemId = startingItem.item.id;
        }
      }

      startingItem.item.initialElement = document.querySelector(`#${newSection.name.split(" ").join("-")} #${newSection.name.split(" ").join("")}${startingItem.cell.toId()}.cell:not(.cell-border)`) as HTMLElement;


      console.log("Adding item to items", startingItem.item.initialElement)
      newItems.push(new Item({
        id: startingItem.item.id,
        name: startingItem.item.name,
        cellsLong: startingItem.item.cellsLong,
        cellsTall: startingItem.item.cellsTall,
        icon: startingItem.item.icon,
        initialElement: startingItem.item.initialElement,
        starterItem: true,
        moveable: startingItem.item.moveable
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
        moveable: item.moveable
      }))];
    }

    );
  }

  function flattenCells(cells: CellProps[][]): CellProps[] {
    let flattenedCells: CellProps[] = [];

    cells.map((row) => flattenedCells = [...flattenedCells, ...row])

    return flattenedCells
  }

  useEffect(() => {
    generateCells()
  }, [])



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
    const startingSection = getSectionByCellId(startCell);
    if (!startingSection && !isMobile) {
      console.log("Item is out of bounds of any section")
      return false;
    }
    // Use rotated dimensions for collision checking
    for (let i = 0; i < item.cellsTall; i++) {
      for (let j = 0; j < item.cellsLong; j++) {
        //Check section it is in
        if (!isMobile) {
          const section = getSectionByCellId(new CellId({ x: startCell.x + j, y: startCell.y + i }));
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
      const section = isMobile ? sections.find((m) => m.name === mobileViewingSection)! : getSectionByCellId(removeCell);
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
    const section = isMobile ? sections.find((m) => m.name === mobileViewingSection)! : getSectionByCellId(startCell);
    // Add item to section
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
    let itemRemoved = false;
    if (!item.hasMoved) {
      const index = inventoryItems.findIndex((i) => i.item.name == item.name && !i.item.hasMoved);
      if (index !== -1) {
        const newInventoryItems = [...inventoryItems];
        newInventoryItems[index].quantity -= 1;
        if (newInventoryItems[index].quantity <= 0) {
          itemRemoved = true;
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
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        if (isMobile && !itemRemoved) {

          const newItem = new Item({
            id: item.name + (Math.random() * 10000).toString(),
            cellsLong: item.cellsLong,
            cellsTall: item.cellsTall,
            initialElement: item.initialElement,
            name: item.name,
            icon: item.icon
          });
          old = [...old, newItem];
        }
        old.find((i) => i.id == item.id)!.hasMoved = true
      }
      return old;
    })
  }

  function addItem(item: Item) {
    // items.push(item)
    // setItems(items)
    if (items.find((i) => i.name == item.name && !i.hasMoved && !i.starterItem)) {
      return
    }
    setItems((old) => [...old, item])
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
    const rotation = item.roation || 0;
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
    const newCells: CellProps[][] = Array.from(cells)
    console.log("DELETING ITEM ROTATE", item.id, item.roation)

    // Helper function to get rotated dimensions
    const getRotatedDimensions = (rotation: number) => {
      const isRotated = rotation % 2 === 1; // 90° or 270°
      return {
        cellsWide: isRotated ? item.cellsTall : item.cellsLong,
        cellsTall: isRotated ? item.cellsLong : item.cellsTall
      };
    };

    // Get the current rotation from the item
    const rotation = item.roation || 0;
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

    // This function should only clear the grid cells, not remove the item
    // since it's used during rotation to clear the old position
  }
  function highlightCells(startCell: CellId, item: Item) {
    const funcCells = isMobile ? mobileCells.find((m) => m.sectionName === mobileViewingSection)!.cells : cells;

    const newCells: CellProps[][] = Array.from(funcCells)
    console.log("HIGHLIGHTING CELLS", startCell, item)
    console.log("Function Cells", funcCells)
    console.log("d", funcCells[startCell.y])
    if (funcCells[startCell.y] == undefined) {
      console.log("Start cell is out of bounds, unhighlighting cells d")
      unHighlightCells();
      return;
    }
    const canPlace = canPlaceItem(startCell, item);
    // Reset all cells to not hovered
    newCells.forEach(row => row.forEach(cell => { cell.mouseOver = false; cell.canPlaceItem = false; cell.mouseOverLocation = "" }));
    // Highlight the cells that the item would occupy
    console.log("Highlighting cells for item", item.name, "Cells Long", item.cellsLong, "Cells Tall", item.cellsTall)
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
  return (
    <>

      <div className="App">
        <h1 className='title'>LayItOut</h1>

        {isMobile ? <div className='mobile-areas' style={{ height: mobileHeight + "px" }}>
          <img src={ForwardIcon} onClick={() => {
            const index = sections.findIndex((s) => s.name == mobileViewingSection);
            if (index === -1) return;
            const nextIndex = (index - 1 + sections.length) % sections.length;
            setMobileViewingSection(sections[nextIndex].name);
            console.log("Changing viewing section to", sections[nextIndex].name)

          }} className='back-mobile-areas' />
          {mobileAreas.map((area, index) => (
            <Area width={area.width} height={area.height} cells={flattenCells(mobileCells.find((c) => c.sectionName == area.sectionName)!.cells)} key={index} id={area.sectionName} visibile={mobileViewingSection == null ? true : area.sectionName == mobileViewingSection} section={area.sectionName} />
          ))}
          <img src={ForwardIcon} onClick={() => {
            const index = sections.findIndex((s) => s.name == mobileViewingSection);
            if (index === -1) return;
            const nextIndex = (index + 1) % sections.length;
            setMobileViewingSection(sections[nextIndex].name);
            console.log("Changing viewing section to", sections[nextIndex].name)

          }} className='forward-mobile-areas' /></div>
          : <Area width={width} height={height} cells={flattenCells(cells)} />}
        <Toolbox addItem={addItem} inventoryItems={inventoryItems.map(inv =>
          new InventoryItem({
            item: new Item({
              id: inv.item.id,
              name: inv.item.name,
              cellsLong: inv.item.cellsLong,
              cellsTall: inv.item.cellsTall,
              icon: inv.item.icon
            })
            , quantity: inv.quantity
          })
        )} />

      </div>
      {sections.map((section) => <SectionArea section={section} key={section.cellId.toId()} visible={mobileViewingSection == null ? true : section.name == mobileViewingSection} />)}
      {items.map((item) => {
        return <DraggableItem visible={!isMobile ? true : !item.hasMoved && !item.starterItem ? true : mobileViewingSection == null ? false : item.starterItem ? sections.find((s) => s.name == mobileViewingSection)?.startingItems.some((i) => i.item.id === item.id) : sections.find((s) => s.name == mobileViewingSection)?.items.some((i) => i.id === item.id)}

          item={item} canPlaceItem={canPlaceItem} placeItem={placeItem} deleteItemRotate={deleteItemRotate} highlightCells={highlightCells} unHighlightCells={unHighlightCells} key={item.id} deleteItem={deleteItem} isSelected={selectedItemId === item.id}
          onSelect={(itemId) => {
            const item = items.find((i) => i.id === selectedItemId)!;
            console.log("Unselecting item", selectedItemId)
            setSelectedItemId(itemId)

            if (!item) return;
            setUnselectingItemIds((prev) => [...prev, item.id])
            console.log("Unselecting item", item.id)

            setTimeout(() => {
              setUnselectingItemIds((prev) => prev.filter((id) => id !== item.id))
            }, 300)

          }}
          isUnselecting={unselectingItemIds.includes(item.id)}
          onDeselect={() => {
            setSelectedItemId(null)
            setUnselectingItemIds((prev) => [...prev, item.id])
            console.log("Unselecting item", item.id)
            setTimeout(() => {
              setUnselectingItemIds((prev) => prev.filter((id) => id !== item.id))
            }, 300)

          }} />
      })}

    </>
  )
}

export default App
