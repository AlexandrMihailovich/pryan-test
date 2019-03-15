import React, { Component } from 'react';
import Radio from '../components/RadioSelector';
import {fetchScale} from "../store/actions";
import {connect} from "react-redux";

class RadioContainer extends Component {
    render() {
        let radios= [
            {
                name: 'scale',
                label: 'Year',
                value: 'year'
            },
            {
                name: 'scale',
                label: 'Month',
                value: 'month'
            },
            {
                name: 'scale',
                label: 'Day',
                value: 'day'
            }
        ];
        return (
            <Radio data={radios} change={this.props.fetchScale} selected={this.props.selected}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selected: state.selected
    };
};

const mapDispatchToProps = {
    fetchScale
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioContainer);
