import * as React from "react";
import { useLocation, Navigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../firebase-auth/FirebaseAuth";
import styles from "./Purchase.module.css";

export const Purchase = ({ userEmail }) => {

    const { state } = useLocation();
    const productId = state?.productId;
    const [product, setProduct] = React.useState({});
    const [total, setTotal] = React.useState(product.price);

    React.useEffect(() => {
        axios.get(`${baseUrl}/products/${productId}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [productId]);

    const nameRef = React.useRef("");
    const qtyRef = React.useRef(1);
    // const totalPrice = 1;

    if (userEmail === "") {
        return <Navigate to="/contact" replace={true} />;
    }
    if (!state?.productId) {
        return <Navigate to="/" replace={true} />;
    }

    const handlePurchaseSubmit = (event) => {
        event.preventDefault();
        const order = {
            email: userEmail,
            name: nameRef.current.value,
            productId: productId,
            qty: qtyRef.current.value,
            total: total
        };
        axios.post(`${baseUrl}/orders`, {
            order: order
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const handleCalculate = () => {
        setTotal(parseInt(qtyRef.current.value) * parseFloat(product.price));
    }

    return (
        <section className={styles['purchase-sec']}>
            <div className="container">
                <h1 className={styles['purchase-title']}>Purchase</h1>
                <div className={styles['purchase-group']}>
                    <div>
                        <img className={styles['purchase-img']} src={product.img} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.desc}</p>
                        <p>BDT {product.price}</p>
                    </div>
                    <div>
                        <form className={`styles['purchase-form'] review-form`} onSubmit={handlePurchaseSubmit}>
                            <input type="email" value={userEmail} disabled />
                            <input type="text" placeholder="Your name" ref={nameRef} required />
                            <input type="number" placeholder="Purchase Qty" min="1" ref={qtyRef} required />
                            <div className={styles['calc-group']}>
                                <button onClick={handleCalculate} style={{ padding: "10px 20px", border: "0", backgroundColor: "lightgreen" }}>Calculate</button>
                                <p>Total: {total} BDT</p>
                            </div>
                            <button className={styles['purchase-btn']} type="submit">Place Order</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

    // const location = useLocation();
    // console.log(location);
    // return <h1>Purchase Page</h1>
}