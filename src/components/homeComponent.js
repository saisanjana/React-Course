import React from 'react';
import {Card, CardImg,CardTitle,CardSubtitle,CardText} from 'reactstrap'
function RenderCard({item}){
    return(
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> :null}
            <CardText>{item.description}</CardText>
        </Card>
    );
}
function Home(props){
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dishes}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotions}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leaders}/>
                </div>
            </div>
        </div>
    );
}
export default Home;