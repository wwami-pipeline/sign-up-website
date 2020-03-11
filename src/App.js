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
      overviews: undefined
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
            this.forceUpdate();
          });
        // Populate Alaska organizations
        db.ref('/Alaska')
          .once('value')
          .then(value => {
            this.state.Alaska = value.toJSON();
            this.forceUpdate();
          });
        // Populate Montana organizations
        db.ref('/Montana')
          .once('value')
          .then(value => {
            this.state.Montana = value.toJSON();
            this.forceUpdate();
          });
        // Populate Spokane organizations
        db.ref('/Spokane')
          .once('value')
          .then(value => {
            this.state.Spokane = value.toJSON();
            this.forceUpdate();
          });
        // Populate Seattle organizations
        db.ref('/Wyoming')
          .once('value')
          .then(value => {
            this.state.Wyoming = value.toJSON();
            this.forceUpdate();
          });
      });
  }

  render() {
    return this.state.overviews === undefined ? <div /> : (
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
            path="/Alaska"
            render={() => (
              <HomePage
                projects={this.state.Alaska}
                overviews={this.state.overviews}
                title="Alaska"
              />
            )}
          />
           <Route
            path="/Seattle"
            render={() => (
              <HomePage
                projects={this.state.Seattle}
                overviews={this.state.overviews}
                title="Seattle"
              />
            )}
          />
           <Route
            path="/Spokane"
            render={() => (
              <HomePage
                projects={this.state.Spokane}
                overviews={this.state.overviews}
                title="Spokane"
              />
            )}
          />
           <Route
            path="/Montana"
            render={() => (
              <HomePage
                projects={this.state.Montana}
                overviews={this.state.overviews}
                title="Montana"
              />
            )}
          />
           <Route
            path="/Idaho"
            render={() => (
              <HomePage
                projects={this.state.Idaho}
                overviews={this.state.overviews}
                title="Idaho"
              />
            )}
          />
           <Route
            path="/Wyoming"
            render={() => (
              <HomePage
                projects={this.state.Wyoming}
                overviews={this.state.overviews}
                title="Wyoming"
              />
            )}
          />
          <Route
            path="/Seattle/SHIFA"
            render={() => (
              <OrgPage
                path="/SHIFA"
                projects={this.state.Seattle.SHIFA}
                overview={this.state.overviews}
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
                title="UTEST"
              />
            )}
          />
          <Route
            path="/Others"
            render={() => (
              <OrgPage
                path="/Others"
                projects={this.state.Seattle.Others}
                overview={this.state.overviews.Others}
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
