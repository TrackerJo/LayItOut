import { useState, type RefObject } from 'react';
import './create_boothmap_dialog.css';
import { Area, Booth, BoothMap, Template } from '../constants';


type CreateBoothMapDialogProps = {
    dialogRef: RefObject<HTMLDialogElement | null>;
    closeDialog: () => void;
    createBoothMap: (boothMap: BoothMap) => void;
    areas: Area[];


};

function CreateBoothMapDialog({ dialogRef, closeDialog, createBoothMap, areas }: CreateBoothMapDialogProps) {
    const [boothMapName, setBoothMapName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedArea, setSelectedArea] = useState<Area | null>(null);
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);


    async function handleCreateBoothMap() {
        if (boothMapName.trim() === "") {
            alert("BoothMap name cannot be empty");
            return;
        }
        if (!selectedArea) {
            alert("Please select an area");
            return;
        }
        setLoading(true);

        const newBoothMap = new BoothMap({
            id: (Math.random() * 1000000).toString(),
            name: boothMapName,
            areaId: selectedArea.id,
            sections: selectedArea.sections,
            previewImage: selectedArea.previewImage,
            inventoryItems: [...selectedArea.inventoryItems],


        });

        if (selectedTemplate) {
            newBoothMap.sections = selectedTemplate.sections;
            newBoothMap.previewImage = selectedTemplate.previewImage;
            newBoothMap.inventoryItems = selectedTemplate.inventoryItems;
        }

        await createBoothMap(newBoothMap);
        window.location.href = `/LayItOut/Layout/?companyId=${localStorage.getItem("companyId")}&areaId=${newBoothMap.areaId}&type=create-boothMap&boothMapId=${newBoothMap.id}&boothMapName=${newBoothMap.name}`;
        setLoading(false);
        setBoothMapName("");
        setSelectedArea(null);
        setSelectedTemplate(null);

    }

    return (
        <dialog ref={dialogRef} className="create-boothMap-dialog">
            <div className="create-boothMap-dialog-div" >
                <h2>Create Booth Map</h2>
                <div className="create-boothMap-row">
                    <label htmlFor="boothMap-name">Name:</label>
                    <input type="text" id="boothMap-name" name="boothMap-name" onChange={(e) => setBoothMapName(e.target.value ?? "")} value={boothMapName} />

                </div>
                <div className="create-boothMap-row">
                    <label htmlFor="boothMap-area">Area:</label>
                    <select id="boothMap-area" name="boothMap-area" onChange={(e) => {
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
                {selectedArea && selectedArea.templates.length > 0 && <div className="create-boothMap-row">
                    <label htmlFor="boothMap-area">Template:</label>
                    <select id="boothMap-area" name="boothMap-area" onChange={(e) => {
                        const templateId = e.target.value;
                        const template = selectedArea.templates.find(t => t.id === templateId) || null;
                        setSelectedTemplate(template);
                    }} value={selectedTemplate?.id || ""}>
                        <option value="">Select a template (Optional)</option>
                        {selectedArea.templates.map((template) => (
                            <option key={template.id} value={template.id}>{template.name}</option>
                        ))}
                    </select>
                </div>}
                <button className='action-btn' onClick={handleCreateBoothMap}>Create</button>
                <br />

                <br />
                <button className='action-btn' onClick={() => {
                    closeDialog();

                    setBoothMapName("");
                    setSelectedArea(null);
                    setSelectedTemplate(null);

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

export default CreateBoothMapDialog;