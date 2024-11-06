import React from 'react';
import './Button.css'

const sayHello = () => {
    console.log('Ola mundo');
}

const Button2 = (props) => {
    return (
        <button className="btn" onClick={sayHello}>
            <p>Console.log btn</p>
        </button>
    );
}

export default Button2;
