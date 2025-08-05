import { collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { app } from "./firebase";
import { getLocalArea, getLocalTemplates } from "./local_firestore";
import { Area, Company, Section, Template } from "../constants";

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

export async function updateCompany(company: Company): Promise<void> {
    if (useLocalFirestore) {
        console.warn("Using local firestore, not updating company");
        return Promise.resolve();
    } else {
        const companyRef = doc(companiesCollection, company.id);
        await setDoc(companyRef, company.toDoc());
    }
}