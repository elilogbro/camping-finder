import React, { useContext, useState } from 'react';
import SnazzyMapStyles from '../styles/SnazzyMapStyles';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import { useHistory } from 'react-router-dom';
import { SelectedCampsiteContext } from "../context/SelectedCampsiteContext";
import { ThreeDots } from 'react-loader-spinner';
import { CgMoreO } from 'react-icons/cg';
import {
    MapContainer,
    MapOptionsContainer,
    LegendContainer,
    DropdownContainer,
    InfoBox,
    Label,
    P,
    P2,
    Image,
    Dropdown,
    Option
} from '../styles/MapStyles';

function MapRender({campsites}) {

    const [errors, setErrors] = useState(null)
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
                res.json().then(campsite => updateSelectedCampsite(campsite))
            }
            else {
                res.json().then(data => setErrors(data.errors))
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

    const handleDeselectedCampsite = () => {
        fetch('/deselected-campsite', {
            method: "DELETE"
        })
        updateSelectedCampsite(null)
    }

    return (
        <div>
            <GoogleMap
                defaultZoom={ 4.5 }
                defaultCenter={{ lat: 39.5, lng: -98.35 }}
                defaultOptions={{ styles: SnazzyMapStyles }}
            >
                {renderFreeMarkers}
                {selectedCampsite && (
                    <InfoWindow
                        position={{
                            lat: selectedCampsite.coordinates[0],
                            lng: selectedCampsite.coordinates[1]
                        }}
                        onCloseClick={handleDeselectedCampsite}
                    >
                        <InfoBox>
                            <h2>{selectedCampsite.name}</h2>
                            <P>{selectedCampsite.short_description}</P>
                            <P2 onClick={showSelectedCampsiteDetails}><CgMoreO style={{fontSize: 'x-large'}}/></P2>
                        </InfoBox>
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
            <ThreeDots />
        )
    }

    const filterCampsites = campsites.filter(campsite => campsite.type.capitalized_name.includes(feeType))

    return (
        <MapContainer>
            <MapOptionsContainer>
                <LegendContainer>
                    <Label>Legend</Label>
                    <Image
                        src={process.env.PUBLIC_URL + '/map-key.png'}
                        alt="map legend"
                    />
                </LegendContainer>
                <DropdownContainer>
                    <Label>Free or Pay?</Label>
                    <Dropdown onChange={e => setFeeType(e.target.value)}>
                        <Option value="">All</Option>
                        <Option value="FREE">Free</Option>
                        <Option value="PAY">Pay</Option>
                    </Dropdown>
                </DropdownContainer>
            </MapOptionsContainer>
            <WrappedMap
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCaGRLtMih1sJLdn9LkpoLmfvD1RYG9wS8"} 
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                campsites={filterCampsites}
                types={types}
            />
        </MapContainer>
    );
}