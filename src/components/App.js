import React from 'react';

import Layout from 'components/pages/Layout';
import Body from 'components/includes/Body';

class App extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Body />
                </Layout>
            </div>
        );
    }
};

export default App;