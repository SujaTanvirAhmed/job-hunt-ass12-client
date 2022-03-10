import { Link } from "react-router-dom";

export const DashboardNav = ({ userRole, handleLogOut }) => {

    return (
        <nav className="nav dashboard-nav">
            <ul>
                {userRole === "admin" ?
                    <>
                        <li><p className="user-type">Admin</p></li>
                        <li><Link to="/dashboard/manage-orders">Manage All Orders</Link></li>
                        <li><Link to="/dashboard/add-product">Add A Product</Link></li>
                        <li><Link to="/dashboard/make-admin">Make Admin</Link></li>
                        <li><Link to="/dashboard/manage-products">Manage Products</Link></li>
                    </> :
                    <>
                        <li><p className="user-type">User</p></li>
                        <li><Link to="/dashboard/pay">Pay</Link></li>
                        <li><Link to="/dashboard/my-orders">My Orders</Link></li>
                        <li><Link to="/dashboard/review">Review</Link></li>
                    </>
                }
                <li><button onClick={handleLogOut}>Logout</button></li>
            </ul>
        </nav>
    );
}