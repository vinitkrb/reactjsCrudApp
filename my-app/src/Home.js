import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from './assets/img1.jpg';
import img2 from './assets/img5.jpeg';
import img3 from './assets/img6.jpeg';
import img4 from './assets/img4.jpg';

class Home extends Component {
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
                <Carousel autoPlay>
                    <div style={{ width: 1360 + 'px', height: 400 + 'px' }}>
                        <img src={img1} alt={"img1"} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div style={{ width: 1360 + 'px', height: 400 + 'px' }}>
                        <img src={img2} alt={"img2"} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div style={{ width: 1360 + 'px', height: 400 + 'px' }}>
                        <img src={img3} alt={"img3"} />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div style={{ width: 1360 + 'px', height: 400 + 'px' }}>
                        <img src={img4} alt={"img4"} />
                        <p className="legend">Legend 4</p>
                    </div>
                </Carousel>
            </div>
        );
    }
};

export default Home;