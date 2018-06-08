import React, { Component } from 'react';
import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        }
    }
    render() {
        return (
            <div>
                <h2 style={{ paddingLeft: 93 + 'em', fontSize: 13 + 'px' }}>{this.state.days[this.state.date.getDay()] + ',' + this.state.date.getDate() + '-' + ((this.state.date.getMonth() + 1 < 10) ? ('0' + (this.state.date.getMonth() + 1)) : (this.state.date.getMonth() + 1)) + '-' + this.state.date.getFullYear()}</h2>
                <h2 style={{ paddingLeft: 95 + 'em', fontSize: 13 + 'px' }} >{this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    };

}

export default Chart;