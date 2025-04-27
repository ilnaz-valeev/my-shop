import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Data from "../data/Data";
import "../css/product.min.css";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <Header />

      <section className="head center">
        <h2 className="head__heading">NEW ARRIVALS</h2>
        <div className="breadcrumb">
          <div className="breadcrumb__box-link">
            <a className="breadcrumb__link" href="index.html">
              HOME /
            </a>
          </div>
          <div className="breadcrumb__box-link">
            <a className="breadcrumb__link" href="#">
              MEN /
            </a>
          </div>
          <div className="breadcrumb__box-link">
            <a className="breadcrumb__link pink__a" href="#">
              NEW ARRIVALS
            </a>
          </div>
        </div>
      </section>

      <div className="slider">
        <a href="#" className="slider__arrow slider__arrow_left">
          <svg
            width="13"
            height="23"
            viewBox="0 0 13 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z"
              fill="black"
            />
          </svg>
        </a>
        <img src="img/product img.png" alt="slider photo" />
        <a href="#" className="slider__arrow slider__arrow_right">
          <svg
            width="13"
            height="23"
            viewBox="0 0 13 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.299805 19.2499L8.0498 11.4999L0.299805 3.7499L1.8498 0.649902L12.6998 11.4999L1.8498 22.3499L0.299805 19.2499Z"
              fill="black"
            />
          </svg>
        </a>
      </div>

      <section className="content">
        <h3>WOMEN COLLECTION</h3>
        <div className="content__line"></div>
        <h2 className="content__heading">MOSCHINO CHEAP AND CHIC</h2>
        <p className="content__text">
          Compellingly actualize fully researched processes before proactive
          outsourcing. <br />
          Progressively syndicate collaborative architectures before
          cutting-edge services. Completely <br />
          visualize parallel core competencies rather than exceptional portals.
        </p>
        <div className="content__price">$561</div>
        <div className="content__line-big"></div>
        <div className="sort">
          <details className="sort__details">
            <summary className="sort__summary">
              CHOOSE COLOR <img src="img/arrowu.svg" alt="#" />
            </summary>
          </details>
          <details className="sort__details">
            <summary className="sort__summary">
              CHOOSE SIZE <img src="img/arrowu.svg" alt="#" />
            </summary>
          </details>
          <details className="sort__details">
            <summary className="sort__summary">
              QUANTITY <img src="img/arrowu.svg" alt="#" />
            </summary>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="quantity__input"
            />
          </details>
        </div>
        <button className="button__basket">
          <img
            src="img/basket.svg"
            alt="cart"
            className="button__basket__img"
          />
          <span>Add to Cart</span>
        </button>
      </section>

      <Data />

      <Footer />
    </div>
  );
};

export default Product;
