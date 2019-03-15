import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './RadioSelector.css'

const radio = cn('radio');

class Radio extends Component {
    item(index) {
        return (
            <div className={radio('btn')}>
                <input type="radio" id={this.props.name + '-' + index} name={this.props.name}/>
                <label htmlFor={this.props.name + '-' + index}>radio</label>
            </div>
        );
    }
    render() {
        return (
            <div className={radio('container')}>
                {(new Array(this.props.count)).fill(0).map((i,index) => this.item(index))}
            </div>
        );
    }
}

export default Radio;
