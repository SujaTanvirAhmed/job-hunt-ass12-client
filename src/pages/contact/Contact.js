/* Existing users = [
{ email: "test@test.com", pass: "test123" },
{ email: "admin@admin.com", pass: "admin123"}
] */
import * as React from "react";
import {
    loginUserWithGoogle,
    makeUserWithEmailAndPass,
    loginUserWithEmailAndPass,
} from "../../firebase-auth/FirebaseAuth";
import "./Contact.css";

export const Contact = () => {
    const [isLoginForm, setIsLoginForm] = React.useState(true);
    const emailRef = React.useRef("");
    const passRef = React.useRef("");
    const passConfirmRef = React.useRef("");

    const handleLoginOrRegister = (e) => {
        e.preventDefault();

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
                })
                .catch((err) => {
                    console.log(err.message);
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
                console.log("You must provide all information");
                return;
            }
            else {
                if (userPass !== userConfirmPass) {
                    console.log("Password mismatched");
                    return;
                }
                else {
                    if (userPass.length < 6) {
                        console.log("Password must be at least 6 character long");
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

    const handleRegisterWithEmailAndPass = () => {
        makeUserWithEmailAndPass("test@test.com", "test123")
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="contact">
            <div className="container">
                <div className="contact-group">
                    <form onSubmit={handleLoginOrRegister}>
                        <h3 className="form-title">{isLoginForm ? "Login" : "Register"}</h3>
                        <div className="form-items">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="contact-input"
                                ref={emailRef}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Your password"
                                className="contact-input"
                                ref={passRef}
                                required
                            />
                            {!isLoginForm &&
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    className="contact-input"
                                    ref={passConfirmRef}
                                />}

                            <button
                                type="submit"
                                className="btn log-btn"
                            >{isLoginForm ? "Log-in" : "Register"}</button>

                            {!isLoginForm && <><p className="or-para">Or,</p>
                                <button
                                    type="button"
                                    className="login-with-google-btn"
                                    onClick={handleGoogleSignIn}
                                >Login With Google</button></>}
                        </div>
                    </form>
                    <div className="other-option">
                        <h4 className="contact-query">{isLoginForm ? "Don't have an account?" : "Already have an account?"}</h4>
                        <button className="btn reg-btn" onClick={handleFormChange}>{isLoginForm ? "Register" : "Log-in"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}