import React from 'react';
import './style.css';

function Cards(props) {
    return (
        <div className='card'>
            <div className='img-container'>
            <p><img
                src={props.image}
                alt={props.name}
                onClick={() => props.clickHandler(props.id)}
            /></p>
            </div>
            <h4>{props.name}</h4>
            <p>{props.occupation}</p>
        </div>
    )
}

export default Cards;