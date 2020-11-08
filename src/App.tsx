import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LocationPage from './pages/LocationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonationsPage';
import firebase from 'firebase';
import config from './config';
import OrgPage from './components/OrgPage';
import ResourcesPage from './pages/ResourcesPage';
import OutsideOrgPage from './pages/OutsideOrgPage';

firebase.initializeApp(config);
const db = firebase.database();

const useForceUpdate = () => {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

const App: React.FC = () => {
  const forceUpdate = useForceUpdate();

  // Highest-Level State
  let [signedIn, setSignedIn] = useState<boolean>(false);
  let [locations, setLocations] = useState<any>();
  let [locationImages, setLocationImages] = useState<any>();
  let [overviews, setOverviews] = useState<any>();
  let [prerequisites, setPrerequisites] = useState<any>();
  let [resources, setResources] = useState<any>();
  let [outsideOrgs, setOutsideOrgs] = useState<any>();

  useEffect(() => {
    db.ref('/')
      .once('value')
      .then((value) => {
        const data = value.toJSON();
        setOverviews(data ? data['Overviews'] : null);
        setPrerequisites(data ? data['Prerequisites'] : null);
        setResources(data ? data['Resources'] : null);
        setOutsideOrgs(data ? data['OutsideOrganizations'] : null);
        let tempLocationImages = {};
        let tempLocations = {};
        const locationData = data ? data['Locations'] : {};
        Object.keys(locationData).forEach((location) => {
          tempLocations[location] = locationData[location];
          tempLocationImages[location] = {};
          populateLocationImages(
            location,
            tempLocations[location],
            tempLocationImages
          ).then(() => {
            setLocations(tempLocations);
            setLocationImages(tempLocationImages);
            setTimeout(() => {forceUpdate(); }, 1); // Bug: Need to force render, and need to wait 1ms for images
          })
        });
        setLocations(tempLocations);
        setLocationImages(tempLocationImages);
      });
  }, [])

  const populateLocationImages = async (locationName, locationData, allImageData) => {
    return new Promise((res, err) => {
      const orgs = Object.keys(locationData);
      const storageRef = firebase.storage().ref();
      // Populate Image URLs by organization
      orgs.forEach(async (org) => {
        // Get org image
        const url = await storageRef.child('/' + locationName + '/' + org + '.jpg').getDownloadURL().catch(err => { })
        allImageData[locationName][org + '.jpg'] = url;

        // Get image for each event in org
        allImageData[locationName][org] = {};
        const events = Object.keys(locationData[org]);
        events.forEach(async (event) => {
          const eventUrl = await storageRef
            .child(
              '/' +
              locationName +
              '/' +
              org +
              '/' +
              locationData[org][event]['Title'] +
              '.jpg'
            )
            .getDownloadURL().catch(err => { })
          allImageData[locationName][org][locationData[org][event]['Title']] = eventUrl;
        });

        res();
      });
    })
  };

  return overviews === undefined ? (
    <div />
  ) : (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return overviews ? <MainPage /> : <div />;
            }}
          />
          <Route
            path="/location"
            render={() => {
              return overviews ? (
                <LocationPage
                  prerequisites={prerequisites}
                  locations={locations}
                  allImages={locationImages}
                  overviews={overviews}
                  signedIn={signedIn}
                />
              ) : (
                  <div />
                );
            }}
          />
          {/* Routes for each organization */}
          <Route
            path="/org"
            render={() => (
              <OrgPage
                locations={locations}
                overviews={overviews}
                images={locationImages}
                signedIn={signedIn}
              />
            )}
          />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/donate" component={DonatePage} />
          <Route
            path="/resources"
            render={() => <ResourcesPage resources={resources} />}
          />
          <Route
            path="/outsideOrganizations"
            render={() => (
              <OutsideOrgPage outsideOrgs={outsideOrgs} />
            )}
          />
        </Switch>
      </Router>
    );
}

export default App;
