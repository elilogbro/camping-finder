import React, { useState, useEffect } from 'react';

export default function ReviewCard({review}) {

    const [currentReview, setCurrentReview] = useState(null)

    useEffect(() => {
        fetch(`/reviews/${review.id}`)
        .then(res => res.json())
        .then(currentReview => setCurrentReview(currentReview))
    }, [])

    if (!currentReview) {
        return (
            <div>Loading...</div>
        )
    }

    console.log(currentReview.formatted_created_at)

    return (
        <div>
            <p>Posted by: {currentReview.user.username} on {currentReview.formatted_created_at}</p>
            <p>{currentReview.review_summary}</p>
        </div>
    )
}