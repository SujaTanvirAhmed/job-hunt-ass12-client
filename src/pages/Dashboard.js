import { Outlet } from "react-router-dom";
import { DashboardNav } from "../components/DashboardNav";

export const Dashboard = ({ userRole, handleLogOut }) => {

    return (
        <div className="container">
            <h1 className="dashboard-title">Dashboard</h1>

            <section className="dashboard-body">

                <DashboardNav
                    userRole={userRole}
                    handleLogOut={handleLogOut}
                />

                <div className="dashboard-main">
                    <Outlet />
                </div>

            </section>
        </div>
    );
}