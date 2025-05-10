import React, { useEffect } from "react";
import Advantages from "../components/adavantages";
import Data from "../data/Data";
import "../css/style.min.css";
import { Link } from "react-router-dom";
import Card from "../components/Card"

const Chief = () => {
  return (
    <div>
      <section className="promo">
        <div className="promo__img">
          <img src="img/menh.png" alt="photo promo" />
        </div>
        <div className="promo__content">
          <div className="promo__info">
            <h1 className="promo__title">THE BRAND</h1>
            <h2 className="promo__heading">
              OF LUXURIOUS <span className="fashion">FASHION</span>
            </h2>
          </div>
        </div>
      </section>

      <section className="sale center">
        <div className="sale__item">
          <img src="img/1mn.png" alt="sale image" />
          <div className="sale__content">
            <p className="sale__text">30% OFF</p>
            <h3 className="sale__heading">FOR WOMEN</h3>
          </div>
        </div>
        <div className="sale__item">
          <img src="img/2mn.png" alt="sale image" />
          <div className="sale__content">
            <p className="sale__text">HOT DEAL</p>
            <h3 className="sale__heading">FOR MEN</h3>
          </div>
        </div>
        <div className="sale__item">
          <img src="img/3mn.png" alt="sale image" />
          <div className="sale__content">
            <p className="sale__text">NEW ARRIVALS</p>
            <h3 className="sale__heading">FOR KIDS</h3>
          </div>
        </div>
        <div className="sale__item sale__item_big">
          <img
            src="img/4mn.png"
            alt="sale image"
            className="sale__item_big_width__img"
          />
          <div className="sale__content">
            <p className="sale__text">LUXIROUS & TRENDY</p>
            <h3 className="sale__heading">ACCESORIES</h3>
          </div>
        </div>
      </section>
      <h2 className="product-box__heading">Fetured Items</h2>
      <p className="product-box__text">
        Shop for items based on what we featured in this week
      </p>
      <section className="sale center">
        {Data.slice(0,6).map((item, index) => (
          <Card item={item}index={index}/>
        ))}
      </section>

      <div className="browse-all">
        <button className="browse-all__button">Browse All Products</button>
      </div>
      <Advantages/>
    </div>
  );
};

export default Chief;
