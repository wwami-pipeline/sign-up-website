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
      Seattle: {},
      Overviews: {}
    };

    // Populate Seattle organizations
    db.ref('/Seattle')
      .once('value')
      .then(value => {
        const SeattleOrgs = value.toJSON();
        for (let org in SeattleOrgs) {
          this.state.Seattle[org] = [];
          const keys = Object.keys(org);
          for (let key in keys) {
            this.state.Seattle[org].push(SeattleOrgs[org][key]);
          }
        }
        this.forceUpdate();
      });

    // Populate overviews
    db.ref('/Overviews')
      .once('value')
      .then(value => {
        this.state.overviews = value.toJSON();
        this.forceUpdate();
      });
  }
  
  render() {
    return (
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
                projects={this.state.Seattle.SHIFA}
                description={this.state.overviews.SHIFA}
                title="SHIFA"
              />
            )}
          />
          <Route
            path="/CHAP"
            render={() => (
              <OrgPage
                projects={this.state.Seattle.CHAP}
                description={this.state.overviews.CHAP}
                title="CHAP"
              />
            )}
          />
          <Route
            path="/UDSM"
            render={() => (
              <OrgPage
                projects={this.state.Seattle.UDSM}
                description={this.state.overviews.UDSM}
                title="UDSM"
              />
            )}
          />
          <Route
            path="/DFAD"
            render={() => (
              <OrgPage
                projects={this.state.Seattle.DFAD}
                description={this.state.overviews.DFAD}
                title="DFAD"
              />
            )}
          />
          <Route
            path="/UMOV"
            render={() => (
              <OrgPage
                projects={this.state.Seattle.UMOV}
                description={this.state.overviews.UMOV}
                title="Mobile Health Outreach Van"
              />
            )}
          />
          <Route
            path="/UTEST"
            render={() => (
              <OrgPage
                projects={this.state.Seattle.UTEST}
                description={this.state.overviews.UTEST}
                title="UTEST"
              />
            )}
          />
          <Route
            path="/Others"
            render={() => (
              <OrgPage
                projects={this.state.Seattle.Others}
                description={this.state.overviews.Others}
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
