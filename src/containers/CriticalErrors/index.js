import React, { Component } from "react";
import { connect } from "react-redux";

import ErrorGlobal from "../../components/ErrorGlobal";

class CriticalErrors extends Component {
    render() {
        if (!this.props.serverStatus) {
            return <ErrorGlobal message="Lost connection" />;
        } else if (!this.props.sensorsStatus) {
            return <ErrorGlobal message="Value(s) not nominal" />;
        }
        return null;
    }
}

const mapStateToProps = state => {
    return {
        sensorsStatus: state.sensorsStatus.data,
        serverStatus: state.serverStatus.data
    };
};

export default connect(mapStateToProps)(CriticalErrors);
