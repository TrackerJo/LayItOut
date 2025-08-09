/* eslint-disable @typescript-eslint/no-unused-vars */
import { browserLocalPersistence, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, setPersistence, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./firebase";


const auth = getAuth(app);



export async function login(email: string, password: string) {
    return setPersistence(auth, browserLocalPersistence).then(async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log(auth.currentUser);
            localStorage.setItem("userId", auth.currentUser!.uid!);
            return true;

        } catch (e) {
            return false;
        }
    });


}

export async function logout() {
    localStorage.removeItem("userId");
    return signOut(auth);
}

export async function register(email: string, password: string): Promise<string | boolean> {
    return setPersistence(auth, browserLocalPersistence).then(async () => {
        console.log("Registering user");


        try {
            return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                localStorage.setItem("userId", userCredential.user.uid);




                return userCredential.user.uid;
            });
        }
        catch (e) {
            return false;
        }
    });
}

export async function isLoggedIn(setIsLoggedIn: (isLoggedIn: boolean) => void) {
    console.log("Checking if user is logged in");
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLoggedIn(true);
            console.log("User is logged in");
            console.log(user);
            localStorage.setItem("userId", user.uid);
            console.log(window.location.pathname);
            if (window.location.pathname.includes("/Login/")) {
                //Set the url to the home page
                window.location.href = "/LayItOut/";
            }
        } else {
            setIsLoggedIn(false);
            if (window.location.pathname === "/Login/") {
                return;
            }
            //Set the url to the login page
            window.location.href = "/LayItOut/Login/?redirect=" + window.location.pathname + window.location.search.replace(/&/g, '~');
        }
    });


}

export async function reauthenticateUser(email: string, password: string) {
    return setPersistence(auth, browserLocalPersistence).then(async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return true;
        } catch (e) {
            return false;
        }
    });
}

export function getCurrentUserId() {
    return auth.currentUser?.uid ?? localStorage.getItem("userId");
}


export async function sendPasswordReset(email: string): Promise<boolean> {
    return sendPasswordResetEmail(auth, email).then(() => {
        return true;
    }).catch((e) => {
        console.log(e);
        return false;
    }
    );
}