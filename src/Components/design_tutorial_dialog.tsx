import { useState, type RefObject } from 'react';
import './design_tutorial_dialog.css';




type AccountDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;


};

function DesignTutorialDialog({ dialogRef, closeDialog }: AccountDialogProps) {
    const [step, setStep] = useState<number>(0);
    const tutorialSteps = [
        {
            title: "Welcome to LayItOut!",
            content: <p>This tutorial will guide you through the basics of designing your layout. Let's get started!</p>
        },
        {
            title: "Placing Mode",
            content: <p>There are two different placing modes: Drag and Drop and Tap to Place.<br />In Drag and Drop mode, you can click and drag items from the inventory onto the design area.<br />In Tap to Place mode, you can select an item from the inventory and then click or drag on the design area to place it.<br />You can toggle between these modes using the dropdown below the submit button.</p>
        },
        {
            title: "Placing Items",
            content: <p>To place items in your layout, use the inventory panel to select and drag items onto the design area.</p>
        },
        {
            title: "Moving Items",
            content: <p>To move an item, simply click and drag it to the desired location within the design area.</p>
        },
        {
            title: "Deleting Items",
            content: <p>You can delete an item by clicking it and clicking the x icon </p>
        },
        {
            title: "Rotating Items",
            content: <p>To rotate an item, click on it and use the rotate handle that appears to adjust its orientation.</p>
        },
        {
            title: "Saving and Submitting",
            content: <p>Remember to save your work frequently! When you're satisfied with your layout, click the submit button to finalize your design.</p>
        }


    ];

    return (
        <dialog ref={dialogRef} className="design-tutorial-dialog">
            <div className="design-tutorial-div" >
                <h2>{tutorialSteps[step].title}</h2>
                {tutorialSteps[step].content}

                <br />
                <button className='action-btn' onClick={() => {
                    if (step < tutorialSteps.length - 1) {
                        setStep(step + 1);
                    } else {
                        localStorage.setItem("hasSeenDesignTutorial", "true");
                        closeDialog();
                    }
                }}>{step < tutorialSteps.length - 1 ? "Next" : "Close"}</button>


            </div>

        </dialog >

    );
}

export default DesignTutorialDialog;