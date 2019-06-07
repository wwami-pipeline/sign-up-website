import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import firebase from "firebase";
import config from "./config";
import { Switch } from "react-router-dom";
import OrgPage from "./components/OrgPage";

class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
    const db = firebase.database();

    let SHIFA = [];
    db.ref("/SHIFA")
      .once("value")
      .then(value => {
        const items = value.toJSON();
        for (let key in items) {
          SHIFA.push(items[key]);
        }
      });

    let CHAP = [];
    db.ref("/CHAP")
      .once("value")
      .then(value => {
        const items = value.toJSON();
        for (let key in items) {
          CHAP.push(items[key]);
        }
      });

    let UDSM = [];
    db.ref("/UDSM")
      .once("value")
      .then(value => {
        const items = value.toJSON();
        for (let key in items) {
          UDSM.push(items[key]);
        }
      });

    let DoD = [];
    db.ref("/DoD")
      .once("value")
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
            exact path="/"
            render={() => (
              <HomePage
                SHIFA={this.state.SHIFA}
                CHAP={this.state.CHAP}
                UDSM={this.state.UDSM}
                DoD={this.state.DoD}
              />
            )}
          />
          <Route path="/SHIFA" component={OrgPage}/>
          <Route path="/CHAP" component={OrgPage}/>
          <Route path="/UDSM" component={OrgPage}/>
          <Route path="/Dod" component={OrgPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
