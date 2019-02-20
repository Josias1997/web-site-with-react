import React from 'react';

const Title = props => {
    return (
        <div className = "card-header">
            <h4 className = "my-0 font-weight-normal">{ props.title }</h4>
        </div>
    )
};

export default Title;