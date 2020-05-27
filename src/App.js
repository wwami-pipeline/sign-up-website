import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LocationPage from './pages/LocationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonationsPage';
import firebase from 'firebase';
import config from './config';
import { Switch } from 'react-router-dom';
import OrgPage from './components/OrgPage';
import ResourcesPage from './pages/ResourcesPage';
import OutsideOrgPage from './pages/OutsideOrgPage';

class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
    const db = firebase.database();

    this.state = {
      signedIn: false,
      locations: {},
      locationImages: {},
    };

    db.ref('/')
      .once('value')
      .then((value) => {
        const data = value.toJSON();
        this.state.overviews = data['Overviews'];
        this.state.prerequisites = data['Prerequisites'];
        this.state.resources = data['Resources'];
        this.state.outsideOrgs = data['OutsideOrganizations'];
        this.forceUpdate();
        const locations = data['Locations'];
        Object.keys(locations).forEach((location) => {
          this.state['locations'][location] = locations[location];
          this.state['locationImages'][location] = {};
          this.populateLocationImages(
            location,
            this.state['locations'][location],
            this.state['locationImages'][location]
          );
        });
      });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ signedIn: true });
      }
    });
  }

  populateLocationImages = (locationName, locationData, imageData) => {
    const orgs = Object.keys(locationData);
    const storageRef = firebase.storage().ref();
    let orgCount = 0;
    // Populate Image URLs by organization
    orgs.forEach((org) => {
      // Get org image
      storageRef
        .child('/' + locationName + '/' + org + '.jpg')
        .getDownloadURL()
        .then((url) => {
          imageData[org + '.jpg'] = url;
          orgCount++;
          if (orgCount >= orgs.length) {
            this.forceUpdate();
          }
        })
        .catch(() => {
          orgCount++;
        });
      // Get image for each event in org
      imageData[org] = {};
      const events = Object.keys(locationData[org]);
      let eventsCount = 0;
      events.forEach((event) => {
        storageRef
          .child(
            '/' +
              locationName +
              '/' +
              org +
              '/' +
              locationData[org][event]['Title'] +
              '.jpg'
          )
          .getDownloadURL()
          .then((url) => {
            imageData[org][locationData[org][event]['Title']] = url;
            eventsCount++;
            if (eventsCount >= events.length) {
              this.forceUpdate();
            }
          })
          .catch(() => {
            eventsCount++;
          });
      });
    });
  };

  render() {
    return this.state.overviews === undefined ? (
      <div />
    ) : (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return this.state.overviews ? (
                <MainPage overviews={this.state.overviews} />
              ) : (
                <div />
              );
            }}
          />
          <Route
            path="/location"
            render={() => {
              return this.state.overviews ? (
                <LocationPage
                  prerequisites={this.state.prerequisites}
                  locations={this.state.locations}
                  allImages={this.state.locationImages}
                  overviews={this.state.overviews}
                  signedIn={this.state.signedIn}
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
                locations={this.state['locations']}
                overviews={this.state['overviews']}
                images={this.state['locationImages']}
                signedIn={this.state.signedIn}
              />
            )}
          />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/donate" component={DonatePage} />
          <Route
            path="/resources"
            render={() => <ResourcesPage resources={this.state['resources']} />}
          />
          <Route
            path="/outsideOrganizations"
            render={() => (
              <OutsideOrgPage outsideOrgs={this.state['outsideOrgs']} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
