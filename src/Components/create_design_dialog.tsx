import { useEffect, useState, type RefObject } from 'react';
import './create_design_dialog.css';
import { Area, Design, Section } from '../constants';


type CreateDesignDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;
    createDesign: (design: Design) => void;
    areas: Area[];

};

function CreateDesignDialog({ dialogRef, closeDialog, createDesign, areas }: CreateDesignDialogProps) {
    const [designName, setDesignName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedArea, setSelectedArea] = useState<Area | null>(null);


    async function handleCreateDesign() {
        if (designName.trim() === "") {
            alert("Design name cannot be empty");
            return;
        }
        if (!selectedArea) {
            alert("Please select an area");
            return;
        }
        setLoading(true);

        const newDesign = new Design({
            id: (Math.random() * 1000000).toString(),
            name: designName,
            areaId: selectedArea.id,
            sections: selectedArea.sections,
            previewImage: selectedArea.previewImage,
            inventoryItems: [...selectedArea.inventoryItems],

        });

        await createDesign(newDesign);
        setLoading(false);
        setDesignName("");

    }

    return (
        <dialog ref={dialogRef} className="create-design-dialog">
            <div className="create-design-dialog-div" >
                <h2>Create Design</h2>
                <div className="create-design-row">
                    <label htmlFor="design-name">Name:</label>
                    <input type="text" id="design-name" name="design-name" onChange={(e) => setDesignName(e.target.value ?? "")} value={designName} />

                </div>
                <div className="create-design-row">
                    <label htmlFor="design-area">Area:</label>
                    <select id="design-area" name="design-area" onChange={(e) => {
                        const areaId = e.target.value;
                        const area = areas.find(a => a.id === areaId) || null;
                        setSelectedArea(area);
                    }} value={selectedArea?.id || ""}>
                        <option value="">Select an area</option>
                        {areas.map((area) => (
                            <option key={area.id} value={area.id}>{area.name}</option>
                        ))}
                    </select>
                </div>
                <button className='action-btn' onClick={handleCreateDesign}>Create</button>
                <br />

                <br />
                <button className='action-btn' onClick={() => {
                    setDesignName("");
                    setSelectedArea(null);

                    closeDialog();
                }}>Close</button>


            </div>
            {loading && (
                <>

                    <div className="loader"></div>
                </>
            )}

        </dialog >

    );
}

export default CreateDesignDialog;