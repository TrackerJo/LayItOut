import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import PersonIcon from "./assets/person.png";
import PlusIcon from "./assets/plus.png";
import { useEffect, useRef, useState } from "react";
import { type Area, type BoothMap, type CustomItem, type Design } from "./constants";
import { isLoggedIn, logout } from "./api/auth";
import { addCompanyCustomItem, createAreaBoothMap, createAreaDesign, createCompanyArea, deleteArea, deleteBoothMap, deleteCompanyCustomItem, deleteDesign, getAreaBoothMaps, getAreaDesigns, getCompanyAreas, getCompanyCustomItems } from "./api/firestore";
import AreaTile from "./Components/area_tile";
import CreateDesignDialog from "./Components/create_design_dialog";
import DesignTile from "./Components/design_tile";
import AccountDialog from "./Components/account_dialog";
import CreateAreaDialog from "./Components/create_area_dialog";
import CreateBoothMapDialog from "./Components/create_boothmap_dialog";
import BoothMapTile from "./Components/boothmap_tile";

import CreateCustomItemDialog from "./Components/create_custom_item_dialog";
import InventoryItemTile from "./Components/inventory_item_tile";


createRoot(document.getElementById('root')!).render(

    <App />

)


function App() {
    const [isMobile, setIsMobile] = useState<boolean>(/Mobi|Android/i.test(navigator.userAgent));
    const [selectedNav, setSelectedNav] = useState<"designs" | "areas" | "boothmaps" | "items">("designs");
    const [designs, setDesigns] = useState<Design[]>([]);
    const [areas, setAreas] = useState<Area[]>([]);
    const [boothMaps, setBoothMaps] = useState<BoothMap[]>([]);
    const [customItems, setCustomItems] = useState<CustomItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const accountDialogRef = useRef<HTMLDialogElement>(null);
    const createDesignRef = useRef<HTMLDialogElement>(null);
    const createAreaRef = useRef<HTMLDialogElement>(null);
    const createBoothMapRef = useRef<HTMLDialogElement>(null);
    const createCustomItemRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        isLoggedIn(() => { })
        const urlParams = new URLSearchParams(window.location.search);
        const view = urlParams.get("view");
        if (view === "designs") {
            setSelectedNav("designs");
        } else if (view === "areas") {
            setSelectedNav("areas");
        } else if (view === "boothmaps") {
            setSelectedNav("boothmaps");
        } else if (view === "items") {
            setSelectedNav("items");
        }
        async function fetchContent() {
            const companyId = localStorage.getItem("companyId");
            if (!companyId) {
                logout();
                return;
            }
            const areasResponse = await getCompanyAreas(companyId!);
            const boothMapsResponse: BoothMap[] = [];
            const boothMapsArrays = await Promise.all(
                areasResponse.map(area => getAreaBoothMaps(companyId!, area.id))
            );
            boothMapsArrays.forEach(areaBoothMapsResponse => {
                boothMapsResponse.push(...areaBoothMapsResponse);
            });
            const designsResponse: Design[] = [];

            const designsArrays = await Promise.all(
                areasResponse.map(area => getAreaDesigns(companyId!, area.id))
            );
            designsArrays.forEach(areaDesignsResponse => {
                designsResponse.push(...areaDesignsResponse);
            });
            const customItemsResponse: CustomItem[] = await getCompanyCustomItems(companyId!);
            setCustomItems([...customItemsResponse]);
            setAreas([...areasResponse]);
            setDesigns([...designsResponse]);
            setBoothMaps([...boothMapsResponse]);

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
                            <img src={PersonIcon} alt="Account Icon" className="account-icon" onClick={() => {
                                accountDialogRef.current?.showModal();
                            }} />

                        </div>
                        <div className="nav-buttons">
                            <button className={`nav-button ${selectedNav == "designs" ? "selected" : ""}`} onClick={() => setSelectedNav("designs")}>Designs</button>
                            <button className={`nav-button ${selectedNav == "boothmaps" ? "selected" : ""}`} onClick={() => setSelectedNav("boothmaps")}>Booth Maps</button>

                            <button className={`nav-button ${selectedNav == "areas" ? "selected" : ""}`} onClick={() => setSelectedNav("areas")}>Areas</button>
                            <button className={`nav-button ${selectedNav == "items" ? "selected" : ""}`} onClick={() => setSelectedNav("items")}>Inventory Items</button>

                        </div>

                    </div>
                    <div className="content">
                        {selectedNav == "designs" && designs.length == 0 && <div className="no-designs"><h3>No Designs Yet</h3></div>}
                        {selectedNav == "areas" && areas.length == 0 && <div className="no-areas"><h3>No Areas Yet</h3></div>}
                        {selectedNav == "boothmaps" && boothMaps.length == 0 && <div className="no-boothmaps"><h3>No Booth Maps Yet</h3></div>}
                        {selectedNav == "items" && customItems.length == 0 && <div className="no-items"><h3>No Custom Items Yet</h3></div>}
                        {selectedNav == "areas" &&

                            <div className="area-tiles">
                                {areas.map((area) => (
                                    <AreaTile key={area.id} area={area} onClick={() => {
                                        const companyId = localStorage.getItem("companyId");
                                        window.location.href = `/Layout/?companyId=${companyId}&areaId=${area.id}&type=view-area`;
                                    }} deleteArea={async () => {
                                        setAreas(areas.filter(a => a.id !== area.id));
                                        setDesigns(designs.filter(d => d.areaId !== area.id));
                                        setLoading(true);
                                        await deleteArea(localStorage.getItem("companyId")!, area.id);
                                        setLoading(false);
                                    }}
                                    />
                                ))}
                            </div>

                        }
                        {selectedNav == "designs" &&

                            <div className="design-tiles">
                                {designs.map((design) => (
                                    <DesignTile key={design.id} areaName={areas.find((a) => a.id == design.areaId)?.name || ""} design={design} onClick={() => {
                                        const companyId = localStorage.getItem("companyId");
                                        window.location.href = `/Layout/?companyId=${companyId}&areaId=${design.areaId}&type=view-design&designId=${design.id}&designName=${design.name}`;
                                    }} deleteDesign={async () => {
                                        setDesigns(designs.filter(d => d.id !== design.id));
                                        setLoading(true);
                                        await deleteDesign(localStorage.getItem("companyId")!, design.areaId, design.id);
                                        setLoading(false);
                                    }} />
                                ))}
                            </div>

                        }

                        {selectedNav == "boothmaps" &&

                            <div className="boothmap-tiles">
                                {boothMaps.map((boothMap) => (
                                    <BoothMapTile key={boothMap.id} areaName={areas.find((a) => a.id == boothMap.areaId)?.name || ""} boothMap={boothMap} onClick={() => {
                                        const companyId = localStorage.getItem("companyId");
                                        window.location.href = `/Layout/?companyId=${companyId}&areaId=${boothMap.areaId}&type=view-boothMap&boothMapId=${boothMap.id}&boothMapName=${boothMap.name}`;
                                    }} deleteBoothMap={async () => {
                                        setBoothMaps(boothMaps.filter(b => b.id !== boothMap.id));
                                        setLoading(true);
                                        await deleteBoothMap(localStorage.getItem("companyId")!, boothMap.areaId, boothMap.id);
                                        setLoading(false);
                                    }} />
                                ))}
                            </div>

                        }
                        {selectedNav == "items" &&

                            <div className="custom-item-tiles">
                                {customItems.map((customItem) => (
                                    <InventoryItemTile key={customItem.id} item={customItem} onSelect={() => { }} canDelete={true} onDelete={async () => {
                                        setCustomItems(customItems.filter(ci => ci.id !== customItem.id));
                                        setLoading(true);
                                        await deleteCompanyCustomItem(localStorage.getItem("companyId")!, customItem.id);
                                        // await deleteCustomItem(customItem.icon);
                                        setLoading(false);
                                    }} />
                                ))}
                            </div>

                        }
                        {selectedNav == "designs" || !isMobile ? <div className="plus-icon" onClick={() => {
                            if (selectedNav == "designs") {
                                createDesignRef.current?.showModal();
                            } else if (selectedNav == "boothmaps") {
                                createBoothMapRef.current?.showModal();
                            } else if (selectedNav == "areas") {
                                createAreaRef.current?.showModal();
                            } else if (selectedNav == "items") {
                                createCustomItemRef.current?.showModal();
                            }
                        }}>
                            <img src={PlusIcon} alt="Plus Icon" />

                        </div> : null}
                    </div>


                </div>
            </div>
            <CreateDesignDialog areas={areas} dialogRef={createDesignRef} closeDialog={() => createDesignRef.current?.close()} createDesign={async (design) => {
                setDesigns([...designs, design]);
                await createAreaDesign(localStorage.getItem("companyId")!, design.areaId, design);
                createDesignRef.current?.close();
            }} />

            <AccountDialog dialogRef={accountDialogRef} closeDialog={() => accountDialogRef.current?.close()} />
            <CreateAreaDialog dialogRef={createAreaRef} closeDialog={() => createAreaRef.current?.close()} createArea={async (area) => {
                await createCompanyArea(localStorage.getItem("companyId")!, area);
                setAreas([...areas, area]);
                createAreaRef.current?.close();
                window.location.href = `/Layout/?companyId=${localStorage.getItem("companyId")}&areaId=${area.id}&type=create-area&stage=placing-sections`;
            }} />

            <CreateBoothMapDialog areas={areas} dialogRef={createBoothMapRef} closeDialog={() => createBoothMapRef.current?.close()} createBoothMap={async (boothMap) => {
                setBoothMaps([...boothMaps, boothMap]);
                await createAreaBoothMap(localStorage.getItem("companyId")!, boothMap.areaId, boothMap);
                createBoothMapRef.current?.close();
            }} />

            <CreateCustomItemDialog dialogRef={createCustomItemRef} closeDialog={() => createCustomItemRef.current?.close()} createCustomItem={async (customItem) => {
                // Implement the logic to add the custom item to the inventory
                await addCompanyCustomItem(localStorage.getItem("companyId")!, customItem);
                setCustomItems([...customItems, customItem]);
                createCustomItemRef.current?.close();
            }} />
        </>
    );
}

export default App;