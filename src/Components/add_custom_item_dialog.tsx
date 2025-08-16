import { useEffect, useState, type RefObject } from 'react';
import './add_custom_item_dialog.css';
import { Item, InventoryItem } from '../constants';


type CustomItemDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;
    addInventoryItem: (item: InventoryItem) => void;
    canBeBooth: boolean;

};

function AddCustomItemDialog({ dialogRef, closeDialog, addInventoryItem, canBeBooth }: CustomItemDialogProps) {
    const [itemName, setItemName] = useState<string>('');
    const [itemCount, setItemCount] = useState<number>(1);
    const [itemWidth, setItemWidth] = useState<number>(1);
    const [itemHeight, setItemHeight] = useState<number>(1);
    const [isBooth, setIsBooth] = useState<boolean>(false);


    return (
        <dialog ref={dialogRef} className="custom-item-dialog">
            <div className="custom-item-dialog-div" >
                <h2>Add Custom Item</h2>
                <div className="custom-item-row">
                    <label htmlFor="item-name">Name:</label>
                    <input type="text" id="item-name" name="item-name" onChange={(e) => setItemName(e.target.value ?? "")} value={itemName} />

                </div>
                <div className="custom-item-row">
                    <label htmlFor="item-icon">Count:</label>
                    <input type="number" id="item-count" name="item-count" min="1" value={itemCount} onChange={(e) => setItemCount(parseInt(e.target.value) ?? 1)} />
                </div>
                <div className="custom-item-row custom-item-size">
                    <label htmlFor="item-width">Size (in feet):</label>
                    <input type="number" id="item-width" name="item-width" min="1" value={itemWidth} onChange={(e) => setItemWidth(parseFloat(e.target.value) ?? 1)} />
                    <span> x </span>
                    <input type="number" id="item-height" name="item-height" min="1" value={itemHeight} onChange={(e) => setItemHeight(parseFloat(e.target.value) ?? 1)} />
                </div>
                {canBeBooth ? <div className="custom-item-row">
                    <label htmlFor="is-booth">Is Booth:</label>
                    <input type="checkbox" id="is-booth" name="is-booth" checked={isBooth} onChange={(e) => setIsBooth(e.target.checked)} />
                </div> : null}


                <br />
                <button className='action-btn' onClick={() => {
                    if (itemName.trim() === "") {
                        alert("Item name cannot be empty");
                        return;
                    }
                    const newItem = new InventoryItem({
                        quantity: itemCount, item: new Item({
                            id: itemName + (Math.random() * 10000).toString(),
                            name: itemName,
                            icon: `custom-${itemName}`,
                            cellsLong: Math.ceil(itemWidth),
                            cellsTall: Math.ceil(itemHeight),
                            moveable: true,
                            starterItem: false,
                            displayItem: true,
                            isBooth: isBooth
                        })
                    });

                    addInventoryItem(newItem);
                    setItemName('');
                    setItemCount(1);
                    setItemWidth(1);
                    setItemHeight(1);
                    setIsBooth(false);

                    closeDialog();
                }}>Add Item</button>
                <br />
                <br />
                <button className='action-btn' onClick={() => {
                    closeDialog();

                    setItemName('');
                    setItemCount(1);
                    setItemWidth(1);
                    setItemHeight(1);
                    setIsBooth(false);
                }}>Close</button>


            </div>

        </dialog >

    );
}

export default AddCustomItemDialog;