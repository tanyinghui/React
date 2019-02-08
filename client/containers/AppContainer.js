import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Background from '../components/background/Background';
import MainRouter from '../routers/MainRouter';

class AppContainer extends Component {
    render() {
        return (
            <div>
                <Background />
                <MainRouter />
            </div>
        );
    }
}

export default hot(module)(AppContainer);