import React, { useState } from "react";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const featuredItems = [
    {
      name: "ELLERY X M'O CAPSULE",
      description:
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      image: "img/1mb.jpg",
      link: "product.html",
    },
    {
      name: "ELLERY X M'O CAPSULE",
      description:
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      image: "img/2mb.png",
      link: "product.html",
    },
    {
      name: "ELLERY X M'O CAPSULE",
      description:
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      image: "img/3mb.png",
      link: "product.html",
    },
  ];

  const renderFeaturedItems = () => {
    return featuredItems.map((item, index) => (
      <div className="product" key={index}>
        <img className="product__img" src={item.image} alt={item.name} />
        <div className="product__content">
          <a href={item.link} className="product__heading">
            {item.name}
          </a>
          <p className="product__text">{item.description}</p>
          <p className="product__price">{item.price}</p>
        </div>
        <a href="#" className="product__add">
          <img src="img/5h.svg" alt="add to cart" /> Add to Cart
        </a>
      </div>
    ));
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div>
      <div className="top">
        <header className="header center">
          <div className="header__left">
            <a href="index.html">
              <img src="img/1h.png" alt="logo" />
            </a>
            <a href="#">
              <img src="img/2h.svg" alt="search" />
            </a>
          </div>
          <nav className="header__right">
            <label htmlFor="header__check">
              <img src="img/3h.svg" alt="menu" />
            </label>
            <a className="header__link-site" href="registration.html">
              <img src="img/4h.svg" alt="reg" />
            </a>
            <a className="header__link-site" href="cart.html">
              <img src="img/5h.svg" alt="cart" />
            </a>
          </nav>
        </header>
      </div>

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

      <section className="product-box center">
        <div className="product-box__content">{renderFeaturedItems()}</div>
      </section>

      <footer>
        <div className="email__sending">
          <div className="email__face">
            <img src="img/facebr.png" alt="#" className="email__face__img" />
            <p className="email__quote">
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
              <span className="email__quote__italic">
                a pulvinar purus condimentum“
              </span>
            </p>
          </div>

          <div className="email__subscribe">
            <p className="email__text">
              SUBSCRIBE <br />
              <span className="email__text__light">
                FOR OUR NEWSLETTER AND PROMOTIONS
              </span>
            </p>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="email__field"
            />
            <button className="email__field__button">Subscribe</button>
          </div>
        </div>

        <div className="social__networks">
          <p className="social__text">© 2022 Brand All Rights Reserved.</p>
          <div className="social__icon">
            {/* Social media icons would be inserted here */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Product;
