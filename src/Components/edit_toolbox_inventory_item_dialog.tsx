import { useEffect, useState, type RefObject } from 'react';
import './add_inventory_item_dialog.css';
import { InventoryItem } from '../constants';



type EditToolboxInventoryItemDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;
    editInventoryItem: (item: InventoryItem) => void;
    deleteInventoryItem: (item: InventoryItem) => void;
    selectedItem: InventoryItem | null;

};

function EditToolboxInventoryItemDialog({ dialogRef, closeDialog, editInventoryItem, selectedItem, deleteInventoryItem }: EditToolboxInventoryItemDialogProps) {


    const [itemCount, setItemCount] = useState<number>(1);

    const [isMoveable, setIsMoveable] = useState<boolean>(true);

    useEffect(() => {
        if (selectedItem) {
            setItemCount(selectedItem.quantity);
            setIsMoveable(selectedItem.item.moveable);
        }
    }, [selectedItem]);




    return (
        <dialog ref={dialogRef} className="inventory-item-dialog">
            <div className="inventory-item-dialog-div" >
                <h2>Edit Inventory Item</h2>

                <label htmlFor="">Item: {selectedItem?.item.name}</label>
                <div className="inventory-item-row">
                    <label htmlFor="item-icon">Count:</label>
                    <input type="number" id="item-count" name="item-count" min="1" value={itemCount} onChange={(e) => setItemCount(parseInt(e.target.value) ?? 1)} />
                </div>
                <div>
                    <label htmlFor="item-moveable">Moveable:</label>
                    <input type="checkbox" id="item-moveable" name="item-moveable" checked={isMoveable} onChange={(e) => setIsMoveable(e.target.checked)} />
                </div>


                <br />
                <br />
                <button className='action-btn' onClick={() => {

                    if (itemCount <= 0) {
                        alert("Item count must be greater than zero");
                        return;
                    }
                    if (selectedItem) {
                        const newItem = selectedItem;

                        newItem.quantity = itemCount;
                        newItem.item.moveable = isMoveable;


                        editInventoryItem(newItem);
                        setIsMoveable(true);


                        closeDialog();
                    }
                }}>Save</button>

                <button className='action-btn' onClick={() => {
                    deleteInventoryItem(selectedItem!);
                    closeDialog();
                }}>Delete</button>

                <button className='action-btn' onClick={() => {



                    closeDialog();
                }}>Close</button>


            </div>

        </dialog >

    );
}

export default EditToolboxInventoryItemDialog;