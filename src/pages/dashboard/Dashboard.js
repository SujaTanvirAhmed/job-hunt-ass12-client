import { Outlet } from "react-router-dom";
import { DashboardNav } from "../../components/dashboard-nav/DashboardNav";
import styles from "./Dashboard.module.css";

export const Dashboard = ({ userRole, handleLogOut }) => {

    return (
        <div className="container">
            <h1 className={styles['dashboard-title']}>Dashboard</h1>

            <section className={styles['dashboard-body']}>

                <DashboardNav
                    userRole={userRole}
                    handleLogOut={handleLogOut}
                />

                <div className={styles['dashboard-main']}>
                    <Outlet />
                </div>

            </section>
        </div>
    );
}