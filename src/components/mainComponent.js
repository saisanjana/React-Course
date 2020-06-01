import React, { Component } from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
import Menu from './menu';
import DishDetails from './dishDetail';
import { DISHES } from '../shared/dishes'
class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish:null
    }
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
}

  render() {
      
    return (
      <div>
        <Header/>
        <Menu dishes={this.state.dishes} onClick ={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetails dish={this.state.dishes.filter((d)=>d.id===this.state.selectedDish)[0]}/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
