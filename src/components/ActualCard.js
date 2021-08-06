import React from 'react'
import './CardItem.css'
import CardItem from './CardItem'
import img from "../images/DNA.jpg";

function ActualCard({projectTitle, imageURL, projectBody, githubURL}) {
    return (
        <div classname='App'>
            <CardItem
                title={projectTitle}
                body={projectBody}
                image={imageURL}
                github={githubURL}
            />
        </div>
    )
}

export default ActualCard
