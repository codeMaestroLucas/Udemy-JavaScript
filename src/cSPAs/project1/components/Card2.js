import React from 'react';
import './Card.css';

const Card2 = ({title, content}) => {
        
    return (
            <div className="card">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        );

}

export default Card2;
