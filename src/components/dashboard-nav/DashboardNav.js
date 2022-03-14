import { Link } from "react-router-dom";
import styles from "./DashboardNav.module.css";

export const DashboardNav = ({ userRole, handleLogOut }) => {

    return (
        <nav className={`nav ${styles['dashboard-nav']}`}>
            <ul className={styles['nav-list']}>
                {userRole === "admin" ?
                    <>
                        <li className={styles['nav-item']}>
                            <p className={styles['user-type']}>Admin</p>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link className={styles['nav-link']} to="/dashboard/manage-orders">Manage All Orders</Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link className={styles['nav-link']} to="/dashboard/add-product">Add A Product</Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link className={styles['nav-link']} to="/dashboard/make-admin">Make Admin</Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link className={styles['nav-link']} to="/dashboard/manage-products">Manage Products</Link>
                        </li>
                    </> :
                    <>
                        <li className={styles['nav-item']}><p className="user-type">User</p></li>
                        <li className={styles['nav-item']}>
                            <Link className={styles['nav-link']} to="/dashboard/pay">Pay</Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link className={styles['nav-link']} to="/dashboard/my-orders">My Orders</Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link className={styles['nav-link']} to="/dashboard/review">Review</Link>
                        </li>
                    </>
                }
                <li className={styles['nav-item']}>
                    <button
                        onClick={handleLogOut}
                        className={styles['nav-btn']}
                    >Logout</button>
                </li>
            </ul>
        </nav>
    );
}