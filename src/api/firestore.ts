import { collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { app } from "./firebase";
import { getLocalArea, getLocalTemplates } from "./local_firestore";
import { Area, BoothMap, Company, Design, Section, Template } from "../constants";

const db = getFirestore(app);
const useLocalFirestore = false;
const companiesCollection = collection(db, "companies");


export async function getArea(companyId: string, areaId: string): Promise<Area> {
    if (useLocalFirestore) {
        return Promise.resolve(getLocalArea());
    } else {
        const companyRef = doc(companiesCollection, companyId);
        const areaRef = doc(companyRef, "areas", areaId);
        const areaData = await getDoc(areaRef);
        if (areaData.exists()) {
            const area = areaData.data();
            return Area.fromDoc(area);
        } else {
            console.error("No such area document!");
            return getLocalArea();
        }
    }
}

export async function saveCompanyArea(companyId: string, area: Area): Promise<void> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, not saving area");
        return Promise.resolve();
    } else {
        const companyRef = doc(companiesCollection, companyId);
        const areaRef = doc(companyRef, "areas", area.id);
        await setDoc(areaRef, area.toDoc());
    }
}

export async function saveAreaTemplates(companyId: string, areaId: string, templates: Template[]): Promise<void> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, not saving template");
        return Promise.resolve();
    } else {
        const companyRef = doc(companiesCollection, companyId);
        const areaRef = doc(companyRef, "areas", areaId);
        await updateDoc(areaRef, {
            templates: templates.map((template) => template.toDoc())
        });
    }
}

export async function getCompanies(): Promise<Company[]> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, returning empty companies list");
        return Promise.resolve([]);
    } else {
        const companiesSnapshot = await getDocs(companiesCollection);
        const companies: Company[] = [];
        companiesSnapshot.forEach((doc) => {
            const data = doc.data();
            companies.push(Company.fromDoc(data));
        });
        return companies;
    }
}

export async function getCompany(companyId: string): Promise<Company | null> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, returning local company");
        return null;
    } else {
        const companyRef = doc(companiesCollection, companyId);
        const companyData = await getDoc(companyRef);
        if (companyData.exists()) {
            return Company.fromDoc(companyData.data());
        }
        return null;
    }
}

export async function updateCompany(company: Company): Promise<void> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, not updating company");
        return Promise.resolve();
    } else {
        const companyRef = doc(companiesCollection, company.id);
        await setDoc(companyRef, company.toDoc());
    }
}

export async function getCompanyAreas(companyId: string): Promise<Area[]> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, returning local areas");
        return Promise.resolve([getLocalArea()]);
    } else {
        const companyRef = doc(companiesCollection, companyId);
        const areasCollection = collection(companyRef, "areas");
        const areasSnapshot = await getDocs(areasCollection);
        const areas: Area[] = [];
        areasSnapshot.forEach((doc) => {
            const data = doc.data();
            areas.push(Area.fromDoc(data));
        });
        return areas;
    }
}

export async function getAreaDesigns(companyId: string, areaId: string): Promise<Design[]> {

    const companyRef = doc(companiesCollection, companyId);
    const areaRef = doc(companyRef, "areas", areaId);
    const designsRef = collection(areaRef, "designs");
    const designsSnapshot = await getDocs(designsRef);
    const designs: Design[] = [];
    designsSnapshot.forEach((doc) => {
        const data = doc.data();
        designs.push(Design.fromDoc(data));
    });
    return designs;

}

export async function getAreaBoothMaps(companyId: string, areaId: string): Promise<BoothMap[]> {
    const companyRef = doc(companiesCollection, companyId);
    const areaRef = doc(companyRef, "areas", areaId);
    const boothMapsRef = collection(areaRef, "boothMaps");
    const boothMapsSnapshot = await getDocs(boothMapsRef);
    const boothMaps: BoothMap[] = [];
    boothMapsSnapshot.forEach((doc) => {
        const data = doc.data();
        boothMaps.push(BoothMap.fromDoc(data));
    });
    return boothMaps;
}

export async function getAreaDesign(companyId: string, areaId: string, designId: string): Promise<Design | null> {
    console.log("Fetching design", designId, "for area", areaId, "in company", companyId);
    const companyRef = doc(companiesCollection, companyId);
    const areaRef = doc(companyRef, "areas", areaId);
    const designRef = doc(areaRef, "designs", designId);
    const designData = await getDoc(designRef);
    if (designData.exists()) {
        return Design.fromDoc(designData.data());
    }
    return null;
}

