import type { Area } from "../constants";
import "./area_tile.css";

function AreaTile({ area, onClick }: { area: Area; onClick: (areaId: string) => void }) {

    return (
        <div className="area-tile" onClick={() => onClick(area.id)}>
            <div className="area-tile-content">
                <img src={area.previewImage} alt="" className="area-preview-img" />

                <h3>{area.name}</h3>

            </div>
        </div>
    );
}
export default AreaTile;