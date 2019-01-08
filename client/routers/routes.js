import React from 'react';

// Import routing components
import { Router , Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from '../utils/history';

// Import custom components
import MainLayout from '../components/main/MainLayout';
import NotFound from '../components/error/NotFound';
// import AuthenticatedRoute from './AuthenticatedRoute';

const MainRouter = () => (
        <Router history={history}>
            <Switch>
                <Route path="/" component={MainLayout}/>  
            </Switch>
        </Router>
);

export default MainRouter;