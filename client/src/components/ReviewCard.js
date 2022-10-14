import React from 'react';

export default function ReviewCard({review}) {

    return (
        <div>
            <p>{review.review_summary}</p>
        </div>
    )
}