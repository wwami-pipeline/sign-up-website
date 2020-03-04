import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
                <HomePage overviews={this.state.overviews} />
              ) : (
                <div />
              );
            }}
          />
          <Route
            path="/SHIFA"
            render={() => (
              <OrgPage
                path="/SHIFA"
                projects={this.state.Seattle.SHIFA}
                overview={this.state.overviews.SHIFA}
                title="SHIFA"
              />
            )}
          />
          <Route
            path="/CHAP"
            render={() => (
              <OrgPage
                path="/CHAP"
                projects={this.state.Seattle.CHAP}
                overview={this.state.overviews.CHAP}
                title="CHAP"
              />
            )}
          />
          <Route
            path="/UDSM"
            render={() => (
              <OrgPage
                path="/UDSM"
                projects={this.state.Seattle.UDSM}
                overview={this.state.overviews.UDSM}
                title="UDSM"
              />
            )}
          />
          <Route
            path="/DFAD"
            render={() => (
              <OrgPage
                path="/DFAD"
                projects={this.state.Seattle.DFAD}
                overview={this.state.overviews.DFAD}
                title="Doctor For A Day"
              />
            )}
          />
          <Route
            path="/UMOV"
            render={() => (
              <OrgPage
                path="/UMOV"
                projects={this.state.Seattle.UMOV}
                overview={this.state.overviews.UMOV}
                title="University Mobile Outreach Van"
              />
            )}
          />
          <Route
            path="/UTEST"
            render={() => (
              <OrgPage
                path="/UTEST"
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
