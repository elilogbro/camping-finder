import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { FcHighPriority } from 'react-icons/fc';
import { ThreeDots } from 'react-loader-spinner';
import {
    MessageContainer,
    FormContainer,
    Input,
    Label,
    Dropdown,
    Button,
    Error,
    Row,
    Column,
    Confirmation
} from '../styles/CampsiteFormStyles';

export default function CampsiteForm({addNewCampsiteToState, types}) {

    const [errors, setErrors] = useState(null);
    const [confirmationMessage, setConfirmationMessage] = useState(null)
    const [selectedOption, setSelectedOption] = useState(null);
    const [amenities, setAmenities] = useState(null);
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

        console.log(e.target.value)
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
                res.json().then(newCampsite => {
                    addNewCampsiteToState(newCampsite)
                    selectedOption && addAmenitiesToCampsite(newCampsite)
                    setErrors(null)
                    setConfirmationMessage("Campsite submitted successfully!")
                })
            }
            else {
                res.json().then(data => {
                    setErrors(Object.entries(data.errors))
                    setConfirmationMessage(null)
                })
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
            type_id: types[0].id
        })
    }

    const addAmenitiesToCampsite = (newCampsite) => {
        selectedOption.forEach(option => {
            fetch('/amenities', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({campsite_id: newCampsite.id, name: option.label})
            })
            .then(res => {
                if(res.ok) {
                    res.json().then(newAmenity =>
                        console.log(newAmenity)
                    )
                }
                else {
                    res.json().then(data => setErrors(Object.entries(data.errors)))
                }
            })
        })
    }

    useEffect(() => {
        fetch('/amenities')
        .then(res => res.json())
        .then(amenities => setAmenities(amenities))
    }, [])

    if (!types || !amenities) {
        return (
            <ThreeDots />
        )
    }

    let options = [];
    amenities.forEach(amenity => {
        options.push({ value: amenity.name.toLowerCase(), label: amenity.name })
    })

    let valid = true
    if (formData.type_id === '2') {
        valid = Boolean(formData.price > 0)
    }
        
    return (
        <FormContainer onSubmit={handleNewCampsite}>
            <Row>
                <Column>
                    <Label>Latitude</Label>
                    <Input
                        type="text"
                        name="lat"
                        value={formData.lat}
                        onChange={handleCampsiteFormChange}
                    />
                </Column>
                <Column>
                    <Label>Longitude</Label>
                    <Input
                        type="text"
                        name="long"
                        value={formData.long}
                        onChange={handleCampsiteFormChange}
                    />
                </Column>
                <Column>
                    <Label>City/State or Area</Label>
                    <Input
                        type="text"
                        name="city_state"
                        value={formData.city_state}
                        onChange={handleCampsiteFormChange}
                    />
                </Column>
                <Column>
                    <Label>Elevation</Label>
                    <Input
                        type="number"
                        name="elevation"
                        value={formData.elevation}
                        onChange={handleCampsiteFormChange}    
                    />
                </Column>
            </Row>
            <Row>
                <Column>
                    <Label>Campsite Name</Label>
                    <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleCampsiteFormChange}
                    />
                </Column>
                <Column>
                    <Label>Description</Label>
                    <Input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleCampsiteFormChange}   
                    />
                </Column>
            </Row>
            <Row>
                <Column>
                    <Label>Amenities</Label>
                    <Select
                        onChange={setSelectedOption}
                        options={options}
                        isMulti
                    />
                </Column>
            </Row>
            <Row>
                <Column>
                    <Dropdown
                        name="type_id"
                        onChange={handleCampsiteFormChange}  
                    >
                        <option selected disabled> -- Campsite Type -- </option>
                        <option value={types[0].id}>Free</option>
                        <option value={types[1].id}>Pay</option>
                    </Dropdown>
                </Column>
                {formData.type_id === '2' &&
                    <Column>
                        <Label>Price</Label>
                        <Input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleCampsiteFormChange}    
                        />
                    </Column>
                }
            </Row>
            <Button type="submit" disabled={!valid}>{valid ? "Add Campsite" : "Fill out all fields"}</Button>
            <MessageContainer>
                {errors &&
                    errors.map(e => 
                        <Error>
                            <FcHighPriority
                                style={{
                                    paddingRight: '4px'
                                }}
                            />                       
                            {e[0] + " " + e[1]}
                        </Error>
                    )
                }
                {confirmationMessage &&
                    <Confirmation>
                        {confirmationMessage}
                    </Confirmation>
                }
            </MessageContainer>
        </FormContainer>
    )
}