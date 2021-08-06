
import '../../App.css'
import MyPhoto from "../../images/propic.jpg";
import React from 'react';
import ActualCard from '../ActualCard';
import 'react-vertical-timeline-component/style.min.css';

function AboutMe () {
    return (
        <div className="parent" id="aboutme"> 
            <div className="col-1">
                <h1>Profile</h1>
                <p>I am a senior Computer Science student at the
                    University of Massachusetts Amherst. My primary
                    intrests lie in back-end software engineering work.
                </p>
                <div className="propic">
                    <img src={MyPhoto} alt="Profile Picture"></img>
                </div>
            </div>
            <div className="col-2">
                <div className="header-text">
                    <h1>Projects</h1>
                </div>
                <ActualCard
                    projectTitle='Antibody Sequence Analysis'
                    projectBody='A Java application that allows users to obtain a comprehensive
                    analysis of a given DNA sequence and its corresponding numbering sequence'
                    imageURL="./DNA.jpg"
                    githubURL="https://github.com/vkodangattil/Antibody-Sequence-Analysis"
                />
                <ActualCard
                    projectTitle='Tennis Simulation'
                    projectBody='A Python application that utilizes webscraping and probability
                    calculations to allow users to simulate a game between any two players
                    in the top 31 of the ATP rankings'
                    imageURL="./tennis4.jpg"
                    githubURL="https://github.com/vkodangattil/Tennis-Simulation"
                />
            </div>
        </div> 
    );
}
export default AboutMe;