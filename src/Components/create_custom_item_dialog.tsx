import { useRef, useState, type RefObject } from 'react';
import './create_custom_item_dialog.css';
import { CustomItem, } from '../constants';
import { uploadCustomItem } from '../api/storage';


type CustomItemDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;
    createCustomItem: (item: CustomItem) => void;

};

function CreateCustomItemDialog({ dialogRef, closeDialog, createCustomItem }: CustomItemDialogProps) {
    const [selectedItem, setSelectedItem] = useState<CustomItem | null>(null);
    const [itemName, setItemName] = useState<string>('');

    const [itemWidth, setItemWidth] = useState<number>(1);
    const [itemHeight, setItemHeight] = useState<number>(1);
    const [isMoveable, setIsMoveable] = useState<boolean>(true);

    const fileInputRef = useRef<HTMLInputElement>(null);





    return (
        <dialog ref={dialogRef} className="custom-item-dialog">
            <div className="custom-item-dialog-div" >
                <h2>Create Custom Item</h2>
                <div className="custom-item-row">
                    <label htmlFor="item-name">Name:</label>
                    <input type="text" id="item-name" name="item-name" onChange={(e) => setItemName(e.target.value ?? "")} value={itemName} />

                </div>
                <div className="custom-item-row">
                    <label htmlFor="item-icon">Icon:</label>
                    <input type="file" id="item-icon" name="item-icon" ref={fileInputRef} accept='.png,.jpeg,.svg,.webp,.jpg' />

                </div>

                <div className="custom-item-row custom-item-size">
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
                <br />
                <button className='action-btn' onClick={async () => {
                    if (itemName.trim() === "" && selectedItem == null) {
                        alert("Item name cannot be empty");
                        return;
                    }

                    if (fileInputRef.current?.files == null || fileInputRef.current.files.length === 0) {
                        alert("Please select an icon file for the item");
                        return;
                    }
                    const iconUrl = await uploadCustomItem(fileInputRef.current.files[0], itemName);
                    let newItem = selectedItem;
                    if (newItem == null) {
                        newItem = new CustomItem({

                            id: itemName + (Math.random() * 10000).toString(),
                            name: itemName,
                            icon: iconUrl,
                            cellsLong: Math.ceil(itemWidth),
                            cellsTall: Math.ceil(itemHeight),
                            moveable: isMoveable,



                        });
                    }

                    createCustomItem(newItem);

                    // Reset state
                    setIsMoveable(true);
                    setSelectedItem(null);
                    setItemName('');

                    setItemWidth(1);
                    setItemHeight(1);

                    // Reset file input
                    if (fileInputRef.current) {
                        fileInputRef.current.value = '';
                    }

                    closeDialog();
                }
                }>Add Item</button>

                <button className='action-btn' onClick={closeDialog}>Close</button>


            </div>

        </dialog >

    );
}

export default CreateCustomItemDialog;