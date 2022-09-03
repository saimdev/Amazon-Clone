import React from "react";
import "./ProductSearchCard.css";
import { Link } from "react-router-dom"

const ProductSearchCard = ({ image, name, price, description }) => {
  return (
    <div className="productsearchcard">

        <div className="productsearchcard__image">
          <img src={image} alt={name} height="150" />
        </div>
        <div className="productsearchcard__details">
        <div className="productsearchcard__description">
         <Link to={"/"+name}> <h4>{name}</h4></Link>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
        <div className="productsearchcard__price">{price}</div>
      </div>
    </div>
  );
};

export default ProductSearchCard;
