import React, { PureComponent } from 'react';
import {
    ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { cn } from '@bem-react/classname';
import './Chart.scss';
import './LoadAnimation'
import LoadAnimation from "./LoadAnimation";

const chart = cn('chart');


const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export default class Chart extends PureComponent {

    ticks() {
        let ticks = [];

        const interval = {
            day: 60,
            year: 30,
            month: 48
        };
        let i = 0;
        this.props.data.Data.forEach((item, index) => {
            if(i === interval[this.props.scale]) {
                ticks.push(index);
                i = 0;
            }
            i++;
        });
        return ticks;
    }


    tickFormatter(index) {
        let date = new Date();
        date.setTime(this.props.data.Data[index].time * 1000);
        const formatters = {
            day: () => date.getHours() + ':' + date.getMinutes() + ' ' + date.getDate() + ' ' + monthNames[date.getMonth()],
            year: () => monthNames[date.getMonth()] + ' ' + date.getFullYear(),
            month: () => date.getDate() + ' ' + monthNames[date.getMonth()]
        };
        return formatters[this.props.scale]();
    }

    renderTooltip = ({ active, payload, label }) => {
        if (active) {
            const tooltip = cn('tooltip');

            let date = new Date();
            date.setTime(payload[0].payload.time * 1000);

            let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
            let hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
            let fullDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
            let fullTime = `${hours}:${minutes}`;
            return (
                <div className={tooltip()}>
                    {(() => {if(this.props.scale !== 'year')
                        return (<p className={tooltip('content', {date:true})}>{fullTime}</p>)})()}
                    <p className={tooltip('content', {date:true})}>{fullDate}</p>
                    <p className={tooltip('content')}>{`High: ${payload[0].payload.high}$`}</p>
                    <p className={tooltip('content')}>{`Low: ${payload[0].payload.low}$`}</p>
                </div>
            );
        }

        return null;
    };

    renderLegend = (props) => {
        const legend = cn('legend');
        return (
            <div className={legend()}>
                <span>BTC to USD</span>
            </div>
        );
    };

    loading() {
        return (
            <div className={chart('loading')}>
                <LoadAnimation/>
            </div>);
    }

    render() {
        if(!this.props.data) {
            return (<div><LoadAnimation/></div>);
        }
        if(this.props.hasError) {
            return (<div>Error!</div>);
        }
        return (
            <div className={chart()}>
                <ResponsiveContainer width="100%"
                                     height={600}>
                    <AreaChart
                        data={this.props.data.Data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis ticks={this.ticks()}
                               angle={45}
                               tickFormatter={i => this.tickFormatter(i)}
                               height={70}
                               tickSize={35}
                        />
                        <YAxis domain={['dataMin-15', 'dataMax+15']} />
                        <Tooltip content={this.renderTooltip} />
                        <Legend verticalAlign="top" height={36} content={this.renderLegend}/>
                        <Area type="monotone" dataKey={'close'} stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
                {this.props.isLoading ? this.loading() : ''}
            </div>
        );
    }
}
