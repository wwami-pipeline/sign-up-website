import React, { Fragment } from "react";
import { Link } from "react-router-dom";
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
                <AppBar position="relative">
                    <div>
                      <div style={{float:'left'}}>
                        <img className="toolbar-logo" alt="UW School of Medicine Volunteer Logo" src="/images/uw_name_logo.jpg" />
                        <br/>
                        <Typography style={{color:'#440088', fontWeight: 'bold', margin: '0px 0px 0px 20px'}} variant="h5">
                          SCHOOL OF MEDICINE SERVICE LEARNING
                        </Typography>
                      </div>
                      <div style={{display:'inline'}}>
                        <img className="wwami-logo" alt="UW School of Medicine Volunteer Logo" src="/images/wwami_logo.png" />
                      </div>
                    </div>
                    <Tabs>
                        <Tab label={<span className="tabLabel">Home</span>} component={Link} to="/" />
                        <Tab label={<span className="tabLabel">Resources</span>} component={Link} to="/resources" />
                        <Tab label={<span className="tabLabel">About Us</span>} component={Link} to="/about" />
                        <Tab label={<span className="tabLabel">Contact Us</span>} component={Link} to="/contact" />
                        <Tab label={<span className="tabLabel">Donate</span>} component={Link} to="/donate" />
                    </Tabs>
              </AppBar>
            </Fragment>
      </div>
    )
}
export default (NavBar);