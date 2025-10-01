import { useEffect, useState, type RefObject } from 'react';
import './edit_vendor_dialog.css';
import { Vendor } from '../constants';


type EditVendorDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;
    editVendor: (vendor: Vendor) => Promise<void>;
    oldVendor: Vendor | null;


};

function EditVendorDialog({ dialogRef, closeDialog, editVendor, oldVendor }: EditVendorDialogProps) {
    const [businessName, setBusinessName] = useState<string>('');

    const [itemWidth, setItemWidth] = useState<number>(1);
    const [itemHeight, setItemHeight] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!oldVendor) return;
        setBusinessName(oldVendor.businessName);
        setItemWidth(oldVendor.plotWidth);
        setItemHeight(oldVendor.plotHeight);
    }, [oldVendor]);





    return (
        <dialog ref={dialogRef} className="edit-vendor-dialog">
            <div className="edit-vendor-dialog-div" >
                <h2>Edit Vendor</h2>
                <div className="edit-vendor-row">
                    <label htmlFor="business-name">Business Name:</label>
                    <input type="text" id="business-name" name="business-name" onChange={(e) => setBusinessName(e.target.value ?? "")} value={businessName} />

                </div>

                <div className="edit-vendor-row edit-vendor-size">
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
                        id: oldVendor.id,
                        businessName: businessName,

                        plotWidth: Math.ceil(itemWidth),
                        plotHeight: Math.ceil(itemHeight),

                    });
                    setLoading(true);
                    await editVendor(newVendor);
                    setBusinessName("");
                    setItemWidth(1);
                    setItemHeight(1);
                    setLoading(false);


                    closeDialog();
                }}>Save Vendor</button>
                <br />
                <br />
                <button className='action-btn' onClick={() => {
                    closeDialog();

                    setBusinessName(oldVendor!.businessName);
                    setItemWidth(oldVendor!.plotWidth);
                    setItemHeight(oldVendor!.plotHeight);

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

export default EditVendorDialog;