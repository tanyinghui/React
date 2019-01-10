import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import MainRouter from '../../routers/routes';
import Background from '../../components/background/Background';

class AppContainer extends Component {
    render() {
        return (
            <div>
                <Background />
                <MainROuter />
            </div>
        );
    }
}

export default hot(module)(AppContainer);