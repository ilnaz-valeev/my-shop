import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({item,index}) => {
  return (
    <div className="product" key={index}>
      <img
        src={item.image}
        alt={`product__img ${index}`}
        className="product__img product__content__girl"
      />
      <div className="product__content ">
        <a className="product__heading">{item.name}</a>
        <p className="product__text">{item.description}</p>
        <p className="product__price">{item.price}</p>
        <Link to="/product" className="product__add">
          Add to Cart
        </Link>
      </div>
    </div>
  );
};


export default Card;