import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ authenticating, userEmail, children }) => {

    const location = useLocation();

    if (authenticating) {
        return <h1>Loading...</h1>;
    }

    if (userEmail === "") {
        return <Navigate to="/contact" state={{ destUrl: location.pathname }} />;
    }

    console.log(location);

    return children;
}