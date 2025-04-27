import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Data from "../data/Data";
import "../css/style.min.css";

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
        
        {Data.map((item, index) => (
          <div className="sale__item" key={index}>
            <img src={item.image} alt={`sale image ${index}`} />
            <div className="sale__content">
              <p className="sale__text">{item.price}</p>
              <h3 className="sale__heading">{item.name}</h3>
              <p>{item.description}</p>
              <a href={item.link} className="sale__link">
                View Product
              </a>
            </div>
          </div>
        ))}
      </section>

      <Data />

      <div className="browse-all">
        <button className="browse-all__button">Browse All Products</button>
      </div>
    </div>
  );
};

export default Chief;
