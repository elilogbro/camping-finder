import React, { useContext, useState } from 'react';
import { SelectedCampsiteContext } from "../context/SelectedCampsiteContext";
import { CurrentUserContext } from '../context/CurrentUserContext';
import { useHistory } from "react-router-dom";
import ReviewCard from './ReviewCard';
import { FaArrowRight } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';
import {
    CampsiteContainer,
    Header,
    Indent,
    Description,
    ColumnContainer,
    SubHeader,
    ReviewsContainer,
    Button,
    ErrorContainer
} from '../styles/CampsiteStyles';


export default function CampsiteDetails() {
    
    let history = useHistory();

    const [showReviews, setShowReviews] = useState(false);
    const [reviewError, setReviewError] = useState(null)
    const { selectedCampsite, reviews } = useContext(SelectedCampsiteContext);
    const { currentUser } = useContext(CurrentUserContext);
    
    if (!selectedCampsite) {
            return <ThreeDots />
        }

    const selectedCampsiteAmenities = selectedCampsite.amenities;

    const renderAmenities = selectedCampsiteAmenities.map(amenity => (
        <Indent
            key={amenity.id}
        >
            <FaArrowRight />  
            {amenity.name}
        </Indent>
    ))

    const renderReviews = reviews && reviews.map(review =>
        <ReviewCard review={review}/>)

    const handleReviewsDisplay = () => {
        setShowReviews(!showReviews)
        setReviewError(null)
    }

    const pushToReviewForm = () => {
        history.push('/review-form')
    }

    const renderError = () => {
        setShowReviews(false)
        setReviewError("Log in or sign up to post a review!")
    }

    return (
        <CampsiteContainer>
            <ColumnContainer>
                <Header>
                        <h2>{selectedCampsite.name}</h2>
                        <Indent>This is a <strong>{selectedCampsite.type.capitalized_name}</strong> campsite</Indent>
                        {selectedCampsite.price &&
                            <Indent>
                                ${selectedCampsite.price} per night
                            </Indent>
                        }
                        <h4>Address</h4>
                        <Indent>GPS: {selectedCampsite.coordinates[0]}, {selectedCampsite.coordinates[1]}</Indent>
                        <Indent>Elevation: {selectedCampsite.elevation}'</Indent>
                </Header>
                <SubHeader>
                    <h4>Amenities:</h4>
                    {renderAmenities}
                </SubHeader>
            </ColumnContainer>
            <Description>
                <h4>User Submitted Description:</h4>
                <Indent>{selectedCampsite.description}</Indent>
            </Description>
            <ReviewsContainer>
                <div>
                    <Button onClick={handleReviewsDisplay}>
                        {showReviews ? 
                            "Hide Reviews" : 
                            "Show Reviews"
                        }
                    </Button>
                    <Button
                        onClick={
                            currentUser ?
                            pushToReviewForm :
                            renderError
                        }
                    >
                        Leave a review
                    </Button>
                </div>
                {showReviews &&
                    (reviews.length > 0 ?
                            renderReviews :
                            <p>No reviews yet!</p>
                    )
                }
            </ReviewsContainer>
            {reviewError &&
                <ErrorContainer>
                    {reviewError}
                </ErrorContainer>
            }
        </CampsiteContainer>
    )
}