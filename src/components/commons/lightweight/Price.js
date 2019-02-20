import React from 'react';

const Price = ({ price, unity}) => {
    return (
        <h1 className = "card-title pricing-card-title">
            { price } 
            <small className = "text-muted"> / { unity }</small>
        </h1>
    )
};

export default Price;