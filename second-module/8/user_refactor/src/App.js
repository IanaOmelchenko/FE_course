import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Users from './components/users';
import NavBar from './components/navBar';
import MainPage from './components/mainPage';
import LoginPage from './components/loginPage';
import UserId from './components/userId';

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path = '/' component={MainPage} />
                <Route path = '/login' component={LoginPage} />
                <Route path = '/users/:id' render={(props) => (<UserId {...props} />)} />
                <Route exact path = '/users' component={Users} />
            </Switch>
        </>
    );
}

export default App;
