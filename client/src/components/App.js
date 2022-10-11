import React from 'react';
// import { useState, useEffect } from "react";
// import { Switch, Route } from "react-router-dom";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={ 4 }
      defaultCenter={{ lat: 39.5, lng: -98.35 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {

  return (
     <div style={{ width: '40vw', height: '40vh' }}>
      <WrappedMap
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCaGRLtMih1sJLdn9LkpoLmfvD1RYG9wS8"} 
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        />
     </div>
  );
}