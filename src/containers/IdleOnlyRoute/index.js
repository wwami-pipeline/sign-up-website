import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

import { modeDefinitions } from "../../utils/modes/modeDefinitions";

class IdleOnlyRoute extends Component {
    render() {
        const { component: Component, ...rest } = this.props;

        return (
            <Route
                {...rest}
                render={props =>
                    this.props.mode === modeDefinitions["idle"].mode ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={{ pathname: "/" }} />
                    )
                }
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        mode: state.mode.data
    };
};

export default withRouter(connect(mapStateToProps)(IdleOnlyRoute));
