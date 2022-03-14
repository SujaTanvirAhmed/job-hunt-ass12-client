import * as React from "react";
import axios from "axios";
import { baseUrl } from "../../firebase-auth/FirebaseAuth";
import styles from "./Review.module.css";

export const Review = ({ userEmail }) => {

    const ratingRef = React.useRef("");
    const messageRef = React.useRef("");

    const handleReviewSubmit = (event) => {
        event.preventDefault();
        console.log(ratingRef.current.value);
        console.log(messageRef.current.value);
        axios.post(`${baseUrl}/reviews`, {
            userMail: userEmail,
            msg: messageRef.current.value,
            rating: ratingRef.current.value
        }).then((response) => {
            console.log(response.data);
            ratingRef.current.value = "";
            messageRef.current.value = "";
        }).catch((err) => {
            console.log(err.message);
        })
    }

    return (
        <div className={styles['dashboard-sec']}>

            <h3 className={styles['dashboard-sub-head']}>Review</h3>

            <form className={styles['review-form']} onSubmit={handleReviewSubmit}>
                <input
                    type="email"
                    value={userEmail}
                    style={{ backgroundColor: "white" }}
                    className={styles['form-input']}
                    disabled />

                <textarea
                    rows={6}
                    placeholder="Your review"
                    ref={messageRef}
                    className={styles['form-input']}
                    required></textarea>

                <input
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    placeholder="Rating"
                    ref={ratingRef}
                    className={styles['form-input']}
                    required />

                <button
                    type="submit"
                    className={styles['form-btn']}
                >Submit Review</button>
            </form>

        </div>
    );
}