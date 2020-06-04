import React, { Component } from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
import Menu from './menu';
import DishDetails from './dishDetail';
import Contact from './contactComponent';
import Home from './homeComponent';
import About from './aboutComponent';
import { DISHES } from '../shared/dishes'
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import {Switch,Route,Redirect} from 'react-router-dom';
class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
    }
  }

  

  render() {
    const HomePage = ()=>{
      return(
        <Home dishes={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotions={this.state.promotions.filter((dish)=>dish.featured)[0]}
        leaders={this.state.leaders.filter((dish)=>dish.featured)[0]}
        />
      );
    }
    const DishItem =({match}) =>{
      return(
        <DishDetails dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishid,10))[0]}
        comments={this.state.comments.filter((dish)=>dish.dishId===parseInt(match.params.dishid,10))}
        />
      );
    }
    return (
      
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />}/>
          <Route path="/menu/:dishid" component={DishItem}/>
          <Route exact path="/contactus" component ={Contact}/>
          <Route exact path="/aboutus" component={()=><About leaders={this.state.leaders}/>}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
