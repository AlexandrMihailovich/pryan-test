import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './LoadAnimation.scss'

const load = cn('load');

class LoadAnimation extends Component {
    render() {
        return (
            <div className={load()}>
                <div className={load('circle', {item:1})}></div>
                <div className={load('circle', {item:2})}></div>
                <div className={load('circle', {item:3})}></div>
                <div className={load('circle', {item:4})}></div>
                <div className={load('circle', {item:5})}></div>
                <div className={load('circle', {item:6})}></div>
                <div className={load('circle', {item:7})}></div>
                <div className={load('circle', {item:8})}></div>
            </div>
        );
    }
}

export default LoadAnimation;
