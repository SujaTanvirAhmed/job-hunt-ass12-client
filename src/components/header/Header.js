import { Link } from 'react-router-dom';
// import { logOut } from "../../firebase-auth/FirebaseAuth";
import styles from "./Header.module.css";

export const Header = ({ userEmail, setUserEmail, handleLogOut }) => {

    return (
        <header>
            <div className="container">
                <div className={styles.ribbon}>
                    <div className="logo">
                        <h2 className={styles['logo-txt']}><Link className={styles['logo-link']} to="/">TentHome</Link></h2>
                    </div>
                    <nav className={styles.nav}>
                        <ul className={styles['nav-list']}>
                            <li className={styles['nav-item']}><Link className={styles['nav-link']} to="/">Home</Link></li>
                            <li className={styles['nav-item']}><Link className={styles['nav-link']} to="/about">About</Link></li>
                            <li className={styles['nav-item']}><Link className={styles['nav-link']} to="/all-products">All Products</Link></li>
                            <li className={styles['nav-item']}><Link className={styles['nav-link']} to="/manage-orders">Manage Orders</Link></li>
                            <li className={styles['nav-item']}><Link className={styles['nav-link']} to="/manage-all-orders">Manage All Orders</Link></li>
                            {userEmail !== "" ?
                                <li className={styles['nav-item']}><Link className={styles['nav-link']} to="/dashboard">Dashboard</Link></li> : null
                            }
                        </ul>
                    </nav>
                    <ul className={styles.login}>
                        {userEmail === "" && <li><Link to="/contact" className={styles['nav-login-btn']}>Login</Link></li>}

                        {userEmail !== "" && <button className={styles['nav-logout-btn']} onClick={handleLogOut}>Logout</button>}
                    </ul>
                    {userEmail !== "" ? <p className={styles['user-info']}>Logged in as <span className={styles['user-mail']}>{userEmail}</span></p> : null}
                </div>
            </div>
        </header>
    );
}