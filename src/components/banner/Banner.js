import { Link } from "react-router-dom";
import styles from "./Banner.module.css";

export const Banner = () => {
    return (
        <section className={styles['banner-sec']}>
            <Link to="/all-products" className={styles['cta-btn']}>Explore More Products</Link>
        </section>
    );
}