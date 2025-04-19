import React from "react";

const Catalog = () => {
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

      <div className="filter-sort center">
        <div className="filter-box">
          <details className="filter">
            <summary className="filter__summary">
              FILTER
              <svg
                className="filter__img"
                width="15"
                height="10"
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                  fill="black"
                />
              </svg>
            </summary>
            <div className="filter__content">
              <details className="filter__category" open>
                <summary className="filter__category-summary">CATEGORY</summary>
                <div className="filter__box">
                  <a className="filter__link">Accessories</a>
                  <a className="filter__link">Bags</a>
                  <a className="filter__link">Denim</a>
                  <a className="filter__link">Hoodies & Sweatshirts</a>
                  <a className="filter__link">Jackets & Coats</a>
                  <a className="filter__link">Polos</a>
                  <a className="filter__link">Shirts</a>
                  <a className="filter__link">Shoes</a>
                  <a className="filter__link">Sweaters & Knits</a>
                  <a className="filter__link">T-Shirts</a>
                  <a className="filter__link">Tanks</a>
                </div>
              </details>
              <details className="filter__category">
                <summary className="filter__category-summary">BRAND</summary>
                <div className="filter__box">
                  <a className="filter__link">Accessories</a>
                  <a className="filter__link">Bags</a>
                  <a className="filter__link">Denim</a>
                  <a className="filter__link">Hoodies & Sweatshirts</a>
                  <a className="filter__link">Jackets & Coats</a>
                  <a className="filter__link">Polos</a>
                  <a className="filter__link">Shirts</a>
                  <a className="filter__link">Shoes</a>
                  <a className="filter__link">Sweaters & Knits</a>
                  <a className="filter__link">T-Shirts</a>
                  <a className="filter__link">Tanks</a>
                </div>
              </details>
              <details className="filter__category">
                <summary className="filter__category-summary">DESIGN</summary>
                <div className="filter__box">
                  <a className="filter__link">Accessories</a>
                  <a className="filter__link">Bags</a>
                  <a className="filter__link">Denim</a>
                  <a className="filter__link">Hoodies & Sweatshirts</a>
                  <a className="filter__link">Jackets & Coats</a>
                  <a className="filter__link">Polos</a>
                  <a className="filter__link">Shirts</a>
                  <a className="filter__link">Shoes</a>
                  <a className="filter__link">Sweaters & Knits</a>
                  <a className="filter__link">T-Shirts</a>
                  <a className="filter__link">Tanks</a>
                </div>
              </details>
            </div>
          </details>
        </div>

        <div className="sort">
          <details className="sort__details">
            <summary className="sort__summary">
              TRENDING NOW
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
            <div className="sort__content"></div>
          </details>

          <details className="sort__details">
            <summary className="sort__summary">
              SIZE
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
            <div className="sort__content">
              <label className="sort__label">
                <input type="checkbox" name="" id="" /> <span>XS</span>
              </label>
              <label className="sort__label">
                <input type="checkbox" name="" id="" /> <span>S</span>
              </label>
              <label className="sort__label">
                <input type="checkbox" name="" id="" /> <span>M</span>
              </label>
              <label className="sort__label">
                <input type="checkbox" name="" id="" /> <span>L</span>
              </label>
            </div>
          </details>

          <details className="sort__details">
            <summary className="sort__summary">
              PRICE
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
            <div className="sort__content">
              <label className="sort__label">
                <input type="checkbox" name="" id="" /> <span>XS</span>
              </label>
              <label className="sort__label">
                <input type="checkbox" name="" id="" /> <span>S</span>
              </label>
              <label className="sort__label">
                <input type="checkbox" name="" id="" /> <span>M</span>
              </label>
              <label className="sort__label">
                <input type="checkbox" name="" id="" /> <span>L</span>
              </label>
            </div>
          </details>
        </div>
      </div>

      <section className="product-box center">
        <div className="product-box__content">
          {/* Product 1 */}
          <div className="product">
            <img className="product__img" src="img/1mb.jpg" alt="" />
            <div className="product__content">
              <a href="product.html" className="product__heading">
                ELLERY X M'O CAPSULE
              </a>
              <p className="product__text">
                Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda
                Operandi.
              </p>
              <p className="product__price">$52.00</p>
            </div>
            <a href="#" className="product__add">
              <img src="img/5h.svg" alt="#" /> Add to Cart
            </a>
          </div>

          {/* More product sections can be added similarly */}
        </div>
      </section>

      <div className="pagination" role="navigation" aria-label="Pagination">
        <button
          className="pagination__arrow pagination__arrow--prev"
          aria-label="Previous page"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99512 2L2.99512 7L7.99512 12L6.99512 14L-0.00488281 7L6.99512 0L7.99512 2Z"
              fill="black"
            />
          </svg>
        </button>
        <div className="pagination__numbers">
          <span className="pagination__numb">1</span>
          <span className="pagination__numb">2</span>
          <span className="pagination__numb">3</span>
          <span className="pagination__numb">4</span>
          <span className="pagination__numb">5</span>
          <span className="pagination__numb">6</span>
          <span className="pagination__ellipsis">...</span>
          <span className="pagination__numb end__numb">20</span>
        </div>
        <button
          className="pagination__arrow pagination__arrow--next"
          aria-label="Next page"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z"
              fill="black"
            />
          </svg>
        </button>
      </div>

      <footer>
        <div className="email__sending">
          <div className="email__face">
            <img src="img/facebr.png" alt="#" className="email__face__img" />
            <p className="email__quote">
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
              <span className="email__quote__italic">
                a pulvinar purus condimentum
              </span>
            </p>
          </div>

          <div className="email__subscribe">
            <p className="email__text">
              SUBSCRIBE <br />
              <span className="email__text__light">
                FOR OUR NEWSLETTER AND PROMOTION
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
            <div className="social__icon__block">
              <svg
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.08827 8.28L8.50677 5.61602H5.89013V3.88729C5.89013 3.15847 6.25565 2.44806 7.42756 2.44806H8.61713V0.179975C8.61713 0.179975 7.53763 0 6.50551 0C4.35064 0 2.94211 1.27593 2.94211 3.5857V5.61602H0.546783V8.28H2.94211V14.72H5.89013V8.28H8.08827Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
