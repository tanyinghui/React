import React from 'react';

// Import routing components
import { Router, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from '../utils/history';

// Import custom components
import DeliverLayout from '../components/main/DeliverLayout';
import CollectLayout from '../components/main/CollectLayout';
import FrontLayout from '../components/main/FrontLayout';
import NotFound from '../components/error/NotFound';
// import AuthenticatedRoute from './AuthenticatedRoute';

const MainRouter = () => (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={FrontLayout}/>
                <Route path="/deliver" component={DeliverLayout}/>
                <Route path="/collect" component={CollectLayout}/>   
                <Route path="*" component={NotFound} />
            </Switch>
            {/* <Route component={NotFound} /> */}
        </Router>
);

export default MainRouter;