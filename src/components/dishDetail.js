import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Media } from 'reactstrap';
class DishDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const dis = this.props.dish;
        var content = <div></div>;
        var comments = <div></div>;
        var head=<div></div>;
        const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        if (dis != null) {
            content =
                <Card>
                    <CardImg top src={dis.image} alt={dis.name} />
                    <CardBody>
                        <CardTitle>{dis.name}</CardTitle>
                        <CardText>{dis.description}</CardText>
                    </CardBody>
                </Card>;
            comments = dis.comments.map((c) => {
                return (
                    <div className="mt-3">
                        <p>{c.comment}</p>
                        <p>--{c.author} , {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                        }).format(new Date(c.date))}</p>
                    </div>
                );
            });
            head=<h3>Comments</h3>
        }
        return <div className="container">
        <div className="row">
            <div className="col-12 col-md-5 m-1">{content}</div>
            <div className="col-12 col-md-5 m-1">
                {head}
                {comments}
            </div>
        </div></div>;
    }
}
export default DishDetails;