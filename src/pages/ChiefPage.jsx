import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Data from "../data/Data";
import "../css/style.min.css";

const Chief = () => {
  return (
    <div>
      <Header />

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
        {/* Sale items would be inserted here */}
      </section>

      <Data />

      <div className="browse-all">
        <button className="browse-all__button">Browse All Products</button>
      </div>

      <Footer />
    </div>
  );
};

export default Chief;
