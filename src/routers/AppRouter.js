import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';

import {LoginPage} from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PubliceRoute from './PublicRoute';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PubliceRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={NotFoundPage} />
                <Route component={HelpPage} />
            </Switch>
        </div>
    </Router>
)

 /*{/* 
        <Switch>
                <Route path="/" exact={true}> 
                    <ExpenseDashboardPage />
                </Route>
                <Route path="/create" > 
                    <AddExpensePage />
                </Route>           
                <Route path="/edit" > 
                    <EditExpensePage />
                </Route>     
                <Route path="/help" > 
                    <HelpPage />
                </Route> 
                <Route>  
                <NotFoundPage />
                </Route> 
            </Switch>
        }*/
export default AppRouter;