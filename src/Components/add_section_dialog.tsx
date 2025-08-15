import { useEffect, useState, type RefObject } from 'react';
import './add_section_dialog.css';
import { Item, InventoryItem } from '../constants';


type SectionDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;
    addSection: (section: InventoryItem) => void;

};

function AddSectionDialog({ dialogRef, closeDialog, addSection }: SectionDialogProps) {
    const [sectionName, setSectionName] = useState<string>('');

    const [sectionWidth, setSectionWidth] = useState<number>(1);
    const [sectionHeight, setSectionHeight] = useState<number>(1);


    return (
        <dialog ref={dialogRef} className="section-dialog">
            <div className="section-dialog-div" >
                <h2>Add Section</h2>
                <div className="section-row">
                    <label htmlFor="section-name">Name:</label>
                    <input type="text" id="section-name" name="section-name" onChange={(e) => setSectionName(e.target.value ?? "")} value={sectionName} />

                </div>

                <div className="section-row section-size">
                    <label htmlFor="section-width">Size (in feet):</label>
                    <input type="number" id="section-width" name="section-width" min="1" value={sectionWidth} onChange={(e) => setSectionWidth(parseFloat(e.target.value) ?? 1)} />
                    <span> x </span>
                    <input type="number" id="section-height" name="section-height" min="1" value={sectionHeight} onChange={(e) => setSectionHeight(parseFloat(e.target.value) ?? 1)} />
                </div>


                <br />
                <button className='action-btn' onClick={() => {
                    if (sectionName.trim() === "") {
                        alert("Section name cannot be empty");
                        return;
                    }
                    const newSection = new InventoryItem({
                        quantity: 1, item: new Item({
                            id: sectionName + (Math.random() * 10000).toString(),
                            name: sectionName,
                            icon: `custom-${sectionName}`,
                            cellsLong: Math.ceil(sectionWidth),
                            cellsTall: Math.ceil(sectionHeight),
                            moveable: true,
                            starterItem: false,
                            displayItem: true,
                            isSectionItem: true
                        })
                    });

                    addSection(newSection);
                    setSectionName('');

                    setSectionWidth(1);
                    setSectionHeight(1);

                    closeDialog();
                }}>Add Section</button>
                <br />
                <br />
                <button className='action-btn' onClick={closeDialog}>Close</button>


            </div>

        </dialog >

    );
}

export default AddSectionDialog;