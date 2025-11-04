import type { Design } from "../constants";
import "./design_tile.css";
import Link from "../assets/link.png";
import Trash from "../assets/trash.png";
import Preview from "../assets/preview.png";

function DesignTile({ design, areaName, onClick, deleteDesign }: { design: Design; onClick: (designId: string) => void, deleteDesign: (designId: string) => void, areaName: string }) {

    return (
        <div className="design-tile" onClick={() => onClick(design.id)}>
            {/* <div className="design-tile-content"> */}
            <div className="design-preview-container">
                <img src={design.previewImage} alt="" className="design-preview-img" />
            </div>

            <div className="design-info">

                <h3>{design.name}</h3>
                <p className="design-area-name">Area: {areaName}</p>
                <div className="design-actions">
                    <img src={Link} alt="" className="design-link" onClick={async (e) => {
                        e.stopPropagation(); // Prevent the tile click event
                        const companyId = localStorage.getItem("companyId");
                        const shareUrl = window.location.origin + `/Layout/?companyId=${companyId}&areaId=${design.areaId}&type=client-edit-design&designId=${design.id}&designName=${design.name}`;
                        await navigator.clipboard.writeText(shareUrl);
                        alert("Design link copied to clipboard!");
                    }} />
                    <img src={Preview} alt="" className="design-preview" onClick={async (e) => {
                        e.stopPropagation(); // Prevent the tile click event
                        const companyId = localStorage.getItem("companyId");
                        const shareUrl = window.location.origin + `/Layout/?companyId=${companyId}&areaId=${design.areaId}&type=public-preview&designId=${design.id}&designName=${design.name}`;
                        await navigator.clipboard.writeText(shareUrl);
                        alert("Preview link copied to clipboard!");
                    }} />
                    <img src={Trash} alt="" className="design-trash" onClick={async (e) => {
                        e.stopPropagation(); // Prevent the tile click event
                        if (window.confirm("By clicking OK, you will delete this design. Are you sure?")) {

                            deleteDesign(design.id);

                        }
                    }} />

                </div>
            </div>



            {/* </div> */}
        </div>
    );
}
export default DesignTile;