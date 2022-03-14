import * as React from "react";
import axios from "axios";
import { baseUrl } from "../../firebase-auth/FirebaseAuth";
import styles from "./Reviews.module.css";

export const Reviews = () => {

    const [reviews, setReviews] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${baseUrl}/reviews`)
            .then((response) => {
                setReviews(response.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <section className={styles['reviews-sec']}>
            <h1 className="section-title">What our valued customers say about us!</h1>
            <div className={styles['reviews-group']}>
                {
                    reviews.map((review) => <div key={review._id}>
                        <p className={styles['user-mail']}>{review.userMail}</p>
                        <p className={styles['user-rating']}>Rating given: {review.rating}</p>
                        <p className={styles['user-msg']}>{review.msg}</p>
                    </div>)
                }
            </div>
        </section>
    );
}