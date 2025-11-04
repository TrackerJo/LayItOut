import type { BoothMap } from "../constants";
import "./boothmap_tile.css";

import Trash from "../assets/trash.png";
import Preview from "../assets/preview.png";

function BoothMapTile({ boothMap, areaName, onClick, deleteBoothMap }: { boothMap: BoothMap; onClick: (boothMapId: string) => void, deleteBoothMap: (boothMapId: string) => void, areaName: string }) {

    return (
        <div className="boothMap-tile" onClick={() => onClick(boothMap.id)}>
            {/* <div className="boothMap-tile-content"> */}
            <div className="boothMap-preview-container">
                <img src={boothMap.previewImage} alt="" className="boothMap-preview-img" />
            </div>
            <div className="boothMap-info">

                <h3>{boothMap.name}</h3>
                <p className="boothMap-area-name">Area: {areaName}</p>
                <div className="boothMap-actions">
                    <img src={Preview} alt="" className="boothMap-preview" onClick={async (e) => {
                        e.stopPropagation(); // Prevent the tile click event
                        const companyId = localStorage.getItem("companyId");
                        const shareUrl = window.location.origin + `/Layout/?companyId=${companyId}&areaId=${boothMap.areaId}&type=public-preview-boothMap&boothMapId=${boothMap.id}&designName=${boothMap.name}`;
                        await navigator.clipboard.writeText(shareUrl);
                        alert("Preview link copied to clipboard!");
                    }} />


                    <img src={Trash} alt="" className="boothMap-trash" onClick={async (e) => {
                        e.stopPropagation(); // Prevent the tile click event
                        if (window.confirm("By clicking OK, you will delete this BoothMap. Are you sure?")) {

                            deleteBoothMap(boothMap.id);

                        }
                    }} />

                </div>
            </div>



            {/* </div> */}
        </div>
    );
}
export default BoothMapTile;