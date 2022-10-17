import React, { useState } from 'react';

export default function CampsiteForm({addNewCampsiteToState, types}) {

    const [errors, setErrors] = useState();
    const [formData, setFormData] = useState({
        lat: "",
        long: "",
        city_state: "",
        name: "",
        description: "",
        elevation: "",
        price: null,
        type_id: null
    });

    const handleCampsiteFormChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        
        setFormData({
            ...formData, [key] : value
        })
    }
    
    const handleNewCampsite = (e) => {
        e.preventDefault();
        
        fetch('/campsites', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(newCampsite => addNewCampsiteToState(newCampsite))
            }
            else {
                res.json().then(data => setErrors(Object.entries(data.errors)))
            }
        })
        
        setFormData({
            lat: "",
            long: "",
            city_state: "",
            name: "",
            description: "",
            elevation: "",
            price: null,
            type_id: null
        })
    }
    
    if (!types) {
        return (
            <div>Loading...</div>
        )
    }

    let valid = true
    if (formData.type_id === '2') {
        valid = Boolean(formData.price > 0)
    }
        
    return (
        <div>
            <form onSubmit={handleNewCampsite}>
                <label>Latitude</label>
                <input
                    type="text"
                    name="lat"
                    value={formData.lat}
                    onChange={handleCampsiteFormChange}
                />
                <label>Longitude</label>
                <input
                    type="text"
                    name="long"
                    value={formData.long}
                    onChange={handleCampsiteFormChange}
                />
                <label>City/State or Area</label>
                <input
                    type="text"
                    name="city_state"
                    value={formData.city_state}
                    onChange={handleCampsiteFormChange}
                />
                <label>Campsite Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleCampsiteFormChange}
                />
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleCampsiteFormChange}   
                />
                <label>Elevation</label>
                <input
                    type="number"
                    name="elevation"
                    value={formData.elevation}
                    onChange={handleCampsiteFormChange}    
                />
                <select
                    name="type_id"
                    onChange={handleCampsiteFormChange}  
                >
                    <option selected disabled> -- Campsite Type -- </option>
                    <option value={types[0].id}>Free</option>
                    <option value={types[1].id}>Pay</option>
                    <option value={types[2].id}>Permit</option>
                </select>
                {formData.type_id === '2' &&
                    <>
                        <label>Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleCampsiteFormChange}    
                        />
                    </>
                }
                <button type="submit" disabled={!valid}>Add Campsite</button>
            </form>
            {errors &&
                errors.map(e => 
                    <div>
                        <span
                            role="img"
                            aria-label="X"
                        >
                            ❌
                        </span>
                        {e[0] + " " + e[1]}
                    </div>
                )
            }
        </div>
    )
}