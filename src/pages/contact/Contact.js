/* Existing users = [
{ email: "test@test.com", pass: "test123" },
{ email: "admin@admin.com", pass: "123456"}
] */
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    loginUserWithGoogle,
    makeUserWithEmailAndPass,
    loginUserWithEmailAndPass,
} from "../../firebase-auth/FirebaseAuth";
import styles from "./Contact.module.css";

export const Contact = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    const productId = state?.productId || "";
    const destinationUrl = state?.destUrl || "/";
    // console.log(productId);
    // console.log(destinationUrl);

    const [isLoginForm, setIsLoginForm] = React.useState(true);
    const [errMsg, setErrMsg] = React.useState("");

    const emailRef = React.useRef("");
    const passRef = React.useRef("");
    const passConfirmRef = React.useRef("");

    const handleLoginOrRegister = (e) => {
        e.preventDefault();

        const wrongMailPass = "Wrong email or password!";
        const provideAllInfo = "You must provide all information!";
        const passwordMismatch = "Password mismatched!";
        const passwordLength = "Password must be at least 6 characters long!";
        const regFail = "Registration fails!";

        if (isLoginForm) {
            // User wants to login
            const userMail = emailRef.current.value;
            const userPass = passRef.current.value;
            loginUserWithEmailAndPass(userMail, userPass)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user.email);
                    emailRef.current.value = "";
                    passRef.current.value = "";
                    // navigate(destinationUrl, { replace: true, state: { productId: productId } });
                    // console.log(productId);
                    // console.log(destinationUrl);
                    // navigate(destinationUrl);
                })
                .catch((err) => {
                    console.log(err.message);
                    setErrMsg(wrongMailPass);
                });
        }
        else {
            // User wants to register
            const userMail = emailRef.current.value.trim();
            const userPass = passRef.current.value.trim();
            const userConfirmPass = passConfirmRef.current.value.trim();
            if (userMail.length === 0 ||
                userPass.length === 0 ||
                userConfirmPass.length === 0) {
                setErrMsg(provideAllInfo);
                return;
            }
            else {
                if (userPass !== userConfirmPass) {
                    setErrMsg(passwordMismatch);
                    return;
                }
                else {
                    if (userPass.length < 6) {
                        setErrMsg(passwordLength);
                    }
                    else {
                        makeUserWithEmailAndPass(userMail, userPass)
                            .then((userCredential) => {
                                const user = userCredential.user;
                                console.log(user.email);
                                emailRef.current.value = "";
                                passRef.current.value = "";
                                passConfirmRef.current.value = "";
                            })
                            .catch((err) => {
                                console.log(err.message);
                                setErrMsg(regFail);
                            });
                    }
                }
            }
        }
    }

    const handleFormChange = () => {
        setIsLoginForm(!isLoginForm);
    }

    const handleGoogleSignIn = () => { }

    return (
        <div className={styles.contact}>
            <div className={styles.container}>
                <div className={styles['contact-group']}>
                    <form className={styles['contact-form']} onSubmit={handleLoginOrRegister}>
                        <h3 className={styles['form-title']}>{isLoginForm ? "Login" : "Register"}</h3>
                        {errMsg !== "" && <p className={styles['err-msg']}>{errMsg}</p>}
                        <div>
                            <input
                                type="email"
                                placeholder="Your email"
                                className={styles['contact-input']}
                                ref={emailRef}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Your password"
                                className={styles['contact-input']}
                                ref={passRef}
                                required
                            />
                            {!isLoginForm &&
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    className={styles['contact-input']}
                                    ref={passConfirmRef}
                                />}

                            <button
                                type="submit"
                                className={`${styles.btn} ${styles['log-btn']}`}
                            >{isLoginForm ? "Log-in" : "Register"}</button>

                            {!isLoginForm && <><p className={styles['or-para']}>Or,</p>
                                <button
                                    type="button"
                                    className={styles['login-with-google-btn']}
                                    onClick={handleGoogleSignIn}
                                >Login With Google</button></>}
                        </div>
                    </form>
                    <div className={styles['other-option']}>
                        <h4 className={styles['contact-query']}>{isLoginForm ? "Don't have an account?" : "Already have an account?"}</h4>
                        <button className={`${styles.btn} ${styles['reg-btn']}`} onClick={handleFormChange}>{isLoginForm ? "Register" : "Log-in"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}