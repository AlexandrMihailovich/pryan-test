import React, { PureComponent } from 'react';
import {
    ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import btcMonth from '../btc-month';
import btcDay from '../btc-day';
import btcYear from '../btc-year';


const json = btcYear;
let coin = JSON.parse(json);
console.log(coin);
let ticks = [];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
let dcoin = coin.Data.map((item, index) => {
    let date = new Date();
    date.setTime(item.time*1000);

    console.log(date.getDate(), date.getMonth());

    if(date.getDate() === 1) {
        ticks.push(index);

    }
    return item;
});



console.log(dcoin);


export default class Chart extends PureComponent {

    tickFormatter(index) {
        let date = new Date();
        date.setTime(coin.Data[index].time * 1000);

        return monthNames[date.getMonth()] + ' ' + date.getFullYear() ;
    }

  render() {
    return (
        <ResponsiveContainer width="100%"
                             height={600}>
        <AreaChart
        data={dcoin}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis ticks={ticks} angle={45} tickFormatter={i => this.tickFormatter(i)}/>
        <YAxis domain={['dataMin-15', 'dataMax+15']} />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="close" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
        </ResponsiveContainer>
    );
  }
}
