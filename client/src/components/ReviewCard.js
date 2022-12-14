import React, { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { ReviewContainer, LoadContainer } from '../styles/ReviewCardStyles';

export default function ReviewCard({review}) {

    const [individualReview, setIndividualReview] = useState(null)

    useEffect(() => {
        fetch(`/reviews/${review.id}`)
        .then(res => res.json())
        .then(individualReview => setIndividualReview(individualReview))
    }, [])

    if (!individualReview) {
        return (
            <LoadContainer>
                <ThreeDots />
            </LoadContainer>
        )
    }

    return (
        <ReviewContainer>
            <p>Posted by: {individualReview.user.username} on {individualReview.formatted_created_at}</p>
            <p>{individualReview.review_summary}</p>
        </ReviewContainer>
    )
}