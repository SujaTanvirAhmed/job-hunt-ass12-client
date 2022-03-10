// import { Link } from "react-router-dom";
import { DashboardNav } from "../components/DashboardNav";

export const DashboardReview = ({ userRole, handleLogOut }) => {

    return (
        <div className="container">
            <h1 className="dashboard-title">Dashboard</h1>

            <section className="dashboard-body">

                <DashboardNav
                    userRole={userRole}
                    handleLogOut={handleLogOut}
                />

                <div className="dashboard-main">
                    <form>
                        <h2>Give us your review</h2>
                        <input type="email" placeholder="Your email" />
                        <textarea placeholder="Your review"></textarea>
                        <input type="number" min="0" max="5" placeholder="Rating" />
                        <button type="submit">Submit Review</button>
                    </form>
                </div>

            </section>
        </div>
    );
}
