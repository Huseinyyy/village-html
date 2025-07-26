import React, {Component} from 'react';

class Hero extends Component {
    render() {
        return (
            <section className="hero">
            <div className="hero-text">
                <h1>Transform your future with IOTB TECH</h1>
                <p>We are on a mission to make you world-class</p>
            </div>
            <div className="hero-image">
                <img src="/public/iotb-middle image.png" width={1520} height={600}  alt="IOTB TECH Fellowship"/>
            </div>
            </section>
        );
    }
}
 export default Hero;