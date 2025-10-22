import { getStorage, uploadBytes, getDownloadURL, ref, deleteObject } from "firebase/storage";

import { app } from "./firebase";

const storage = getStorage(app);

export async function uploadCustomItem(image: File, name: string): Promise<string> {
    const companyId = localStorage.getItem("companyId");
    const storageRef = ref(storage, `${companyId}/CustomItems/${name.replace(" ", "_")}.${image.name.split(".").pop()}`);
    const snapshot = await uploadBytes(storageRef, image);
    return await getDownloadURL(snapshot.ref);

}

export async function deleteCustomItem(link: string): Promise<void> {
    const companyId = localStorage.getItem("companyId");
    const storageRef = ref(storage, `${companyId}/CustomItems/${link.split("/").pop()}`);
    await deleteObject(storageRef);
}