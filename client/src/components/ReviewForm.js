import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from '../context/CurrentUserContext';
import { SelectedCampsiteContext } from "../context/SelectedCampsiteContext";

export default function ReviewForm() {

    let history = useHistory();
    const { selectedCampsite, reviews, updateReviews } = useContext(SelectedCampsiteContext);
    const { currentUser } = useContext(CurrentUserContext);
    const [reviewSummary, setReviewSummary] = useState(null)
    const [errors, setErrors] = useState(null)
    
    const pushToCampsiteDetails = () => {
        history.push('/campsite')
    }

    if (!selectedCampsite) {
        return <div>Loading...</div>
    }

    if (!currentUser) {
        return <div>Log in or create an account to leave a review!</div>
    }

    const addToReviews = (newReview) => {
        updateReviews(newReview)
    }

    const handleNewReview = (e) => {
        e.preventDefault();
        
        fetch('/reviews', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                campsite_id: selectedCampsite.id,
                review_summary: reviewSummary
            })
        })
        .then(res => {
            if(res.ok) {
                res.json().then(newReview => addToReviews(newReview))
                setReviewSummary("")
            }
            else {
                res.json().then(data => setErrors(Object.entries(data.errors)))
            }
        })
    }

    return (
        <div>
            <button onClick={pushToCampsiteDetails}>Return to campsite</button>
            <form onSubmit={handleNewReview}>
                <input 
                    type="text"
                    placeholder="How was it? See any bears?"
                    value={reviewSummary}
                    onChange={e => setReviewSummary(e.target.value)}
                />
                <button type="submit">Submit Review</button>
            </form>
            {errors &&
                errors.map(e => 
                    <div>
                        <span
                            role="img"
                            aria-label="X"
                        >
                            ❌
                        </span>
                        {e[0] + " " + e[1]}
                    </div>
                )
            }
        </div>
    )
}