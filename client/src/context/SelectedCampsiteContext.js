import React, { useState, createContext } from 'react';

export const SelectedCampsiteContext = createContext();

export const SelectedCampsiteProvider = ({children}) => {

    const [selectedCampsite, setSelectedCampsite] = useState(null)

    const updateSelectedCampsite = (value) => {
        setSelectedCampsite(value)
    }

    return (
        <SelectedCampsiteContext.Provider
            value={{ selectedCampsite, updateSelectedCampsite }}
        >
            {children}
        </SelectedCampsiteContext.Provider>
    )
}