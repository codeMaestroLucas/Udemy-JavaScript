import React from 'react';
import './Card.css';

const Card = (props) => {

    const style = {
        backgroundColor: props.bgColor,
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    }

    return (
        <div
        className="card"
        style={ style }
        >
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}

Card.defaultProps = {
    title: 'Default Title',
    content: 'Nothing to say.',
    bgColor: 'red',
}

/*
OR

fucntion Card({background= blue, color= red})

*/

export default Card;
