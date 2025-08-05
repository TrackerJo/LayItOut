import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import PersonIcon from "./assets/person.png";
import PlusIcon from "./assets/plus.png";
import { useState } from "react";
import type { Area } from "./constants";

createRoot(document.getElementById('root')!).render(

    <App />

)


function App() {
    const [selectedNav, setSelectedNav] = useState<string>("designs");
    const [designs, setDesigns] = useState<[]>([]);
    const [areas, setAreas] = useState<Area[]>([]);
    return (
        <>
            <div className="App">
                <h1 className="title">LayItOut</h1>

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
                        <div className="plus-icon" >
                            <img src={PlusIcon} alt="Plus Icon" />

                        </div>
                    </div>


                </div>
            </div>

        </>
    );
}

export default App;