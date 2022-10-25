import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from '../context/CurrentUserContext';
import { SelectedCampsiteContext } from "../context/SelectedCampsiteContext";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { FcHighPriority } from 'react-icons/fc';
import { ThreeDots } from 'react-loader-spinner';
import {
    TextArea,
    FormContainer,
    Button,
    Button2,
    ErrorContainer
} from '../styles/ReviewFormStyles'

export default function ReviewForm() {

    let history = useHistory();
    const { selectedCampsite, updateReviews } = useContext(SelectedCampsiteContext);
    const { currentUser } = useContext(CurrentUserContext);
    const [reviewSummary, setReviewSummary] = useState(null)
    const [errors, setErrors] = useState(null)
    
    const pushToCampsiteDetails = () => {
        history.push('/campsite')
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
                alert("Review submitted successfully!")
                history.push('/campsite')
            }
            else {
                res.json().then(data => setErrors(Object.entries(data.errors)))
            }
        })
    }

    if (!selectedCampsite) {
        return <ThreeDots />
    }

    // if (!currentUser) {
    //     return <div>Log in or create an account to leave a review!</div>
    // }

    return (
        <FormContainer>
            <Button onClick={pushToCampsiteDetails}><TfiArrowCircleLeft /> Return to campsite</Button>
            <form onSubmit={handleNewReview}>
                <TextArea 
                    type="text"
                    placeholder="How was it? See any bears?"
                    value={reviewSummary}
                    onChange={e => setReviewSummary(e.target.value)}
                    />
                <Button2 type="submit">Submit Review</Button2>
            </form>
            <ErrorContainer>
                {errors &&
                    errors.map(e => 
                        <div>
                            <FcHighPriority
                                style={{
                                    paddingRight: '4px'
                                }}
                            />
                            {e[0] + " " + e[1]}
                        </div>
                    )
                }
            </ErrorContainer>
        </FormContainer>
    )
}