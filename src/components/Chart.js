import React, { PureComponent } from 'react';
import {
    ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


/*
let coin = JSON.parse(btcYear);

let Month = JSON.parse(btcMonth);
let Day = JSON.parse(btcDay);
let Year = JSON.parse(btcYear);

console.log(coin);
*/
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

/*


console.log((Math.ceil(Year.TimeTo - Year.TimeFrom) / 3600 / 24));
console.log(Math.ceil((Month.TimeTo - Month.TimeFrom) / 3600 / 24));
console.log(Math.ceil((Day.TimeTo - Day.TimeFrom) / 3600 / 24));
console.log(Year.TimeTo - Year.TimeFrom);
console.log(Month.TimeTo - Month.TimeFrom);
console.log(Day.TimeTo - Day.TimeFrom);

*/

export default class Chart extends PureComponent {
    constructor(props) {
        super(props);
        //this.props.scale = 'month';
        //this.props.data = coin;
    }

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
        console.log(ticks);
        return ticks;
    }


    tickFormatter(index) {
        let date = new Date();
        date.setTime(this.props.data.Data[index].time * 1000);
        const formatters = {
            day: () => date.getHours() + ' ' + date.getDate(),
            year: () => monthNames[date.getMonth()] + ' ' + date.getFullYear(),
            month: () => date.getDate() + ' ' + monthNames[date.getMonth()]
        };
        return formatters[this.props.scale]();
    }

  render() {
    return (
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
    );
  }
}
