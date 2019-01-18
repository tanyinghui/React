import React from 'react';

// Import routing components
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from '../utils/history';

// Import custom components
import DeliverLayout from '../components/main/DeliverLayout';
import CollectLayout from '../components/main/CollectLayout';
import ReceipentLayout from '../components/main/ReceipentLayout';
import FrontLayout from '../components/main/FrontLayout';
import NotFound from '../components/error/NotFound';
import CollectParcel from '../components/main/CollectParcel';
import DeliverParcel from '../components/main/DeliverParcel';
import ParcelPath from '../components/main/ParcelPath';
import NoParcelFound from '../components/error/NoParcelFound';

const MainRouter = () => (
     <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={FrontLayout}/>
            <Route path="/deliverform" component={DeliverLayout}/>
            <Route path="/receipentform" component={ReceipentLayout}/>
            <Route path="/collectform" component={CollectLayout}/>
            <Route path="/collectparcel" component={CollectParcel}/>
            <Route path="/noparcelfound" component={NoParcelFound}/>
            <Route path="/deliverparcel" component={DeliverParcel}/>
            <Route path="/parcelpath" component={ParcelPath}/>
            <Route path="*" component={NotFound} />
        </Switch>
    </ConnectedRouter>
);

export default MainRouter;