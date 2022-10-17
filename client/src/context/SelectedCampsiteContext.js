import React, { useState, createContext, useEffect } from 'react';

export const SelectedCampsiteContext = createContext();

export const SelectedCampsiteProvider = ({children}) => {

    const [selectedCampsite, setSelectedCampsite] = useState(null)
    const [reviews, setReviews] = useState(null)

    const updateSelectedCampsite = (value) => {
        setSelectedCampsite(value)
        if (value) setReviews(value.reviews)
    }

    const updateReviews = (value) => {
        setReviews([...reviews, value])
    }

    useEffect(() => {
        fetch('/selected-campsite')
        .then(res => {
            if (res.ok) {
                res.json()
                .then(selectedCampsite => updateSelectedCampsite(selectedCampsite))
            }
        })
    }, [])
    
    return (
        <SelectedCampsiteContext.Provider
            value={{ selectedCampsite, reviews, updateSelectedCampsite, updateReviews }}
        >
            {children}
        </SelectedCampsiteContext.Provider>
    )
}