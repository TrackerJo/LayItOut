import { useEffect, useState, type RefObject } from 'react';
import './account_dialog.css';

import { logout } from '../api/auth';


type AccountDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;


};

function AccountDialog({ dialogRef, closeDialog }: AccountDialogProps) {


    return (
        <dialog ref={dialogRef} className="account-dialog">
            <div className="account-dialog-div" >
                <h2>Account Settings</h2>
                <button className='action-btn' onClick={() => {
                    logout();
                    closeDialog();
                }}>Log Out</button>
                <br />
                <br />
                <button className='action-btn' onClick={closeDialog}>Close</button>


            </div>

        </dialog >

    );
}

export default AccountDialog;