import { useEffect, useState, type RefObject } from 'react';
import './create_area_dialog.css';
import { Area } from '../constants';


type CreateAreaDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;
    createArea: (area: Area) => Promise<void>;

};

function CreateAreaDialog({ dialogRef, closeDialog, createArea }: CreateAreaDialogProps) {
    const [areaName, setAreaName] = useState<string>('');
    const [areaWidth, setAreaWidth] = useState<number>(10);
    const [areaHeight, setAreaHeight] = useState<number>(10);
    const [loading, setLoading] = useState<boolean>(false);


    return (
        <dialog ref={dialogRef} className="create-area-dialog">
            <div className="create-area-dialog-div" >
                <h2>Create Area</h2>
                <div className="create-area-row">
                    <label htmlFor="area-name">Name:</label>
                    <input type="text" id="area-name" name="area-name" onChange={(e) => setAreaName(e.target.value ?? "")} value={areaName} />

                </div>

                <div className="create-area-row create-area-size">
                    <label htmlFor="area-width">Size (in feet):</label>
                    <input type="number" id="area-width" name="area-width" min="1" value={areaWidth} onChange={(e) => setAreaWidth(parseFloat(e.target.value) ?? 1)} />
                    <span> x </span>
                    <input type="number" id="area-height" name="area-height" min="1" value={areaHeight} onChange={(e) => setAreaHeight(parseFloat(e.target.value) ?? 1)} />
                </div>


                <br />
                <button className='action-btn' onClick={async () => {
                    if (areaName.trim() === "") {
                        alert("Area name cannot be empty");
                        return;
                    }
                    if (areaWidth <= 0 || areaHeight <= 0) {
                        alert("Area dimensions must be greater than zero");
                        return;
                    }
                    setLoading(true);
                    const newArea = new Area({
                        name: areaName,
                        width: areaWidth,
                        height: areaHeight,
                        id: areaName.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now(),
                        previewImage: "",
                        sections: [],
                        templates: [],
                        inventoryItems: []
                    });



                    await createArea(newArea);
                    setLoading(false);

                    setAreaName('');

                    setAreaWidth(1);
                    setAreaHeight(1);

                }}>Add Area</button>
                <br />
                <br />
                <button className='action-btn' onClick={() => {
                    setAreaName('');

                    setAreaWidth(10);
                    setAreaHeight(10);

                    closeDialog();
                }}>Close</button>


            </div>
            {loading && (
                <>

                    <div className="loader"></div>
                </>
            )}

        </dialog >

    );
}

export default CreateAreaDialog;