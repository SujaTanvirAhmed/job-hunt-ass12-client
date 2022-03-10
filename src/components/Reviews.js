import * as React from "react";
import axios from "axios";
import { baseUrl } from "../firebase-auth/FirebaseAuth";

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
        <section className="reviews-sec">
            <h1 className="section-title">What our valued customers say about us!</h1>
            <div className="reviews-group">
                {
                    reviews.map((review) => <div key={review._id}>
                        <p className="user-mail">{review.userMail}</p>
                        <p className="user-rating">Rating given: {review.rating}</p>
                        <p className="user-msg">{review.msg}</p>
                    </div>)
                }
            </div>
        </section>
    );
}