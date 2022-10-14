import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SelectedCampsiteProvider } from '../context/SelectedCampsiteContext';
import { CurrentUserProvider } from '../context/CurrentUserContext';
// import { CurrentUserContext } from "../context/CurrentUserContext";
import Links from './Links';
import Map from './Map';
import CampsiteDetails from './CampsiteDetails';
import CampsiteForm from './CampsiteForm';
import ReviewForm from './ReviewForm';
import Login from './Login';
import Account from './Account';

function App() {

  const [campsites, setCampsites] = useState(null)
  const [types, setTypes] = useState(null)
  // const [currentUser, setCurrentUser] = useState(null)
  
  // const { updateCurrentUser } = useContext(CurrentUserContext);
  // const { currentUser } = useContext(CurrentUserContext);


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

  // useEffect(() => {
  //   fetch('/me')
  //     .then(res => {
  //       if(res.ok) {
  //         res.json()
  //         .then(currentUser => setCurrentUser(currentUser))
  //       }
  //     })
  // }, [])

  const addNewCampsiteToState = (newCampsite) => {
    setCampsites([...campsites, newCampsite])
  }

  return (
    <div>
      <SelectedCampsiteProvider>
        <CurrentUserProvider>
          <Links />
          <Switch>
              <Route exact path="/">
                <Map
                    campsites={campsites}
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
                  
              </Route>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/campsite-details">
                  <CampsiteDetails />
              </Route>
              <Route path="/review-form">
                  <ReviewForm />
              </Route>
          </Switch>
        </CurrentUserProvider>
      </SelectedCampsiteProvider>
    </div>
  );
}

export default App;