import React from 'react';

const Icon = ({source}) => {
    return (
        <div className = "col-12 col-md">
            <img className = "mb-2" src = {source} 
            alt="" width="24" height="24"/>
            <small className = "d-block mb-3 text-muted">
                © 2017-2019
            </small>
        </div>
    )
}

export default Icon;