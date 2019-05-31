import React, { Fragment } from "react";
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

import './index.css';

const NavBar = () => {
    return(
    <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
                <AppBar position="static">
                    <div className="toolbar-logo">
                        <Typography variant="title" color="inherit">UW Medicine Service Learning</Typography>
                    </div>
                    <Tabs value={location.pathname}>
                        <Tab label={<span className="tabLabel"> Home</span>} value="/" component={Link} to="/" />
                        <Tab label={<span className="tabLabel">About Us</span>} value="/about" component={Link} to="/about" />
                        <Tab label={<span className="tabLabel">Gallery</span>} value="/gallery" component={Link} to="/gallery" />
                        <Tab label={<span className="tabLabel">Contact Us</span>} value="/contact" component={Link} to="/contact" />
                        <Tab label={<span className="tabLabel">Login / Create Account</span>} value="/login" component={Link} to="/login" />
                </Tabs>
                <Switch>
                    <Route exact path="/" />
                    <Route exact path="/about" />
                    <Route exact path="/gallery" />
                    <Route exact path="/contact" />
                    <Route exact path="/login" />
                </Switch>
              </AppBar>
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>

        // <div>
        // <AppBar position="static">
        //     <Toolbar>
        //         <div className="toolbar-logo"><a href="/">LOGO</a></div>
        //         <Typography variant="title" color="inherit">
        //         Volunteer Signup
        //         </Typography>
        //         <div className="toolbar-tabs">
        //             <ul>
        //                 <li><a href="/" className="toolbar-link"> About Us</a></li>
        //                 <li><a href="/" className="toolbar-link"> Contact Us</a></li>
                    
        //             </ul>
        //         </div>


        //     </Toolbar>

        //     {/* <Toolbar>
        //     <IconButton
        //     className={classes.menuButton}
        //     color="inherit"
        //     aria-label="Menu"
        //     >
        //     <MenuIcon />
        //     </IconButton>
        //     <Typography variant="h6" color="inherit" className={classes.grow}>
        //     Volunteer Sign Up
        //     </Typography>
        // </Toolbar> */}

        // </AppBar>
        // </div>
    )
}
export default NavBar;