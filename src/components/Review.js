import * as React from "react";
import axios from "axios";
import { baseUrl } from "../firebase-auth/FirebaseAuth";

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
        <div className="dashboard-sec">

            <h3 className="dashboard-sub-head">Review</h3>

            <form className="review-form" onSubmit={handleReviewSubmit}>
                <input type="email" value={userEmail} style={{ backgroundColor: "white" }} disabled />
                <textarea rows={6} placeholder="Your review" ref={messageRef} required></textarea>
                <input type="number" min="0" max="5" step="0.1" placeholder="Rating" ref={ratingRef} required />
                <button type="submit">Submit Review</button>
            </form>

        </div>
    );
}