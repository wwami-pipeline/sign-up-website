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
import ProceduresPage from './pages/ProceduresPage';

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

    let DoD = [];
    db.ref('/DoD')
      .once('value')
      .then(value => {
        const items = value.toJSON();
        for (let key in items) {
          DoD.push(items[key]);
        }
      });

    this.state = {
      SHIFA,
      CHAP,
      UDSM,
      DoD
    };

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
      DoD,
      overviews
    };
  }
  render() {
    console.log(this.state.overviews);
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
            path="/Dod"
            crender={() => (
              <OrgPage
                projects={this.state.DoD}
                description={this.state.overviews.DoD}
                title="DoD"
              />
            )}
          />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/donate" component={DonatePage} />
          <Route path="/procedures" component={ProceduresPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
