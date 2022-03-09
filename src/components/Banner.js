import { Link } from "react-router-dom";

export const Banner = () => {
    return (
        <section className="banner-sec">
            <Link to="/all-products" className="cta-btn">Explore More Products</Link>
        </section>
    );
}