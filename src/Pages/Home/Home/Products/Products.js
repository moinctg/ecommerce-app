import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const Products = ( { product } ) => {

    console.log(product);

    const {id,title,category,description,image,price,rating} = product
    return (
        <div>
            <CardGroup>
      <Card>
        <Card.Img variant="top" src={image} height="100%" width="100%"/>
        <Card.Body>
            <h5>   {id}</h5>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {description}
          <Card.Text>   {price}</Card.Text>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">  {rating.rate}</small>
          <small className="text-muted">  {rating.count}</small>
        </Card.Footer>
      </Card>
       
           
           
           
        
           
        </CardGroup>
        </div>
    );
};

export default Products;