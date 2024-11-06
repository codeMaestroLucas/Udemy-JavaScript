import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <button className="btn" onClick={props.onClick}>
            {props.label}
        </button>
    );
}

Button.defaultProps = {
    label: 'Default Button',
    onClick: () => alert("Olá mundo")
}

export default Button;
