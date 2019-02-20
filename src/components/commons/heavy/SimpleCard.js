import React from 'react';
import LinksItems from '../lightweight/LinksItems';
const SimpleCard = props => {
    const {title, elements} = props;

    return (
        <div className = "col-6 col-md">
            <h5>{title}</h5>
            <LinksItems values = {elements} />
        </div>
    )
}

export default SimpleCard;