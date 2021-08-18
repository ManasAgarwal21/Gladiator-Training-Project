import React from 'react';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';
import LoginPage from './pages/Login.page';
import SignupPage from './pages/Signup.page';
import NotFoundPage from './pages/NotFound.page';
import DashboardPage from './pages/Dashboard.page';

const AppRouter = (props) => {
    return <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/login" />
                </Route>
                <Route path="/login" exact>
                    <LoginPage />
                </Route>
                <Route path="/signup" exact>
                    <SignupPage />
                </Route>
                <Route path="/dashboard" exact>
                    <DashboardPage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </BrowserRouter>
    </>;
};

export default React.memo(AppRouter);