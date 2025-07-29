import { useEffect, useState } from 'react'


import './App.css'
import Area from './Components/area'
import type { CellProps } from './Components/cell';
import DraggableItem from './Components/draggable_item';
import { CellId, InventoryItem, Item } from './constants';
import Toolbox from './Components/toolbox';
import ChairIcon from './assets/chair.png';
import RectangleTable from './assets/rectangle_table.png';


function App() {
  const width = 300;
  const height = 200;
  const [cells, setCells] = useState<CellProps[][]>([]);
  const [items, setItems] = useState<Item[]>([])
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [unselectingItemIds, setUnselectingItemIds] = useState<string[]>([]);
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([
    new InventoryItem({ quantity: 60, item: new Item({ id: "1", name: "Chair", cellsLong: 1, cellsTall: 1, icon: ChairIcon }) }), new InventoryItem({ quantity: 4, item: new Item({ id: "2", name: "Table", cellsLong: 4, cellsTall: 2, icon: RectangleTable }) })
  ]);





  function generateCells() {
    const newCells: CellProps[][] = [];
    [...Array((height / 25)).keys()].map((j) => {
      const rowCells: CellProps[] = [];
      [...Array((width / 25)).keys()].map((i) => rowCells.push({ id: new CellId({ x: i, y: j }), hasItem: false, itemId: "", mouseOver: false, canPlaceItem: false }))
      newCells.push(rowCells)
    })
    setCells([...newCells]);
  }

  function flattenCells(): CellProps[] {
    let flattenedCells: CellProps[] = [];
    cells.map((row) => flattenedCells = [...flattenedCells, ...row])
    return flattenedCells
  }

  useEffect(() => {
    generateCells()
  }, [])

  function canPlaceItem(startCell: CellId, item: Item): boolean {
    console.log(startCell)


    const rowLength = cells[startCell.y].length;
    const columnLength = cells.length;
    console.log(rowLength, columnLength)

    // Use rotated dimensions for boundary checking
    if (startCell.x + item.cellsLong > rowLength) {
      return false;
    }
    if (startCell.y + item.cellsTall > columnLength) {
      return false;
    }

    // Use rotated dimensions for collision checking
    for (let i = 0; i < item.cellsTall; i++) {
      for (let j = 0; j < item.cellsLong; j++) {
        if (cells[startCell.y + i][startCell.x + j].hasItem && cells[startCell.y + i][startCell.x + j].itemId != item.id) {
          console.log("Something is already here")
          return false;
        }
      }
    }

    return true;
  }


  function placeItem(startCell: CellId, item: Item, removeCell: CellId | null) {
    const newCells: CellProps[][] = Array.from(cells)

    if (removeCell != null) {
      console.log("Removing item")
      // Use rotated dimensions for removal
      for (let i = 0; i < item.cellsTall; i++) {
        for (let j = 0; j < item.cellsLong; j++) {
          newCells[removeCell.y + i][removeCell.x + j].hasItem = false;
          newCells[removeCell.y + i][removeCell.x + j].itemId = "";
        }
      }
    }

    // Use rotated dimensions for placement
    for (let i = 0; i < item.cellsTall; i++) {
      for (let j = 0; j < item.cellsLong; j++) {
        newCells[startCell.y + i][startCell.x + j].hasItem = true;
        newCells[startCell.y + i][startCell.x + j].itemId = item.id;
      }
    }

    console.log(newCells)
    setCells(newCells);

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
      if (old.find((i) => i.id == item.id) == undefined) {
        console.log("Item not found, adding new item")

      }
      console.log("Updating item", item.id)
      old.find((i) => i.id == item.id)!.hasMoved = true
      return old;
    })
  }

  function addItem(item: Item) {
    // items.push(item)
    // setItems(items)
    if (items.find((i) => i.name == item.name && !i.hasMoved)) {
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
    const newCells: CellProps[][] = Array.from(cells)
    console.log("HIGHLIGHTING CELLS", startCell, item)
    if (cells[startCell.y] == undefined) {
      unHighlightCells();
      return;
    }
    const canPlace = canPlaceItem(startCell, item);
    // Reset all cells to not hovered
    newCells.forEach(row => row.forEach(cell => cell.mouseOver = false));
    // Highlight the cells that the item would occupy
    for (let i = 0; i < item.cellsTall; i++) {
      for (let j = 0; j < item.cellsLong; j++) {
        if (startCell.y + i < newCells.length && startCell.x + j < newCells[startCell.y + i].length) {
          newCells[startCell.y + i][startCell.x + j].mouseOver = true;
          newCells[startCell.y + i][startCell.x + j].canPlaceItem = canPlace;
        }
      }
    }
    setCells(newCells);
  }

  function unHighlightCells() {
    const newCells: CellProps[][] = Array.from(cells)
    newCells.forEach(row => row.forEach(cell => {
      cell.mouseOver = false;
      cell.canPlaceItem = false;
    }));
    setCells(newCells);
  }

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
        <Area width={width} height={height} cells={flattenCells()} />
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

      {items.map((item) => {
        return <DraggableItem item={item} canPlaceItem={canPlaceItem} placeItem={placeItem} deleteItemRotate={deleteItemRotate} highlightCells={highlightCells} unHighlightCells={unHighlightCells} key={item.id} deleteItem={deleteItem} isSelected={selectedItemId === item.id}
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
