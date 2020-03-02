import React from 'react'

function Cards({ clickHandler, id, image, name, occupation }) {
    return (
        <div className="card">
            <div className="img-container">
            <img
            src={image}
            alt={name}
            onClick={() => clickHandler(id)}
            />
            </div>
            <h2>{name}</h2>
            <h3>{occupation}</h3>
        </div>
    )
}

export default Cards
