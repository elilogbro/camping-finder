import React, { useContext, useState } from 'react';
import mapStyles from '../styles/mapStyles';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import { useHistory } from 'react-router-dom';
import { SelectedCampsiteContext } from "../context/SelectedCampsiteContext";

function MapRender({campsites}) {

    const { updateSelectedCampsite } = useContext(SelectedCampsiteContext);
    const { selectedCampsite } = useContext(SelectedCampsiteContext);
    let history = useHistory();

    const handleSelectedCampsiteClick = (campsite) => {
        fetch('/select-campsite', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(campsite)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(campsite => {
                    updateSelectedCampsite(campsite)
                })
            }
            else {
                res.json().then(data => console.log(data.errors))
            }
        })
    }

    const renderFreeMarkers = campsites && campsites.map(campsite => (
            <Marker
                key={ campsite.id }
                position={{
                    lat: campsite.coordinates[0],
                    lng: campsite.coordinates[1]
                }}
                onClick={() => {
                    handleSelectedCampsiteClick(campsite)
                }}
                icon={{
                    url: process.env.PUBLIC_URL + 
                        campsite.type.capitalized_name === 'FREE' ?
                            '/white-tent.png' :
                            '/blue-tent.png',
                    scaledSize: new window.google.maps.Size(25, 25)
                }}
            />
        )
    )

    const showSelectedCampsiteDetails = () => {
        history.push(`/campsite/${selectedCampsite.id}`);
    }

    return (
        <div>
            <GoogleMap
                defaultZoom={ 4.5 }
                defaultCenter={{ lat: 39.5, lng: -98.35 }}
                defaultOptions={{ styles: mapStyles }}
            >
                {renderFreeMarkers}
                {selectedCampsite && (
                    <InfoWindow
                        position={{
                            lat: selectedCampsite.coordinates[0],
                            lng: selectedCampsite.coordinates[1]
                        }}
                        onCloseClick={() => {
                            updateSelectedCampsite(null)
                        }}
                    >
                        <div>
                            <h2>{selectedCampsite.name}</h2>
                            <p onClick={showSelectedCampsiteDetails}>See more details...</p>
                            <p>{selectedCampsite.short_description}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(MapRender));

export default function Map({campsites, types}) {

    const [feeType, setFeeType] = useState("")

    if (!types || !campsites) {
        return (
            <div>Loading...</div>
        )
    }

    const filterCampsites = campsites.filter(campsite => campsite.type.capitalized_name.includes(feeType))

    return (
        <div style={{ width: '60vw', height: '60vh' }}>
            <label>Legend</label>
            <img
                src={process.env.PUBLIC_URL + '/map-key.png'}
                alt="map legend"
                style={{
                    height: '6vh',
                    width: '6vw'
                }}    
            />
            <label>Free or Pay?</label>
            <select onChange={e => setFeeType(e.target.value)}>
                <option selected disabled>-- Campsite Type --</option>
                <option value="">All</option>
                <option value="FREE">Free</option>
                <option value="PAY">Pay</option>
            </select>
            <WrappedMap
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCaGRLtMih1sJLdn9LkpoLmfvD1RYG9wS8"} 
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                campsites={filterCampsites}
                types={types}
            />
        </div>
    );
}