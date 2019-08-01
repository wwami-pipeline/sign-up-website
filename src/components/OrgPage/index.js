import React, { Component } from "react";
import {
    AppBar,
    withStyles,
    Typography,
    CssBaseline,
    CardContent,
    Grid
} from "@material-ui/core";
import NavBar from "../NavBar";
import Card from "@material-ui/core/Card";

const styles = theme => ({
    page: {
        overflow: "hidden"
    },
    title: {
        marginBottom: '1em'
    },
    directionTitleTop: {
        marginTop: "2em",
        textAlign: "center"
    },
    paperContainer: {
        padding: "2em",
        margin: "1.5em",
        maxWidth: '85%',
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
        maxWidth: '90%',
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
        const description = this.props.location.state.description

        return (
            <div className={classes.page}>
                <CssBaseline />
                <AppBar position="static">
                    <NavBar />
                </AppBar>

                <div className={classes.selectionContainer}>
                    <div className={classes.directionTitleBottom}>
                        <Typography className={classes.title} gutterBottom variant="h5">{description}</Typography>
                        <Grid container spacing={24}>
                            {projects.map((project) => {
                                return(
                                    <Grid item>
                                        <Card className={classes.card}>
                                            <CardContent>
                                                <Typography gutterBottom align="left" variant="h4">{project['Title']}</Typography>
                                                {Object.keys(project).map(key => {
                                                    if(key !== 'Title')
                                                        return <Typography gutterBottom align="left" component="p"><b>{key}:</b>{project[key]}</Typography>
                                                    return <div/>
                                                })}
                                                {/* <Typography align="left" component="p">{project['Website Link']}</Typography> */}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(UDSM);
