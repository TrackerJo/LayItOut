import { useEffect, useState, type RefObject } from 'react';
import './add_inventory_item_dialog.css';
import { Item, InventoryItem, premadeItems } from '../constants';


type InventoryItemDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;
    addInventoryItem: (item: InventoryItem) => void;

};

function AddInventoryItemDialog({ dialogRef, closeDialog, addInventoryItem }: InventoryItemDialogProps) {
    const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
    const [itemName, setItemName] = useState<string>('');
    const [itemCount, setItemCount] = useState<number>(1);
    const [itemWidth, setItemWidth] = useState<number>(1);
    const [itemHeight, setItemHeight] = useState<number>(1);
    const [isMoveable, setIsMoveable] = useState<boolean>(true);




    return (
        <dialog ref={dialogRef} className="inventory-item-dialog">
            <div className="inventory-item-dialog-div" >
                <h2>Add Inventory Item</h2>
                {selectedItem == null ? <>  <label htmlFor="">Premade Items:</label>
                    <div className='inventory-item-list'>
                        {premadeItems.map((item) => <div key={item.name} className='inventory-item' onClick={() => {
                            const newItem = new InventoryItem({
                                quantity: 1, item: new Item({
                                    id: item.name + (Math.random() * 10000).toString(),
                                    name: item.name,
                                    icon: item.icon,
                                    cellsLong: item.cellsLong,
                                    cellsTall: item.cellsTall,
                                    moveable: true,
                                    starterItem: false,
                                    displayItem: true
                                })
                            });
                            setSelectedItem(newItem);


                        }}
                        ><div className='inventory-item-display'>

                                <img src={item.icon} alt="icon" />
                                <p>{item.name}</p>
                                <p className="quantity">{item.cellsLong}ft x {item.cellsTall}ft</p>

                            </div></div>)}

                    </div>

                    <label htmlFor="">Or:</label>

                    <label htmlFor="">Custom Item:</label>
                    <div className="inventory-item-row">
                        <label htmlFor="item-name">Name:</label>
                        <input type="text" id="item-name" name="item-name" onChange={(e) => setItemName(e.target.value ?? "")} value={itemName} />

                    </div>
                    <div className="inventory-item-row">
                        <label htmlFor="item-icon">Count:</label>
                        <input type="number" id="item-count" name="item-count" min="1" value={itemCount} onChange={(e) => setItemCount(parseInt(e.target.value) ?? 1)} />
                    </div>
                    <div className="inventory-item-row inventory-item-size">
                        <label htmlFor="item-width">Size (in feet):</label>
                        <input type="number" id="item-width" name="item-width" min="1" value={itemWidth} onChange={(e) => setItemWidth(parseFloat(e.target.value) ?? 1)} />
                        <span> x </span>
                        <input type="number" id="item-height" name="item-height" min="1" value={itemHeight} onChange={(e) => setItemHeight(parseFloat(e.target.value) ?? 1)} />
                    </div>
                    <div>
                        <label htmlFor="item-moveable">Moveable:</label>
                        <input type="checkbox" id="item-moveable" name="item-moveable" checked={isMoveable} onChange={(e) => setIsMoveable(e.target.checked)} />
                    </div>
                    <br />
                </> :
                    <>
                        <label htmlFor="">Item: {selectedItem.item.name}</label>
                        <div className="inventory-item-row">
                            <label htmlFor="item-icon">Count:</label>
                            <input type="number" id="item-count" name="item-count" min="1" value={itemCount} onChange={(e) => setItemCount(parseInt(e.target.value) ?? 1)} />
                        </div>
                        <div>
                            <label htmlFor="item-moveable">Moveable:</label>
                            <input type="checkbox" id="item-moveable" name="item-moveable" checked={isMoveable} onChange={(e) => setIsMoveable(e.target.checked)} />
                        </div>

                    </>
                }
                <br />
                <br />
                <button className='action-btn' onClick={() => {
                    if (itemName.trim() === "" && selectedItem == null) {
                        alert("Item name cannot be empty");
                        return;
                    }
                    if (itemCount <= 0) {
                        alert("Item count must be greater than zero");
                        return;
                    }
                    let newItem = selectedItem;
                    if (newItem == null) {
                        newItem = new InventoryItem({
                            quantity: itemCount, item: new Item({
                                id: itemName + (Math.random() * 10000).toString(),
                                name: itemName,
                                icon: `inventory-${itemName}`,
                                cellsLong: Math.ceil(itemWidth),
                                cellsTall: Math.ceil(itemHeight),
                                moveable: isMoveable,
                                starterItem: false,
                                displayItem: true,

                            })
                        });
                    } else {
                        newItem.quantity = itemCount;
                        newItem.item.moveable = isMoveable;
                    }

                    addInventoryItem(newItem);
                    setIsMoveable(true);
                    setSelectedItem(null);
                    setItemName('');
                    setItemCount(1);
                    setItemWidth(1);
                    setItemHeight(1);

                    closeDialog();
                }}>Add Item</button>

                <button className='action-btn' onClick={closeDialog}>Close</button>


            </div>

        </dialog >

    );
}

export default AddInventoryItemDialog;