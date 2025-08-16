import type { Area } from "../constants";
import "./area_tile.css";

import Trash from "../assets/trash.png";

function AreaTile({ area, onClick, deleteArea }: { area: Area; onClick: (areaId: string) => void, deleteArea: (areaId: string) => void }) {

    return (
        <div className="area-tile" onClick={() => onClick(area.id)}>
            <div className="area-tile-content">
                <div className="area-preview-container">
                    <img src={area.previewImage} alt="" className="area-preview-img" />
                </div>
                <div className="area-info">
                    <h3>{area.name}</h3>
                    <div className="area-actions">

                        <img src={Trash} alt="" className="area-trash" onClick={async (e) => {
                            e.stopPropagation(); // Prevent the tile click event
                            if (window.confirm("By clicking OK, you will delete this area and all of the designs using this area. Are you sure?")) {

                                deleteArea(area.id);

                            }
                        }} />

                    </div>
                </div>


            </div>
        </div>
    );
}
export default AreaTile;