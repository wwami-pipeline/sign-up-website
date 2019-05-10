import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "rebass";

class SensorsStatus extends Component {
    render() {
        const { showMode, mode, sensorsStatus, ...props } = this.props;
        const nominalLabel = sensorsStatus ? "Nominal" : "Not Nominal";
        let modelabel = "";

        // This piece of code is out of date
        if (showMode) {
            switch (mode) {
                case 1:
                    modelabel = "Standby";
                    break;
                case 2:
                    modelabel = "Armed";
                    break;
                case 3:
                    modelabel = "Accelerate";
                    break;
                case 4:
                    modelabel = "Cruise";
                    break;
                case 5:
                    modelabel = "Brake";
                    break;
                default:
                    modelabel = "Idle";
            }
        }

        return (
            <Text
                color={sensorsStatus ? " #219653" : "red"}
                fontWeight="bold"
                {...props}
            >
                {this.props.showMode
                    ? `${modelabel} - ${nominalLabel}`
                    : nominalLabel}
            </Text>
        );
    }
}

const mapStateToProps = state => {
    return {
        sensorsStatus: state.sensorsStatus.data,
        mode: state.mode.data
    };
};

export default connect(mapStateToProps)(SensorsStatus);
