import  React  from 'react';
import { Route } from 'react-router-dom';
import TableDetail from './containers/tabledetailview';

import TableList from './containers/tablelistview';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={TableList} />
        <Route exact path='/tables/:stuID/' component={TableDetail} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />

        
    </div>
);

export default BaseRouter;
