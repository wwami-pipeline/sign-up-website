import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import firebase from "firebase";
import config from "./config";

class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
    const db = firebase.firestore();
  }
  render() {
    return (
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    );
  }
}

export default App;
