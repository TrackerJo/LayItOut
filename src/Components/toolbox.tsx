

import { InventoryItem, Item } from "../constants"
import DisplayItem from "./display_item"
import "./toolbox.css"

type ToolboxProps = {
    inventoryItems: InventoryItem[]
    addItem: (item: Item) => void

}

function Toolbox({ inventoryItems, addItem, }: ToolboxProps) {
    return (<div className="toolbox">
        {inventoryItems.map((item) => <DisplayItem inventoryItem={item} addItem={addItem} />)}
    </div>)
}

export default Toolbox