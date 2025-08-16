import "./vendor_display_tile.css";
import Link from "../assets/link.png";
import Trash from "../assets/trash.png";
import Pencil from "../assets/pencil.png";
import { BoothMap, Vendor } from "../constants";

type VendorDisplayTileProps = {
    vendor: Vendor;
    onDelete: (vendorId: string) => void;
    onEdit: (vendorId: string) => void;
    boothMap: BoothMap;

}

function VendorDisplayTile({ vendor, onDelete, onEdit, boothMap }: VendorDisplayTileProps) {
    return (
        <div className="vendor-display-tile">
            <div className="vendor-info">
                <h3 className="vendor-business-name">{vendor.businessName}</h3>
                <p className="vendor-plot-size">{vendor.plotWidth}ft x {vendor.plotHeight}ft</p>
            </div>
            <div className="vendor-actions">
                <img src={Link} alt="Share" className="vendor-link" onClick={async (e) => {
                    e.stopPropagation(); // Prevent the tile click event
                    const companyId = localStorage.getItem("companyId");
                    const shareUrl = window.location.origin + `/LayItOut/Layout/?companyId=${companyId}&areaId=${boothMap.areaId}&type=pick-booth&boothMapId=${boothMap.id}&boothMapName=${boothMap.name}&vendorId=${vendor.id}`;
                    await navigator.clipboard.writeText(shareUrl);
                    alert("BoothMap link copied to clipboard!");
                }} />
                <img src={Pencil} alt="Edit" className="vendor-edit" onClick={(e) => {
                    e.stopPropagation(); // Prevent the tile click event
                    onEdit(vendor.id);
                }} />
                <img src={Trash} alt="Delete" className="vendor-delete" onClick={(e) => {
                    e.stopPropagation(); // Prevent the tile click event
                    if (window.confirm("Are you sure you want to delete this vendor?")) {
                        onDelete(vendor.id);
                    }
                }} />
            </div>
        </div>
    );
}

export default VendorDisplayTile;