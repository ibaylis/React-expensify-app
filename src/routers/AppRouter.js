import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import {LoginPage} from '../components/LoginPage';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={LoginPage} exact={true} />
                <Route path="/dashboard" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={NotFoundPage} />
                <Route component={HelpPage} />
        </Switch>


       {/* 
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
        */}
    </div>
</BrowserRouter>
)


export default AppRouter;