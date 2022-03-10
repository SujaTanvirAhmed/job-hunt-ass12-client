import * as React from "react";
import axios from "axios";
import { baseUrl } from "../firebase-auth/FirebaseAuth";
import { Banner } from "../components/Banner";
import { Product } from "../components/Product";
import { Reviews } from "../components/Reviews";

export const Home = ({ userEmail }) => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${baseUrl}/products`)
            .then((response) => {
                setProducts(response.data.slice(0, 6));
                // console.log(response.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <>
            <Banner />
            <div className="container">
                <h1 className="section-title"
                    style={{ marginTop: "50px", marginBottom: "-36px" }}
                >Our featured products</h1>
                <div className="products">

                    {products.map(
                        (product) => <Product
                            key={product._id}
                            userEmail={userEmail}
                            productId={product._id}
                            img={product.img}
                            title={product.title}
                            desc={product.desc}
                            price={product.price} />
                    )}
                </div>
                <Reviews />
            </div>
        </>
    );
}