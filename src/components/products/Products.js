import { Product } from "../product/Product";
import styles from "./Products.module.css";

export const Products = ({ products }) => {
    return (
        <div className={styles.products}>
            {products.map(
                (product) => <Product
                    key={product._id}
                    // userEmail={userEmail}
                    productId={product._id}
                    img={product.img}
                    title={product.title}
                    desc={product.desc}
                    price={product.price} />
            )}
        </div>
    );
}