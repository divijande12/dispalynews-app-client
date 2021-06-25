import './App.css';
import Login from './components/login'
import Dashboard from './components/Dashboard'
import { Route, Switch } from 'react-router-dom'
import EditNews from './components/EditNews';
import PublicNavigation from './components/PublicNavigation';
import Navigation from './components/Navigation';
import React from 'react';
import Logout from './components/Logout'
import PublicNews from './components/PublicNews';
import SignUp from './components/SignUp';
import { ToastProvider } from 'react-toast-notifications';
import Add from './components/Add';
import About from './components/About';
import NotFound from './components/404';


function App() {
  return (
    
      <ToastProvider>
    {sessionStorage.getItem('user_id') === null ? <PublicNavigation />: <Navigation />}
    <Switch>
      <Route exact path="/" component={PublicNews} />
      <Route exact path= "/about" component= {About} />
      <Route exact path= "/register" component= {SignUp} />
      <Route exact path= "/login" component= {Login} />
      <Route exact path= "/dashboard" component= {Dashboard} />
      <Route exact path= "/add" component={Add} />
      <Route exact path= "/edit/:id" component= {EditNews} />
      <Route exact path= "/logout" component= {Logout} />
      <Route path="*" component={NotFound} />
    </Switch>
    </ToastProvider>
    
  );
}

export default App;
