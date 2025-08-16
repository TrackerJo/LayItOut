import { useState, type RefObject } from 'react';
import './add_vendor_dialog.css';
import { Vendor } from '../constants';


type AddVendorDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;
    addVendor: (vendor: Vendor) => Promise<void>;


};

function AddVendorDialog({ dialogRef, closeDialog, addVendor }: AddVendorDialogProps) {
    const [businessName, setBusinessName] = useState<string>('');

    const [itemWidth, setItemWidth] = useState<number>(1);
    const [itemHeight, setItemHeight] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);



    return (
        <dialog ref={dialogRef} className="add-vendor-dialog">
            <div className="add-vendor-dialog-div" >
                <h2>Add Vendor</h2>
                <div className="add-vendor-row">
                    <label htmlFor="business-name">Business Name:</label>
                    <input type="text" id="business-name" name="business-name" onChange={(e) => setBusinessName(e.target.value ?? "")} value={businessName} />

                </div>

                <div className="add-vendor-row add-vendor-size">
                    <label htmlFor="item-width">Booth Size (in feet):</label>
                    <input type="number" id="item-width" name="item-width" min="1" value={itemWidth} onChange={(e) => setItemWidth(parseFloat(e.target.value) ?? 1)} />
                    <span> x </span>
                    <input type="number" id="item-height" name="item-height" min="1" value={itemHeight} onChange={(e) => setItemHeight(parseFloat(e.target.value) ?? 1)} />
                </div>



                <br />
                <button className='action-btn' onClick={async () => {
                    if (businessName.trim() === "") {
                        alert("Business name cannot be empty");
                        return;
                    }

                    const newVendor = new Vendor({
                        id: businessName + (Math.random() * 10000).toString(),
                        businessName: businessName,

                        plotWidth: Math.ceil(itemWidth),
                        plotHeight: Math.ceil(itemHeight),

                    });
                    setLoading(true);
                    await addVendor(newVendor);
                    setBusinessName("");
                    setItemWidth(1);
                    setItemHeight(1);
                    setLoading(false);


                    closeDialog();
                }}>Add Vendor</button>
                <br />
                <br />
                <button className='action-btn' onClick={() => {
                    closeDialog();

                    setBusinessName("");

                    setItemWidth(1);
                    setItemHeight(1);

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

export default AddVendorDialog;