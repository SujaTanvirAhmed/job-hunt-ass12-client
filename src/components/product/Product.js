import { useNavigate } from "react-router-dom";
import styles from "./Product.module.css";

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
        <div className={styles['product-card']}>
            <img className={styles['product-img']} src={img} alt="" />
            <h3 className={styles['product-title']}>{title}</h3>
            <p>{desc}</p>
            <h5 className={styles['price-tag']}>BDT <span>{price}</span></h5>
            <button className={styles['product-btn']} onClick={() => handlePurchase(productId)}>Purchase</button>
        </div>
    );
}