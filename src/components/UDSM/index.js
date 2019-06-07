import React, { Component } from "react";
import {
    AppBar,
    withStyles,
    Typography,
    CssBaseline,
} from "@material-ui/core";
import NavBar from "../NavBar";
import Card from "@material-ui/core/Card";

const styles = theme => ({
    page: {
        overflow: "hidden"
    },
    directionTitleTop: {
        marginTop: "2em",
        textAlign: "center"
    },
    paperContainer: {
        padding: "2em",
        margin: "1.5em",
        maxWidth: 850,
        marginLeft: "auto",
        marginRight: "auto"
    },
    fabButton: {
        marginRight: "1em",
        marginTop: "1em"
    },
    directionTitleBottom: {
        textAlign: "center"
    },
    selectionContainer: {
        maxWidth: 900,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        padding: "2em",
        paddingBottom: "5em",
        margin: "1em"
    },
    gridContainer: {
        marginTop: "1.5em",
        marginBottom: "1em",
        marginLeft: "auto",
        marginRight: "auto"
    },
    linkBoxContainer: {
        mariginLeft: "auto",
        marginRight: "auto"
    },
    card: {
        paddingBottom: "1em"
    }
});

class UDSM extends Component {
    render() {
        const { classes } = this.props;
        const projects = this.props.location.state.data
        console.log(projects)

        return (
            <div className={classes.page}>
                <CssBaseline />
                <AppBar position="static">
                    <NavBar />

                </AppBar>

                <div className={classes.selectionContainer}>
                    <div className={classes.directionTitleBottom}>
                        <Typography gutterBottom variant="h4">University District Street Medicine</Typography>
                        {projects.map((project) => {
                            return(
                                <Card className={classes.card}>
                                    <Typography gutterBottom align="left" component="h1">{project['Title']}</Typography>
                                    <Typography gutterBottom align="left" component="p">{project['Community Partner']}</Typography>
                                    <Typography gutterBottom align="left" component="p">{project['Location']}</Typography>
                                    <Typography gutterBottom align="left" component="p">{project['Shift']}</Typography>
                                    <Typography gutterBottom align="left" component="p">{project['Project Description']}</Typography>
                                    <Typography gutterBottom align="left" component="p">{project['Required Training for Students']}</Typography>
                                    <Typography gutterBottom align="left" component="p">{project['Student Volunteer Information']}</Typography>
                                    <Typography gutterBottom align="left" component="p">{project['Undergraduate Students']}</Typography>
                                    <Typography gutterBottom align="left" component="p">{project['Other Requirements for Preceptors']}</Typography>
                                    <Typography gutterBottom align="left" component="p">{project['Website Link']}</Typography>
                                </Card>
                            )
                        })}
                    </div>

                </div>
            </div>
        );
    }
}

export default withStyles(styles)(UDSM);
