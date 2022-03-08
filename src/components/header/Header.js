import { Link } from 'react-router-dom';
import { logOut } from "../../firebase-auth/FirebaseAuth";
import "./Header.css";

export const Header = ({ userEmail, setUserEmail }) => {

    const handleLogOut = () => {
        logOut()
            .then(() => {
                setUserEmail("");
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <header>
            <div className="container">
                <div className="ribbon">
                    <div className="logo">
                        <h2><Link to="/">TourClub</Link></h2>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/manage-orders">Manage Orders</Link></li>
                            <li><Link to="/manage-all-orders">Manage All Orders</Link></li>
                        </ul>
                    </nav>
                    <ul className="login">
                        {userEmail === "" ? <li><Link to="/contact" className="nav-login-btn">Login</Link></li> : null}

                        {userEmail !== "" ? <button className="nav-logout-btn" onClick={handleLogOut}>Logout</button> : null}
                    </ul>
                    {userEmail !== "" ? <p className="user-info">Logged in as <span>{userEmail}</span></p> : null}
                </div>
            </div>
        </header>
    );
}