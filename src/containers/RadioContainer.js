import React, { Component } from 'react';
import Radio from '../components/RadioSelector';
import {monthScaleSelect, yearScaleSelect, dayScaleSelect, changeScale} from "../store/actions";
import {connect} from "react-redux";

class RadioContainer extends Component {
    render() {
        return (
            <Radio data={this.props.data} change={this.props.changeScale} selected={this.props.selected}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.radios,
        selected: state.selected
    };
};

const mapDispatchToProps = {
    monthScaleSelect,
    yearScaleSelect,
    dayScaleSelect,
    changeScale
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioContainer);
