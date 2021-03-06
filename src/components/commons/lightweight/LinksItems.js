import React from 'react';

const LinksItems = props => {
    return (
        <ul className = "list-unstyled text-small">
            {props.values.map((item, index) => (
                <li key = {index}>
                    <a href = "https://github.com/Josias1997/web-site-with-react" className = "text-muted">{item}</a>
                </li>
            ))}
        </ul>
    )
};

export default LinksItems;