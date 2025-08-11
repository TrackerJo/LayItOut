import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "./firebase";
import type { Section } from "../constants";

const functions = getFunctions(app);

export async function generatePreviewImage(companyId: string, areaId: string, sections: Section[]): Promise<string> {
    const generatePreviewImageFunction = httpsCallable(functions, "generatePreviewImage");
    console.log("Generating preview image for companyId:", sections.map(section => JSON.stringify(section.toJSON())).join("LAYOUTSEPARATOR"));
    try {
        const result = await generatePreviewImageFunction({
            companyId: companyId,
            areaId: areaId,
            templateName: "Preview",
            sections: sections.map(section => JSON.stringify(section.toJSON())).join("LAYOUTSEPARATOR")
        });
        return result.data as string;
    } catch (error) {
        console.error("Error generating preview image:", error.message);
        throw error;
    }
}