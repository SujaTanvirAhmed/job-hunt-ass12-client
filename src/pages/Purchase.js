import { useLocation, Navigate } from "react-router-dom";

export const Purchase = ({ userEmail }) => {

    const { state } = useLocation();

    console.log(state);

    if (userEmail === "") {
        return <Navigate to="/contact" replace={true} />;
    }
    if (!state?.productId) {
        return <Navigate to="/" replace={true} />;
    }
    return (
        <section className="purchase-sec">
            <h1>Purchase</h1>
            <h2>{state?.productId}</h2>
        </section>
    );

    // const location = useLocation();
    // console.log(location);
    // return <h1>Purchase Page</h1>
}