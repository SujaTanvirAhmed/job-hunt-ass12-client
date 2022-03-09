import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ authenticating, userEmail, children }) => {

    if (authenticating) {
        return <h1>Loading...</h1>;
    }
    if (userEmail === "") {
        return <Navigate to="/contact" replace />;
    }
    return children;
}