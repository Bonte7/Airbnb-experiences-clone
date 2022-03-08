import React from 'react';
import heroImage from '../images/photo-group.png';

//This is the middle portion of the page that holds the background collage image and some verbiage

function Hero() {
    return (
        <section className="hero-section">
            <img className="hero-image" src={heroImage} alt="collage" width="1000px;"/>
            <h1 className="hero-headline">Online Experiences</h1>
            <p className="hero-subtext">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}

export default Hero;