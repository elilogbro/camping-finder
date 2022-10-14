import React, { useContext } from 'react';
import mapStyles from '../styles/mapStyles';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import { useHistory } from 'react-router-dom';
import { SelectedCampsiteContext } from "../context/SelectedCampsiteContext";


function MapRender({campsites}) {

    const { updateSelectedCampsite } = useContext(SelectedCampsiteContext);
    const { selectedCampsite } = useContext(SelectedCampsiteContext);
    let history = useHistory();

    const handleSelectedCampsiteClick = (campsite) => {
        updateSelectedCampsite(campsite)
    }

    const renderMarkers = campsites && campsites.map(campsite => (
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
                url: 'https://www.pngkit.com/png/detail/304-3048988_camping-icon-icon-camping.png',
                scaledSize: new window.google.maps.Size(25, 25)
            }}
        />
    ))

    const showSelectedCampsiteDetails = () => {
        history.push('/campsite-details');
    }

    return (
        <GoogleMap
            defaultZoom={ 4 }
            defaultCenter={{ lat: 39.5, lng: -98.35 }}
            defaultOptions={{ styles: mapStyles}}
        >
            {renderMarkers}
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
    );
}

const WrappedMap = withScriptjs(withGoogleMap(MapRender));

export default function Map({campsites}) {

    return (
        <div style={{ width: '40vw', height: '40vh' }}>
            <WrappedMap
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCaGRLtMih1sJLdn9LkpoLmfvD1RYG9wS8"} 
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                campsites={campsites}
            />
        </div>
    );
}