import * as React from "react";
import axios from "axios";
import { baseUrl } from "../firebase-auth/FirebaseAuth";
import { Product } from "../components/Product";

export const AllProducts = () => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${baseUrl}/products`)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <section className="products-sec">
            <h1 className="page-title">All Products</h1>
            {/* <h1 className="section-title">All Products</h1> */}
            <div className="container">
                <div className="products">
                    {products.map((product) => <Product
                        key={product.id}
                        productId={product.id}
                        img={product.img}
                        title={product.title}
                        desc={product.desc}
                        price={product.price} />
                    )}
                </div>
            </div>
        </section>
    );
}