import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from './assets/img1.jpg';
import img2 from './assets/img5.jpeg';
import img3 from './assets/img6.jpeg';
import img4 from './assets/img4.jpg';

class Home extends Component {
    render() {
        return (
            <Carousel autoPlay>
                <div style={{ width: 1360 + 'px', height: 460 + 'px' }}>
                    <img src={img1} alt={"img1"} />
                    <p className="legend">Legend 1</p>
                </div>
                <div style={{ width: 1360 + 'px', height: 460 + 'px' }}>
                    <img src={img2} alt={"img2"} />
                    <p className="legend">Legend 2</p>
                </div>
                <div style={{ width: 1360 + 'px', height: 460 + 'px' }}>
                    <img src={img3} alt={"img3"} />
                    <p className="legend">Legend 3</p>
                </div>
                <div style={{ width: 1360 + 'px', height: 460 + 'px' }}>
                    <img src={img4} alt={"img4"} />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        );
    }
};

export default Home;