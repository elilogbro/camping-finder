import React, { useState, useEffect } from 'react';

export default function ReviewCard({review}) {

    const [individualReview, setIndividualReview] = useState(null)

    useEffect(() => {
        fetch(`/reviews/${review.id}`)
        .then(res => res.json())
        .then(individualReview => setIndividualReview(individualReview))
    }, [])

    if (!individualReview) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <p>Posted by: {individualReview.user.username} on {individualReview.formatted_created_at}</p>
            <p>{individualReview.review_summary}</p>
        </div>
    )
}