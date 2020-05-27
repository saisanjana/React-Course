import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href='/' >
              Ristorente Con Fusion
          </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick ={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetails dish={this.state.dishes.filter((d)=>d.id===this.state.selectedDish)[0]}/>
      </div>
    );
  }
}

export default Main;
