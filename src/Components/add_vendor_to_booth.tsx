import { useState, type RefObject } from 'react';
import './add_vendor_to_booth.css';
import { Area, Booth, BoothMap, Template, Vendor } from '../constants';


type AddVendorToBoothDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;
    addVendorToBooth: (vendor: Vendor) => Promise<void>;
    vendors: Vendor[];


};

function AddVendorToBoothDialog({ dialogRef, closeDialog, vendors, addVendorToBooth }: AddVendorToBoothDialogProps) {

    const [loading, setLoading] = useState<boolean>(false);
    const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);




    return (
        <dialog ref={dialogRef} className="add-vendor-dialog">
            <div className="add-vendor-dialog-div" >
                <h2>Select Vendor</h2>

                <div className="add-vendor-row">
                    <label htmlFor="boothMap-area">Vendor:</label>
                    <select id="boothMap-area" name="boothMap-area" onChange={(e) => {
                        const vendorId = e.target.value;
                        const area = vendors.find(a => a.id === vendorId) || null;
                        setSelectedVendor(area);
                    }} value={selectedVendor?.id || ""}>
                        <option value="">Select a Vendor</option>
                        {vendors.map((vendor) => (
                            <option key={vendor.id} value={vendor.id}>{vendor.businessName}</option>
                        ))}
                    </select>
                </div>

                <button className='action-btn' onClick={() => {
                    if (!selectedVendor) {
                        alert("Please select a vendor");
                        return;
                    }

                    setLoading(true);
                    addVendorToBooth(selectedVendor)

                }}>Select</button>
                <br />

                <br />
                <button className='action-btn' onClick={() => {
                    closeDialog();

                    setSelectedVendor(null);

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

export default AddVendorToBoothDialog;