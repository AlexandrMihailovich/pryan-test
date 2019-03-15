import React, { Component } from 'react';
import Chart from '../components/Chart';
import {fetchScale} from "../store/actions";
import {connect} from "react-redux";

class ChartContainer extends Component {
    componentDidMount() {
        this.props.fetchScale(this.props.scale)
    }
    render() {
        return (
            <Chart data={this.props.data} scale={this.props.scale}
                   fetchData={this.props.fetchScale}
                   hasError={this.props.hasError} isLoading={this.props.isLoading}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        scale: state.selected,
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
};

const mapDispatchToProps = {
    fetchScale
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer);
