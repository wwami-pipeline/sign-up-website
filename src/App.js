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

    let SHIFA = [];
    db.ref('/SHIFA')
      .once('value')
      .then(value => {
        const items = value.toJSON();
        for (let key in items) {
          SHIFA.push(items[key]);
        }
      });

    let CHAP = [];
    db.ref('/CHAP')
      .once('value')
      .then(value => {
        const items = value.toJSON();
        for (let key in items) {
          CHAP.push(items[key]);
        }
      });

    let UDSM = [];
    db.ref('/UDSM')
      .once('value')
      .then(value => {
        const items = value.toJSON();
        for (let key in items) {
          UDSM.push(items[key]);
        }
      });

    let DFAD = [];
    db.ref('/DFAD')
      .once('value')
      .then(value => {
        const items = value.toJSON();
        for (let key in items) {
          console.log("PUSH: " + items[key]);
          DFAD.push(items[key]);
        }
      });

    let UTEST = [];
    db.ref('/UTEST')
      .once('value')
      .then(value => {
        const items = value.toJSON();
        for (let key in items) {
          console.log("PUSH: " + items[key]);
          UTEST.push(items[key]);
        }
      });

    let Others = [];
    db.ref('/Others')
      .once('value')
      .then(value => {
        const items = value.toJSON();
        for (let key in items) {
          console.log("PUSH: " + items[key]);
          Others.push(items[key]);
        }
      });

    let overviews = {};
    db.ref('/Overviews')
      .once('value')
      .then(value => {
        this.state.overviews = value.toJSON();
        this.forceUpdate();
      });

    this.state = {
      SHIFA,
      CHAP,
      UDSM,
      DFAD,
      UTEST,
      Others,
      overviews
    };
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact path="/"
            render={() => {return this.state.overviews ? <HomePage overviews={this.state.overviews} /> : <div />}}
          />
          <Route
            path="/SHIFA"
            render={() => (
              <OrgPage
                projects={this.state.SHIFA}
                description={this.state.overviews.SHIFA}
                title="SHIFA"
              />
            )}
          />
          <Route
            path="/CHAP"
            render={() => (
              <OrgPage
                projects={this.state.CHAP}
                description={this.state.overviews.CHAP}
                title="CHAP"
              />
            )}
          />
          <Route
            path="/UDSM"
            render={() => (
              <OrgPage
                projects={this.state.UDSM}
                description={this.state.overviews.UDSM}
                title="UDSM"
              />
            )}
          />
          <Route
            path="/DFAD"
            render={() => (
              <OrgPage
                projects={this.state.DFAD}
                description={this.state.overviews.DFAD}
                title="DFAD"
              />
            )}
          />
          <Route
            path="/UTEST"
            render={() => (
              <OrgPage
                projects={this.state.UTEST}
                description={this.state.overviews.UTEST}
                title="UTEST"
              />
            )}
          />
          <Route
            path="/Others"
            render={() => (
              <OrgPage
                projects={this.state.Others}
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
