

import { BoothMap, Vendor } from "../constants"

import "./key_tile.css"
import PlusCircle from "../assets/plus.circle.png"



type KeyTileProps = {

    maxHeight?: number,


}

function KeyTile({ maxHeight }: KeyTileProps) {
    return (<div className="key-tile">
        <h2>Key</h2>
        <div className="key-divider"></div>


        <div className="key-tile-content">
            <div className="key-item">
                <div className="cell cell-border">

                </div>
                <p>1ft x 1ft</p>
            </div>
            <div className="key-item">
                <div className="container">
                    <div className="wall">
                    </div>


                </div>
                <p>Wall</p>
            </div>
            <div className="key-item">
                <div className="window-container">
                    <div className="window">
                    </div>


                </div>
                <p>Window</p>
            </div>
            <div className="key-item">
                <div className="container">
                    <img src="https://firebasestorage.googleapis.com/v0/b/kazoom-layitout.firebasestorage.app/o/public%2Fright_door.png?alt=media&token=8c6f3b4d-5e7a-4b9c-8d2f-0a3b5e6f7c8d" alt="" className="door" />
                </div>

                <p>Door</p>
            </div>
            <div className="key-item">
                <div className="window-container">
                    <div className="section-divider">
                    </div>


                </div>
                <p>Section Divider</p>
            </div>



        </div>
    </div >)
}

export default KeyTile