export async function createAreaDesign(companyId: string, areaId: string, design: Design): Promise<void> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, not creating design");
        return Promise.resolve();
    } else {
        const companyRef = doc(companiesCollection, companyId);
        const areaRef = doc(companyRef, "areas", areaId);
        const designRef = doc(areaRef, "designs", design.id);
        await setDoc(designRef, design.toDoc());
    }
}


export async function createAreaBoothMap(companyId: string, areaId: string, boothMap: BoothMap): Promise<void> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, not creating boothMap");
        return Promise.resolve();
    } else {
        const companyRef = doc(companiesCollection, companyId);
        const areaRef = doc(companyRef, "areas", areaId);
        const boothMapRef = doc(areaRef, "boothMaps", boothMap.id);
        await setDoc(boothMapRef, boothMap.toDoc());
    }
}
export async function deleteDesign(companyId: string, areaId: string, designId: string): Promise<void> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, not deleting design");
        return Promise.resolve();
    } else {
        const companyRef = doc(companiesCollection, companyId);
        const areaRef = doc(companyRef, "areas", areaId);
        const designRef = doc(areaRef, "designs", designId);
        await deleteDoc(designRef);
    }
}

export async function updateAreaDesign(companyId: string, areaId: string, design: Design): Promise<void> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, not updating design");
        return Promise.resolve();
    } else {
        const companyRef = doc(companiesCollection, companyId);
        const areaRef = doc(companyRef, "areas", areaId);
        const designRef = doc(areaRef, "designs", design.id);
        await setDoc(designRef, design.toDoc());
    }
}

export async function createCompanyArea(companyId: string, area: Area): Promise<void> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, not creating area");
        return Promise.resolve();
    } else {
        const companyRef = doc(companiesCollection, companyId);
        const areaRef = doc(companyRef, "areas", area.id);
        await setDoc(areaRef, area.toDoc());
    }
}

export async function placeAreaSections(companyId: string, areaId: string, sections: Section[], newWidth: number, newHeight: number): Promise<void> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, not updating sections");
        return Promise.resolve();
    } else {
        const companyRef = doc(companiesCollection, companyId);
        const areaRef = doc(companyRef, "areas", areaId);
        await updateDoc(areaRef, {
            sections: sections.map((section) => section.toDoc()),
            width: newWidth,
            height: newHeight
        });
    }
}

export async function saveAreaSections(companyId: string, areaId: string, sections: Section[]): Promise<void> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, not saving sections");
        return Promise.resolve();
    } else {
        const companyRef = doc(companiesCollection, companyId);
        const areaRef = doc(companyRef, "areas", areaId);
        await updateDoc(areaRef, {
            sections: sections.map((section) => section.toDoc())
        });
    }
}




export async function deleteArea(companyId: string, areaId: string): Promise<void> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, not deleting area");
        return Promise.resolve();
    } else {
        const companyRef = doc(companiesCollection, companyId);
        const areaRef = doc(companyRef, "areas", areaId);
        await deleteDoc(areaRef);
    }
}

export async function deleteBoothMap(companyId: string, areaId: string, boothMapId: string): Promise<void> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, not deleting boothMap");
        return Promise.resolve();
    } else {
        const companyRef = doc(companiesCollection, companyId);
        const areaRef = doc(companyRef, "areas", areaId);
        const boothMapRef = doc(areaRef, "boothMaps", boothMapId);
        await deleteDoc(boothMapRef);
    }
}

export async function getAreaBoothMap(companyId: string, areaId: string, boothMapId: string): Promise<BoothMap | null> {
    const companyRef = doc(companiesCollection, companyId);
    const areaRef = doc(companyRef, "areas", areaId);
    const boothMapRef = doc(areaRef, "boothMaps", boothMapId);
    const boothMapData = await getDoc(boothMapRef);
    if (boothMapData.exists()) {
        return BoothMap.fromDoc(boothMapData.data());
    }
    return null;
}

export async function saveAreaBoothMap(companyId: string, boothMap: BoothMap): Promise<void> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, not saving boothMap");
        return Promise.resolve();
    } else {
        const companyRef = doc(companiesCollection, companyId);
        const areaRef = doc(companyRef, "areas", boothMap.areaId);
        const boothMapRef = doc(areaRef, "boothMaps", boothMap.id);
        await setDoc(boothMapRef, boothMap.toDoc());
    }
}   