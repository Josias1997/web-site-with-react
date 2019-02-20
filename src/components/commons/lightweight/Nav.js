import React from 'react';

const Nav = props => {
    const {name, navItems, navLinkValue} = props;

    return (
        <div  className = "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className = "my-0 mr-md-auto font-weight-normal">{name}</h5>
            <nav className = "my-2 my-md-0 mr-md-3">
                {
                    navItems.map((item, index) => (
                        <a href = "https://github.com/Josias1997/web-site-with-react" className = "p-2 text-dark" key = {index}>
                            {item}
                        </a>
                    ))
                }
            </nav>
            <a href = "https://github.com/Josias1997/web-site-with-react" className= "btn btn-outline-primary">
                {navLinkValue}
            </a>
        </div>
    )
}

export default Nav;