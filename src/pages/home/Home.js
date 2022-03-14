import * as React from "react";
import axios from "axios";
import { baseUrl } from "../../firebase-auth/FirebaseAuth";
import { Banner } from "../../components/banner/Banner";
import { Reviews } from "../../components/reviews/Reviews";
import { Products } from "../../components/products/Products";
import styles from "./Home.module.css";

export const Home = () => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${baseUrl}/products`)
            .then((response) => {
                setProducts(response.data.slice(0, 6));
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <>
            <Banner />
            <div className="container">
                <h1 className={`${styles['home-title']} section-title`}
                >Our featured products</h1>

                <Products products={products} />

                <Reviews />
            </div>
        </>
    );
}