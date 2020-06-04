import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderContent({ dis }) {
    if (dis == null) {
        return (
            <div></div>
        );
    }
    return (
        <Card>
            <CardImg top src={dis.image} alt={dis.name} />
            <CardBody>
                <CardTitle>{dis.name}</CardTitle>
                <CardText>{dis.description}</CardText>
            </CardBody>
        </Card>
    );
}
function RenderCommentshead({ dis }) {
    if (dis == null) {
        return (
            <div></div>
        );
    }
    return (
        <h3>Comments</h3>
    );
}
function RenderComments({ c }) {
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
}

const DishDetails = (props) => {
    const dis = props.dish;
    var comments=<div></div>;
    if (dis != null) {
        comments = props.comments.map((c) => {
            return (
                <RenderComments c={c} />
            );
        });

    }
    return (
    <div className="container">
        <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1"><RenderContent dis={dis} /></div>
            <div className="col-12 col-md-5 m-1">
                <RenderCommentshead dis={dis} />
                {comments}
            </div>
        </div>
    </div>);
}


export default DishDetails;