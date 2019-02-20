import React from 'react';

const Button = ({value, buttonStyle}) => {
    return (
        <button type = "button" className = {buttonStyle}>
            { value }
        </button>
    )
};

export default Button;