import { createRoot } from "react-dom/client";
import "../index.css";
import "./Login.css";

import { useEffect, useState } from "react";
import type { Company } from "../constants";
import { getCompanies, updateCompany } from "../api/firestore";
import { isLoggedIn, login, register } from "../api/auth";


createRoot(document.getElementById('root')!).render(

    <Login />

)


function Login() {
    const [stage, setStage] = useState<string>("select");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [companyCode, setCompanyCode] = useState<string>("");
    const [companies, setCompanies] = useState<Company[]>([]);
    const [loadingCompanies, setLoadingCompanies] = useState<boolean>(true);
    const [signingUp, setSigningUp] = useState<boolean>(false);
    const [loggingIn, setLoggingIn] = useState<boolean>(false);

    useEffect(() => {
        // isLoggedIn(() => { });
        async function fetchCompanies() {
            const response = await getCompanies();
            setCompanies(response);
            console.log(response);
            setLoadingCompanies(false);
        }
        fetchCompanies();
    }, []);

    async function handleLogin() {
        // Handle login logic here
        if (email.trim() === "") {
            alert("Please enter an email address");
            return;
        }
        if (password.trim() === "") {
            alert("Please enter a password");
            return;
        }
        setLoggingIn(true);
        const result = await login(email, password);
        if (!result) {
            alert("Invalid email or password. Please try again.");
            setLoggingIn(false);
            return;
        }
        const company = companies.find((c) => c.users.includes(localStorage.getItem("userId")!));
        if (!company) {
            alert("You are not part of any company. Please contact your administrator.");
            setLoggingIn(false);
            return;
        }
        localStorage.setItem("companyId", company.id);
        setLoggingIn(false);
        const urlParams = new URLSearchParams(window.location.search)
        const redirect = urlParams.get('redirect')
        if (redirect) {
            window.location.href = redirect.replace(/~/g, "&")
        } else {
            window.location.href = '/'
        }

    }

    async function handleSignUp() {
        // Handle sign up logic here
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        if (companyCode.trim() === "") {
            alert("Please enter a company code");
            return;
        }
        const company = companies.find((c) => c.code === companyCode);
        if (!company) {
            alert("Invalid company code");
            return;
        }
        setSigningUp(true);
        const result = await register(email, password);
        if (result === false) {
            alert("Error registering user. Please try again.");
            setSigningUp(false);
            return;
        }
        company.users.push(result as string);
        await updateCompany(company);
        localStorage.setItem("companyId", company.id);
        setSigningUp(false);
        const urlParams = new URLSearchParams(window.location.search)
        const redirect = urlParams.get('redirect')
        if (redirect) {
            window.location.href = redirect.replace(/~/g, "&")
        } else {
            window.location.href = '/'
        }



    }

    return (
        <>
            <div className="App">
                <h1 className="title">LayItOut</h1>

                <div className="login-container">
                    {stage == "select" ? <>
                        <h2>Welcome to LayItOut</h2>
                        <p>Please select an option to continue</p>

                        <button className="action-btn" onClick={() => setStage("login")}>Login</button>
                        <button className="action-btn" onClick={() => setStage("signup")}>Sign Up</button></> : stage == "login" ? loadingCompanies ? <div className="loader"></div> : <><h2>Welcome back!</h2>
                            <div className="login-item-row">
                                <label htmlFor="email">Email:</label>
                                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                            </div>
                            <div className="login-item-row">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {loggingIn ? <div className="loader"></div> : <button className="action-btn" onClick={handleLogin}>Login</button>}
                            <label className="label-btn" onClick={() => setStage("select")}>Back</label>
                        </> : loadingCompanies ? <div className="loader"></div> : <>
                            <h2>Sign Up</h2>
                            <br />
                            <br />
                            <div className="login-item-row">
                                <label htmlFor="email">Email:</label>
                                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                            </div>
                            <div className="login-item-row">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="login-item-row">
                                <label htmlFor="confirm-password">Confirm Password:</label>
                                <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <div className="login-item-row">
                                <label htmlFor="company-code">Company Code:</label>
                                <input type="text" id="company-code" name="company-code" value={companyCode} onChange={(e) => setCompanyCode(e.target.value)} />
                            </div>
                            {signingUp ? <div className="loader"> </div> : <button className="action-btn" onClick={handleSignUp}>Sign Up</button>}
                            <label className="label-btn" onClick={() => setStage("select")}>Back</label>
                        </>
                    }




                </div>
            </div>

        </>
    );
}

export default Login;