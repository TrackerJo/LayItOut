

import { BoothMap, Vendor } from "../constants"

import "./vendors_tile.css"
import PlusCircle from "../assets/plus.circle.png"
import VendorDisplayTile from "./vendor_display_tile";


type VendorsTileProps = {
    vendors: Vendor[],
    maxHeight?: number,
    onAddVendor: () => void;
    onDeleteVendor: (vendorId: string) => void;
    onEditVendor: (vendor: Vendor) => void;

    boothMap: BoothMap;

}

function VendorsTile({ maxHeight, vendors, onAddVendor, boothMap, onDeleteVendor, onEditVendor }: VendorsTileProps) {
    return (<div className="vendors-tile" style={{ maxHeight: maxHeight ? `${maxHeight}px` : '200px' }}>
        <h2>Vendors</h2>
        <div className="vendors-divider"></div>


        <div className="vendors-tile-content">
            {vendors.map((vendor) => (
                <VendorDisplayTile
                    key={vendor.id}
                    vendor={vendor}
                    boothMap={boothMap}
                    onDelete={(vendorId) => {
                        onDeleteVendor(vendorId);

                    }}
                    onEdit={(vendorId) => {
                        onEditVendor(vendor);
                    }}
                />
            ))}
            <div className="add-vendor" onClick={onAddVendor}>
                <img src={PlusCircle} alt="Add vendor" />
            </div>
        </div>
    </div >)
}

export default VendorsTile