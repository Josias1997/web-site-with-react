import React from 'react';

const Items = props => {
    return (
        <ul className = "list-unstyled mt-3 mb-4">
            {props.values.map((item, index) => (
                <li key = {index}>{item}</li>
            ))}
        </ul>
    )
};

export default Items;