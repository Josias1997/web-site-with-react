import React, {useState} from 'react';
import Nav from 'components/commons/lightweight/Nav';


const Header = props => {
    const [nav, setNav] = useState({
        name: 'Company Name',
        navItems: [
            'Features', 
            'Enterprise',
            'Support',
            'Pricing'
        ],
        navLinkValue: 'Sign up'
    });
    return (
        <div>
            <Nav name = {nav.name}
                navItems = {nav.navItems}
                navLinkValue = {nav.navLinkValue}
            />
        </div>
    )
};

export default Header;