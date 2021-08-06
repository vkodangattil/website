import React from 'react';
import './CardItem.js'
import testImage from '../images/space.jpg'

function CardItem({title, body, image, github}) {
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={image} alt='' />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>
            <div className="btn">
                <button>
                    <a href={github} target="_blank" rel="noopener noreferrer">Details</a>
                </button>
            </div>
        </div>
    )
}

export default CardItem
