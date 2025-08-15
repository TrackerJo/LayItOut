

import { CellId, InventoryItem, Item } from "../constants"
import DisplayItem from "./display_item"
import "./toolbox.css"
import PlusCircle from "../assets/plus.circle.png"

type ToolboxProps = {
    inventoryItems: InventoryItem[]
    addDraggingItem: (item: Item) => void,
    showAddCustomItem: () => void,
    removeItem: (item: Item) => void,
    setSelectedItem: (item: Item | null) => void,
    tapAndPlaceMode: boolean,

    maxHeight?: number,
    isCreatingTemplate: boolean,
    isEditingTemplate: boolean,
    isViewingDesign: boolean,
    isModifyingSections: boolean
}

function Toolbox({ inventoryItems, addDraggingItem, maxHeight, removeItem, showAddCustomItem, isCreatingTemplate, isEditingTemplate, isViewingDesign, tapAndPlaceMode, setSelectedItem, isModifyingSections }: ToolboxProps) {
    return (<div className="toolbox" style={{ maxHeight: maxHeight ? `${maxHeight}px` : '200px' }}>
        {inventoryItems.map((item) => <DisplayItem setSelectedItem={setSelectedItem} tapAndPlaceMode={tapAndPlaceMode} inventoryItem={item} addDraggingItem={addDraggingItem} removeItem={removeItem} />)}
        {!(isCreatingTemplate || isEditingTemplate || isViewingDesign || isModifyingSections) && <div className="add-item" onClick={() => {
            showAddCustomItem();

        }}>
            <img src={PlusCircle} alt="Add Item" />

        </div>}
    </div>)
}

export default Toolbox