

import { CellId, InventoryItem, Item } from "../constants"
import DisplayItem from "./display_item"
import "./toolbox.css"
import PlusCircle from "../assets/plus.circle.png"

type ToolboxProps = {
    inventoryItems: InventoryItem[]
    addDraggingItem: (item: Item) => void,
    showAddCustomItem: () => void,
    removeItem: (item: Item) => void,

    maxHeight?: number,
    isCreatingTemplate: boolean,
    isEditingTemplate: boolean
}

function Toolbox({ inventoryItems, addDraggingItem, maxHeight, removeItem, showAddCustomItem, isCreatingTemplate, isEditingTemplate }: ToolboxProps) {
    return (<div className="toolbox" style={{ maxHeight: maxHeight ? `${maxHeight}px` : '200px' }}>
        {inventoryItems.map((item) => <DisplayItem inventoryItem={item} addDraggingItem={addDraggingItem} removeItem={removeItem} />)}
        {!(isCreatingTemplate || isEditingTemplate) && <div className="add-item" onClick={() => {
            showAddCustomItem();

        }}>
            <img src={PlusCircle} alt="Add Item" />

        </div>}
    </div>)
}

export default Toolbox