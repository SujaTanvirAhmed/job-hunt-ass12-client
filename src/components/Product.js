import { useNavigate } from "react-router-dom";

export const Product = ({ userEmail, productId, img, title, desc, price }) => {

    const navigate = useNavigate();

    const handlePurchase = (productId) => {
        const stateVals = { productId: productId, destUrl: "/purchase" };
        if (userEmail === "") {
            navigate("/contact", { state: stateVals });
        }
        else {
            navigate("/purchase", { state: stateVals });
        }
    }

    return (
        <div className="product-card">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{desc}</p>
            <h5 className="price-tag">BDT <span>{price}</span></h5>
            <button onClick={() => handlePurchase(productId)}>Purchase</button>
        </div>
    );
}