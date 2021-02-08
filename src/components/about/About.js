import React from 'react';
import { reasons } from '../../context';
import './About.css';
import volkswagen from '../../assets/volkswagen.jpg'

function About() {

    const Reason = ({ title, span, text, children }) => {
        return (
            <div className="about-element">
                <h4 className="about-title">{title} {span ? <span className="gold">{span}</span>: null}</h4>
                { text ? <p className="about-text">{text}</p> : null}
                { children ? children.map((reason) => <Reason {...reason} />) : null}
            </div>
        )
    }

    return (
        <>
            <div className="about">
                <div className="about-picture">
                    <img src={volkswagen} alt="cat" />
                </div>
                <div className="about-content">
                    { reasons.map(reason => {
                        return <Reason {...reason} />
                    }) }
                </div>
            </div>
        </>
    )
}

export default About;