import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import Alert from './components/layouts/Alert';
import About from './components/layouts/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './components/layouts/Home';
import PageNotFound from './components/layouts/PageNotFound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};
export default App;
