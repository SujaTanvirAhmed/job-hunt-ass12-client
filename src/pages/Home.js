import * as React from "react";
import axios from "axios";
import { baseUrl } from "../firebase-auth/FirebaseAuth";
import { Banner } from "../components/Banner";
import { Product } from "../components/Product";

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
            <h1>Home</h1>
            <div className="container">
                <div className="products">
                    {products.map(
                        (product) => <Product
                            key={product.id}
                            userEmail={userEmail}
                            productId={product.id}
                            img={product.img}
                            title={product.title}
                            desc={product.desc}
                            price={product.price} />
                    )}
                </div>
            </div>
        </>
    );
}