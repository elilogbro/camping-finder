import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { SelectedCampsiteContext } from "../context/SelectedCampsiteContext";

export default function ReviewForm() {

    let history = useHistory();
    const { selectedCampsite } = useContext(SelectedCampsiteContext);
    
    const pushToCampsiteDetails = () => {
        history.push('/campsite-details')
    }

    return (
        <div>
            <button onClick={pushToCampsiteDetails}>Back</button>
            <p>{selectedCampsite.id}</p>
        </div>
    )
}