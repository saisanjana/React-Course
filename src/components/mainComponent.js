import React, { Component } from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
import Menu from './menu';
import DishDetails from './dishDetail';
import Contact from './contactComponent';
import Home from './homeComponent';
import About from './aboutComponent';
import { connect } from 'react-redux';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import { addComment } from '../Redux/ActionCreators';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});
class Main extends Component {
  constructor(props){
    super(props);
    
  }

  

  render() {
    const HomePage = ()=>{
      return(
        <Home dishes={this.props.dishes.filter((dish)=>dish.featured)[0]}
        promotions={this.props.promotions.filter((dish)=>dish.featured)[0]}
        leaders={this.props.leaders.filter((dish)=>dish.featured)[0]}
        />
      );
    }
    const DishItem =({match}) =>{
      return(
        <DishDetails dish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishid,10))[0]}
        comments={this.props.comments.filter((dish)=>dish.dishId===parseInt(match.params.dishid,10))}
        addComment={this.props.addComment}
        />
      );
    }
    return (
      
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes} />}/>
          <Route path="/menu/:dishid" component={DishItem}/>
          <Route exact path="/contactus" component ={Contact}/>
          <Route exact path="/aboutus" component={()=><About leaders={this.props.leaders}/>}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
