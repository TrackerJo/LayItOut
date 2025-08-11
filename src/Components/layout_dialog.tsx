import { type RefObject } from 'react';
import './layout_dialog.css';


type LayoutDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;
    areaPreview: string;
};

function LayoutDialog({ dialogRef, closeDialog, areaPreview }: LayoutDialogProps) {


    return (
        <dialog ref={dialogRef} className="layout-dialog">
            <div className="layout-dialog-div" >
                <h2>Layout</h2>

                <img src={areaPreview} alt="Layout preview" className='layout-dialog-preview' />
                <br />
                <button className='layout-dialog-close' onClick={closeDialog}>Close</button>


            </div>


        </dialog >

    );
}

export default LayoutDialog;