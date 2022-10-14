import React, { useContext, useState } from 'react';
import { SelectedCampsiteContext } from "../context/SelectedCampsiteContext";
import { useHistory } from "react-router-dom";
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';

export default function CampsiteDetails() {

    let history = useHistory();
    const [showReviews, setShowReviews] = useState(false);
    const { selectedCampsite } = useContext(SelectedCampsiteContext);
    const selectedCampsiteAmenities = selectedCampsite.amenities;
    const selectedCampsiteReviews = selectedCampsite.reviews;

    const renderAmenities = selectedCampsiteAmenities.map(amenity => (
        <p key={amenity.id}>{amenity.name}</p>
    ))

    const renderReviews = selectedCampsiteReviews.map(review => (
        <ReviewCard
            review={review}
            key={review.id}
        />
    ))

    const handleReviewsDisplay = () => {
        setShowReviews(!showReviews)
    }

    const pushToReviewForm = () => {
        history.push('/review-form')
    }

    return (
        <div>
            <div>
                <h3>{selectedCampsite.name}</h3>
                <p>This is a {selectedCampsite.type.capitalized_name} campsite</p>
            </div>
            <div>
                <h4>Address</h4>
                <p>GPS: {selectedCampsite.coordinates[0]}, {selectedCampsite.coordinates[1]}</p>
                <p>Elevation: {selectedCampsite.elevation}'</p>
            </div>
            <div>
                <p>{selectedCampsite.description}</p>
            </div>
            <div>
                <h4>Amenities:</h4>
                {renderAmenities}
            </div>
            <div>
                <button onClick={handleReviewsDisplay}>Show Reviews</button>
                <button onClick={pushToReviewForm}>Leave a review</button>
                {showReviews &&
                    (selectedCampsiteReviews.length > 0 ?
                        renderReviews :
                        <p>Post the first review!</p>
                    )
                }
            </div>
        </div>
    )
}