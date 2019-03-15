import React, { Component } from 'react';
import Chart from '../components/Chart';
import {monthScaleSelect, yearScaleSelect, dayScaleSelect} from "../store/actions";
import {connect} from "react-redux";

import btcDay from "../btc-day";
import btcYear from "../btc-year";
import btcMonth from "../btc-month";


class ChartContainer extends Component {
    render() {
        const btc = {
            day: btcDay,
            year: btcYear,
            month: btcMonth
        };
        return (
            <Chart data={btc[this.props.scale]} scale={this.props.scale}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        //data: state.data,
        scale: state.selected
    };
};

const mapDispatchToProps = {
    monthScaleSelect,
    yearScaleSelect,
    dayScaleSelect
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer);
