import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/page/Login';
import Register from './components/page/Register';
import Profile from './components/page/Profile';
import Product from './components/page/Product';
import index from './components/page/index';
import AboutUs from './components/page/AboutUs';
import PlantCare from './components/page/PlantCare';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ="/" component={index}/>
        <Route exact path ="/login" component={Login}/>
        <Route exact path ="/register" component={Register}/>
        <Route exact path ="/shoppingCart" component={Register}/>
        <Route exact path ="/profile" component={Profile}/>
        <Route exact path ="/products" component={Product}/>
        <Route exact path ="/aboutUs" component={AboutUs}/>
        <Route exact path ="/plantCare" component={PlantCare}/>
        <Redirect to ="/" />
      </Switch>
      
    </div>
  );
}

export default App;
