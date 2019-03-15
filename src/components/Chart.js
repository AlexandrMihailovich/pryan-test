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
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="close" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
            <div>{this.props.isLoading ? 'Loading...' : ''}</div>
        </div>
    );
  }
}
