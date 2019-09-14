import React, { Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";
import {
    AppBar,
    Tab,
    Tabs,
    Typography
  } from "@material-ui/core";

import './index.css';

const NavBar = () => {
    return(
      <div className="App">
            <Fragment>
                <AppBar position="dynamic">
                    <div>
                      <div style={{float:'left'}}>
                        <img className="toolbar-logo" alt="UW School of Medicine Volunteer Logo" src="/images/uw_name_logo.jpg" />
                        <br/>
                        <Typography style={{color:'#440088', fontWeight: 'bold', margin: '0px 0px 0px 20px'}} variant='h5'>SCHOOL OF MEDICINE SERVICE LEARNING</Typography>
                      </div>
                      <div style={{display:'inline'}}>
                        <img className="wwami-logo" alt="UW School of Medicine Volunteer Logo" src="/images/wwami_logo.png" />
                      </div>
                    </div>
                    <Tabs>
                        <Tab label={<span className="tabLabel">Home</span>} value="/" component={Link} to="/" />
                        <Tab label={<span className="tabLabel">Resources</span>} value="/resources" component={Link} to="/resources" />
                        <Tab label={<span className="tabLabel">About Us</span>} value="/about" component={Link} to="/about" />
                        <Tab label={<span className="tabLabel">Contact Us</span>} value="/contact" component={Link} to="/contact" />
                        <Tab label={<span className="tabLabel">Donate</span>} value="/donate" component={Link} to="/donate" />
                    </Tabs>
                <Switch>
                    <Route exact path="/" />
                    <Route path="/about" />
                    <Route path="/gallery" />
                    <Route path="/contact" />
                    <Route path="/resources" />
                    <Route path="/UDSM" />
                    <Route path="/SHIFA" />
                    <Route path="/CHAP" />
                    <Route path="/DFAD" />
                </Switch>
              </AppBar>
            </Fragment>
      </div>
    )
}
export default (NavBar);