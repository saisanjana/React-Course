import React, { Component } from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
import Menu from './menu';
import DishDetails from './dishDetail';
import Home from './homeComponent';
import { DISHES } from '../shared/dishes'
import {Switch,Route,Redirect} from 'react-router-dom';
class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
     
    }
  }

  

  render() {
    const HomePage = ()=>{
      return(
        <Home/>
      );
    }
    return (
      
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/menu" component={()=> <Menu dishes={this.state.dishes} />}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
