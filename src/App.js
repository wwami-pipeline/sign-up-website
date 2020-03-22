import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonationsPage';
import firebase from 'firebase';
import config from './config';
import { Switch } from 'react-router-dom';
import OrgPage from './components/OrgPage';
import ResourcesPage from './pages/ResourcesPage';

class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
    const db = firebase.database();

    this.state = {
      Seattle: undefined,
      Alaska: undefined,
      Montana: undefined,
      Spokane: undefined,
      Wyoming: undefined,
      overviews: undefined,
      SeattleImages: {},
      AlaskaImages: {},
      MontanaImages: {},
      SpokaneImages: {},
      WyomingImages: {}
    };

    // Populate overviews
    db.ref('/Overviews')
      .once('value')
      .then(value => {
        this.state.overviews = value.toJSON();
        // Populate Seattle organizations
        db.ref('/Seattle')
          .once('value')
          .then(value => {
            this.state.Seattle = value.toJSON();
            this.populateLocationImages(
              'Seattle',
              this.state.Seattle,
              this.state.SeattleImages
            );
          });
        // Populate Alaska organizations
        db.ref('/Alaska')
          .once('value')
          .then(value => {
            this.state.Alaska = value.toJSON();
            this.populateLocationImages(
              'Alaska',
              this.state.Alaska,
              this.state.AlaskaImages
            );
          });
        // Populate Montana organizations
        db.ref('/Montana')
          .once('value')
          .then(value => {
            this.state.Montana = value.toJSON();
            this.populateLocationImages(
              'Montana',
              this.state.Montana,
              this.state.MontanaImages
            );
          });
        // Populate Spokane organizations
        db.ref('/Spokane')
          .once('value')
          .then(value => {
            this.state.Spokane = value.toJSON();
            this.populateLocationImages(
              'Spokane',
              this.state.Spokane,
              this.state.SpokaneImages
            );
          });
        // Populate Seattle organizations
        db.ref('/Wyoming')
          .once('value')
          .then(value => {
            this.state.Wyoming = value.toJSON();
            this.populateLocationImages(
              'Wyoming',
              this.state.Wyoming,
              this.state.WyomingImages
            );
          });
      });
  }

  populateLocationImages = (locationName, locationData, imageData) => {
    const orgs = Object.keys(locationData);
    const storageRef = firebase.storage().ref();
    let orgCount = 0;
    // Populate Image URLs by organization
    orgs.forEach(org => {
      // Get org image
      storageRef
        .child('/' + locationName + '/' + org + '.jpg')
        .getDownloadURL()
        .then(url => {
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
      events.forEach(event => {
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
          .then(url => {
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
                <MainPage
                  overviews={this.state.overviews}
                  images={this.state.SeattleImages}
                />
              ) : (
                <div />
              );
            }}
          />
          <Route
            exact
            path="/Seattle"
            render={() => {
              return this.state.overviews ? (
                <HomePage
                  overviews={this.state.overviews}
                  images={this.state.SeattleImages}
                  title="Seattle"
                />
              ) : (
                <div />
              );
            }}
          />
          <Route
            path="/Seattle/SHIFA"
            render={() => (
              <OrgPage
                path="/Seattle/SHIFA"
                projects={this.state.Seattle.SHIFA}
                overview={this.state.overviews.SHIFA}
                images={this.state.SeattleImages['SHIFA']}
                title="SHIFA"
              />
            )}
          />
          <Route
            path="/Seattle/CHAP"
            render={() => (
              <OrgPage
                path="/Seattle/CHAP"
                projects={this.state.Seattle.CHAP}
                overview={this.state.overviews.CHAP}
                images={this.state.SeattleImages['CHAP']}
                title="CHAP"
              />
            )}
          />
          <Route
            path="/Seattle/UDSM"
            render={() => (
              <OrgPage
                path="/Seattle/UDSM"
                projects={this.state.Seattle.UDSM}
                overview={this.state.overviews.UDSM}
                images={this.state.SeattleImages['UDSM']}
                title="UDSM"
              />
            )}
          />
          <Route
            path="/Seattle/DFAD"
            render={() => (
              <OrgPage
                path="/Seattle/DFAD"
                projects={this.state.Seattle.DFAD}
                overview={this.state.overviews.DFAD}
                images={this.state.SeattleImages['DFAD']}
                title="Doctor For A Day"
              />
            )}
          />
          <Route
            path="/Seattle/UMOV"
            render={() => (
              <OrgPage
                path="/Seattle/UMOV"
                projects={this.state.Seattle.UMOV}
                overview={this.state.overviews.UMOV}
                images={this.state.SeattleImages['UMOV']}
                title="University Mobile Outreach Van"
              />
            )}
          />
          <Route
            path="/Seattle/UTEST"
            render={() => (
              <OrgPage
                path="/Seattle/UTEST"
                projects={this.state.Seattle.UTEST}
                overview={this.state.overviews.UTEST}
                images={this.state.SeattleImages['UTEST']}
                title="UTEST"
              />
            )}
          />
          <Route
            path="/Seattle/Others"
            render={() => (
              <OrgPage
                path="/Seattle/Others"
                projects={this.state.Seattle.Others}
                overview={{ description: 'Other Projects in Seattle' }}
                title="Others"
              />
            )}
          />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/donate" component={DonatePage} />
          <Route path="/resources" component={ResourcesPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
