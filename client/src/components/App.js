import React, { useState, useEffect } from 'react';
// import { Switch, Route } from "react-router-dom";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import mapStyles from '../styles/mapStyles';

function Map({campsites}) {

  const [selectedCampsite, setSelectedCampsite] = useState(null)

  const renderMarkers = campsites && campsites.map(campsite => (
    <Marker
      key={ campsite.id }
      position={{
        lat: campsite.coordinates[0],
        lng: campsite.coordinates[1]
      }}
      onClick={() => {
        setSelectedCampsite(campsite)
      }}
      icon={{
        url: 'https://www.pngkit.com/png/detail/304-3048988_camping-icon-icon-camping.png',
        scaledSize: new window.google.maps.Size(25, 25)
      }}
    />
    )
  )

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
            setSelectedCampsite(null)
          }}
        >
          <div>
            <h2>{selectedCampsite.name}</h2>
            <p>{selectedCampsite.short_description}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {

  const [campsites, setCampsites] = useState(null)

  useEffect(() => {
    fetch('/campsites')
    .then(res => res.json())
    .then(campsites => setCampsites(campsites))
  }, [])

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