import React, { Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";

import './index.css';

const NavBar = () => {
    return(
      <div className="App">    
            <Fragment>
                <AppBar position="static">
                    <div className="toolbar-logo">
                        <img alt="UW School of Medicine Volunteer Logo" src="/images/header2.png" width="600px"/>
                    </div>
                    <Tabs>
                        <Tab label={<span className="tabLabel">Home</span>} value="/" component={Link} to="/" />
                        <Tab label={<span className="tabLabel">Procedures</span>} value="/donate" component={Link} to="/procedures" />
                        <Tab label={<span className="tabLabel">About Us</span>} value="/about" component={Link} to="/about" />
                        <Tab label={<span className="tabLabel">Contact Us</span>} value="/contact" component={Link} to="/contact" />
                        <Tab label={<span className="tabLabel">Donate</span>} value="/donate" component={Link} to="/donate" />
                        {/* <Tab label={<span className="tabLabel">Gallery</span>} value="/gallery" component={Link} to="/gallery" />
                        <Tab label={<span className="tabLabel">Contact Us</span>} value="/contact" component={Link} to="/contact" />
                        <Tab label={<span className="tabLabel">Login / Create Account</span>} value="/login" component={Link} to="/login" /> */}
                </Tabs>
                <Switch>
                    <Route exact path="/" />
                    <Route path="/about" />
                    <Route path="/gallery" />
                    <Route path="/contact" />
                    <Route path="/procedures" />
                </Switch>
              </AppBar>
            </Fragment>
      </div>
    )
}
export default (NavBar);