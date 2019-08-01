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
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                SHIFA={this.state.SHIFA}
                CHAP={this.state.CHAP}
                UDSM={this.state.UDSM}
                DoD={this.state.DoD}
              />
            )}
          />
          <Route path="/SHIFA" render={() => <OrgPage projects={this.state.SHIFA} description="" title="SHIFA"/>} />
          <Route path="/CHAP" render={() => <OrgPage projects={this.state.CHAP} description="" title="CHAP"/>} />
          <Route path="/UDSM" render={() => <OrgPage projects={this.state.UDSM} description="" title="UDSM"/>} />
          <Route path="/Dod" crender={() => <OrgPage projects={this.state.DoD} description="" title="DoD"/>} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/donate" component={DonatePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
