import React, { PureComponent } from 'react';
import {
    ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


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
            day: () => date.getHours() + ':' + date.getMinutes() + ' ' + date.getDate(),
            year: () => monthNames[date.getMonth()] + ' ' + date.getFullYear(),
            month: () => date.getDate() + ' ' + monthNames[date.getMonth()]
        };
        return formatters[this.props.scale]();
    }

    CustomTooltip = ({ active, payload, label }) => {
        console.log(active, payload, label);
        if (active) {
            let date = new Date();
            date.setTime(payload[0].payload.time * 1000);
            return (
                <div className="recharts-custom-tooltip" style={{
                    margin: "0px",
                    padding: '1px',
                    'background-color': 'rgb(255, 255, 255)',
                    'border': '1px solid rgb(204, 204, 204)',
                    'white-space': 'nowrap'}}>
                    <p style={{margin: "0px",padding: '1px'}} className="intro">{`${date.getHours()}:${date.getMinutes()}`}</p>
                    <p style={{margin: "0px",padding: '1px'}} className="intro">{`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`}</p>
                    <p style={{margin: "0px",padding: '1px'}} className="label">{`close: ${payload[0].payload.close}$`}</p>
                    <p style={{margin: "0px",padding: '1px'}} className="label">{`open: ${payload[0].payload.open}$`}</p>
                    <p style={{margin: "0px",padding: '1px'}} className="label">{`high: ${payload[0].payload.high}$`}</p>
                    <p style={{margin: "0px",padding: '1px'}} className="label">{`low: ${payload[0].payload.low}$`}</p>
                    <p style={{margin: "0px",padding: '1px'}} className="intro">{label}</p>
                </div>
            );
        }

        return null;
    };

    render() {
        if(!this.props.data) {
            return (<div>loading...</div>);
        }
        if(this.props.hasError) {
            return (<div>Error!</div>);
        }
        return (
            <div>
                <ResponsiveContainer width="100%"
                                     height={600}>
                    <AreaChart
                        data={this.props.data.Data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis ticks={this.ticks()} angle={45} tickFormatter={i => this.tickFormatter(i)}/>
                        <YAxis domain={['dataMin-15', 'dataMax+15']} />
                        <Tooltip content={this.CustomTooltip} />
                        <Legend />
                        <Area type="monotone" dataKey={'close'} stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
                <div>{this.props.isLoading ? 'Loading...' : ''}</div>
            </div>
        );
    }
}
