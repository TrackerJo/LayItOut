import { createRoot } from "react-dom/client";
import "../index.css";
import "./DNF.css";

import { useEffect, useState } from "react";



createRoot(document.getElementById('root')!).render(

    <DNF />

)


function DNF() {

    return (
        <>
            <div className="App">
                <h1 className="title">LayItOut</h1>

                <div className="dnf-container">
                    <h2 className="dnf-title">Design Not Found</h2>
                    <p className="dnf-message">The design you are looking for does not exist or could not be found.</p>
                    <p className="dnf-suggestion">Please contact the person who sent you the link</p>




                </div>
            </div>

        </>
    );
}

export default DNF;