import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Links from './Links';
import Map from './Map';
import CampsiteDetails from './CampsiteDetails';
import CampsiteForm from './CampsiteForm';
import ReviewForm from './ReviewForm';
import Login from './Login';
import Account from './Account';
import SignUp from './SignUp';

function App() {

  const [campsites, setCampsites] = useState(null)
  const [types, setTypes] = useState(null)

  useEffect(() => {
    fetch('/campsites')
    .then(res => res.json())
    .then(campsites => setCampsites(campsites))
  }, [])

  useEffect(() => {
    fetch('/types')
    .then(res => res.json())
    .then(types => setTypes(types))
  }, [])

  const addNewCampsiteToState = (newCampsite) => {
    setCampsites([...campsites, newCampsite])
  }

  return (
    <div>
      <Links />
      <Switch>
          <Route exact path="/">
            <Map
                campsites={campsites}
                types={types}
            />
          </Route>
          <Route path="/users/:id">
              <Account />
          </Route>
          <Route path="/campsite-form">
              <CampsiteForm 
                  addNewCampsiteToState={addNewCampsiteToState}
                  types={types}   
              />
          </Route>
          <Route path="/signup">
              <SignUp />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/campsite">
              <CampsiteDetails
              />
          </Route>
          <Route path="/review-form">
              <ReviewForm
              />
          </Route>
      </Switch>
    </div>
  );
}

export default App;