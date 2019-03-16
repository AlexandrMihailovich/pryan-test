import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './RadioSelector.scss'

const radio = cn('radio');

class Radio extends Component {
    item(item, index) {
        return (
            <div className={radio('btn')} key={index}>
                <input type="radio" id={item.name + '-' + index}
                       name={item.name} value={item.value}
                       checked={item.value === this.props.selected}
                       onChange={() => this.props.change(item.value)}
                />
                <label htmlFor={item.name + '-' + index}>{item.label}</label>
            </div>
        );
    }
    render() {
        return (
            <div className={radio('container')}>
                {(this.props.data.map((item, index) => this.item(item, index)))}
            </div>
        );
    }
}

export default Radio;
