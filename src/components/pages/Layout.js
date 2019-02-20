import React from 'react';

import Footer from 'components/includes/Footer';
import Header from 'components/includes/Header';

const Layout = ({children}) => (
    <div>
        <Header />
        <div className = "container">
            { children }
            <Footer />
        </div>
    </div>
);

export default Layout;