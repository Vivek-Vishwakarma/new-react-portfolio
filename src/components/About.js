import React from 'react'
import Heading from './Heading'
import me from "../images/me.png"
import "../css/about.css"
import Button from './Button'
import about from '../images/about.PNG'
const About = () => {
    return (
        <>
            <Heading heading={"About Me"}/>
            
            <div id="about" className="about">
                <div className="about-image">
                    <img src={me} alt="profile" />
                </div>
                <div className="about-text">
                    <h2>Student at Atharva College Of Engineering</h2>
                    <p>Prefinal (2019 - 2023) EXTC branch. <br /> HSC form TP Bhatia College Of Science.</p>
                    <Button url="https://www.canva.com/design/DAElGBKBrs8/hbZaJk8xts0L27Yr2ePl0w/view?utm_content=DAElGBKBrs8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" text="Resume &darr;"/>
                <div className="info">
                <ul>
                    <li>
                        <p><i className="fas fa-arrow-right"></i><strong> Date Of Birth : </strong>10/02/2002</p>
                    </li>
                    <li>
                        <p><i className="fas fa-arrow-right"></i><strong> Age : </strong>20</p>
                    </li>
                    <li>
                        <p><i className="fas fa-arrow-right"></i><strong> Degree : </strong>Bachelor</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p><i className="fas fa-arrow-right"></i><strong> City : </strong>Mumbai, India</p>
                    </li>
                    <li>
                        <p><i className="fas fa-arrow-right"></i><strong> Phone : </strong>+91 8655689594</p>
                    </li>
                    <li>
                        <p><i className="fas fa-arrow-right"></i><strong> Free Lancing : </strong>Available</p>
                    </li>
                </ul>
                </div>
                </div>
                
            </div>
            <img src={about} alt="" className="video" />
        
        </>
    )
}

export default About
