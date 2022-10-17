import React, { useState, createContext, useEffect } from 'react';

export const SelectedCampsiteContext = createContext();

export const SelectedCampsiteProvider = ({children}) => {

    const [selectedCampsite, setSelectedCampsite] = useState(null)

    const updateSelectedCampsite = (value) => {
        setSelectedCampsite(value)
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
            value={{ selectedCampsite, updateSelectedCampsite }}
        >
            {children}
        </SelectedCampsiteContext.Provider>
    )
}