import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import PersonIcon from "./assets/person.png";
import PlusIcon from "./assets/plus.png";
import { useEffect, useRef, useState } from "react";
import type { Area, Design } from "./constants";
import { isLoggedIn } from "./api/auth";
import { createAreaDesign, deleteDesign, getAreaDesigns, getCompanyAreas } from "./api/firestore";
import AreaTile from "./Components/area_tile";
import CreateDesignDialog from "./Components/create_design_dialog";
import DesignTile from "./Components/design_tile";

createRoot(document.getElementById('root')!).render(

    <App />

)


function App() {
    const [selectedNav, setSelectedNav] = useState<string>("designs");
    const [designs, setDesigns] = useState<Design[]>([]);
    const [areas, setAreas] = useState<Area[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const createDesignRef = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        isLoggedIn(() => { })
        async function fetchContent() {
            const companyId = localStorage.getItem("companyId");
            const areasResponse = await getCompanyAreas(companyId!);
            const designsResponse: Design[] = [];
            const designsArrays = await Promise.all(
                areasResponse.map(area => getAreaDesigns(companyId!, area.id))
            );
            designsArrays.forEach(areaDesignsResponse => {
                designsResponse.push(...areaDesignsResponse);
            });
            setAreas([...areasResponse]);
            setDesigns([...designsResponse]);

            setLoading(false);

        }
        fetchContent();

    }, []);

    function getAreaName(areaId: string): string {
        const area = areas.find(a => a.id === areaId);
        return area ? area.name : "Unknown Area";
    }

    return (
        <>
            <div className="App">
                <h1 className="title">LayItOut</h1>
                {loading && (
                    <>
                        <div className="loader-backdrop"></div>
                        <div className="loader"></div>
                    </>
                )}

                <div className="dashboard">
                    <div className="sidebar">
                        <div className="account-div">
                            <img src={PersonIcon} alt="Account Icon" className="account-icon" />

                        </div>
                        <div className="nav-buttons">
                            <button className={`nav-button ${selectedNav == "designs" ? "selected" : ""}`} onClick={() => setSelectedNav("designs")}>Designs</button>
                            <button className={`nav-button ${selectedNav == "areas" ? "selected" : ""}`} onClick={() => setSelectedNav("areas")}>Areas</button>

                        </div>

                    </div>
                    <div className="content">
                        {selectedNav == "designs" && designs.length == 0 && <div className="no-designs"><h3>No Designs Yet</h3></div>}
                        {selectedNav == "areas" && areas.length == 0 && <div className="no-areas"><h3>No Areas Yet</h3></div>}
                        {selectedNav == "areas" &&

                            <div className="area-tiles">
                                {areas.map((area) => (
                                    <AreaTile key={area.id} area={area} onClick={() => {
                                        const companyId = localStorage.getItem("companyId");
                                        window.location.href = `/LayItOut/Layout/?companyId=${companyId}&areaId=${area.id}&type=view-area`;
                                    }} />
                                ))}
                            </div>

                        }
                        {selectedNav == "designs" &&

                            <div className="design-tiles">
                                {designs.map((design) => (
                                    <DesignTile key={design.id} areaName={areas.find((a) => a.id == design.areaId)?.name || ""} design={design} onClick={() => {
                                        const companyId = localStorage.getItem("companyId");
                                        window.location.href = `/LayItOut/Layout/?companyId=${companyId}&areaId=${design.areaId}&type=view-design&designId=${design.id}&designName=${design.name}`;
                                    }} deleteDesign={async () => {
                                        setDesigns(designs.filter(d => d.id !== design.id));
                                        setLoading(true);
                                        await deleteDesign(localStorage.getItem("companyId")!, design.areaId, design.id);
                                        setLoading(false);
                                    }} />
                                ))}
                            </div>

                        }
                        <div className="plus-icon" onClick={() => {
                            if (selectedNav == "designs") {
                                createDesignRef.current?.showModal();
                            } else {
                            }
                        }}>
                            <img src={PlusIcon} alt="Plus Icon" />

                        </div>
                    </div>


                </div>
            </div>
            <CreateDesignDialog areas={areas} dialogRef={createDesignRef} closeDialog={() => createDesignRef.current?.close()} createDesign={async (design) => {
                setDesigns([...designs, design]);
                await createAreaDesign(localStorage.getItem("companyId")!, design.areaId, design);
                createDesignRef.current?.close();
            }} />

        </>
    );
}

export default App;