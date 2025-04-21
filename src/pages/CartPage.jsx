import React from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../css/cart.min.css'

const Cart = () => {
  return (
    <div>
      <Header/>

      <section className="head center">
        <h2 className="head__heading">SHOPPING CART</h2>
      </section>

      <section className="cart">
        <section className="cart__left">
          <section className="cart__left-column">
            <article className="cart-item">
              <figure className="cart-item__image">
                <img src="img/3photocatalog.png" alt="Product Image" />
              </figure>

              <div className="cart-item__details">
                <h3 className="cart-item__title">MANGO PEOPLE <br />T-SHIRT</h3>
                <ul className="cart-item__attributes">
                  <li className="cart-item__attribute">
                    Price:
                    <span className="cart-item__attribute--highlight">$300</span>
                  </li>
                  <li className="cart-item__attribute">Color: Red</li>
                  <li className="cart-item__attribute">Size: XL</li>
                  <li className="cart-item__attribute">
                    Quantity:
                    <div className="quantity-control">
                      <span className="quantity-control__value">2</span>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
            <button className="cart__close-btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                  fill="#575757"
                />
              </svg>
            </button>
          </section>

          <section className="cart__left-column__two">
            <article className="cart-item">
              <figure className="cart-item__image">
                <img src="img/2photocatalog.png" alt="Product Image" />
              </figure>

              <div className="cart-item__details">
                <h3 className="cart-item__title">MANGO PEOPLE <br />T-SHIRT</h3>
                <ul className="cart-item__attributes">
                  <li className="cart-item__attribute">
                    Price:
                    <span className="cart-item__attribute--highlight">$300</span>
                  </li>
                  <li className="cart-item__attribute">Color: Red</li>
                  <li className="cart-item__attribute">Size: XL</li>
                  <li className="cart-item__attribute">
                    Quantity:
                    <div className="quantity-control">
                      <span className="quantity-control__value">2</span>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
            <button className="cart__close-btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                  fill="#575757"
                />
              </svg>
            </button>
          </section>

          <section className="cart__button">
            <button className="cart__button__left">Clear shopping cart</button>
            <button>Continue shopping</button>
          </section>
        </section>

        <section className="cart__shipping-address">
          <div className="shipping-address__field">
            <h2 className="shipping-address__header">SHIPPING ADRESS</h2>

            <input
              type="text"
              id="country"
              name="country"
              className="shipping-address__input"
              placeholder="Bangladesh"
              required
            />

            <input
              type="text"
              id="state"
              name="state"
              className="shipping-address__input"
              placeholder="State"
              required
            />

            <input
              type="text"
              id="postcode"
              name="postcode"
              className="shipping-address__input"
              placeholder="Postcode / Zip"
              required
              pattern="d{5}(-d{4})?"
            />

            <button type="submit" className="shipping-address__submit-button">
              GET A QUOTE
            </button>
          </div>

          <div className="shipping-address__rectangle">
            <div className="sub__total">
              SUB TOTAL<span className="amount">$900</span>
            </div>
            <div className="grand__total">
              GRAND TOTAL<span className="amount">$900</span>
            </div>
            <div className="mini__line"></div>
            <button className="proceed__checkout">PROCEED TO CHECKOUT</button>
          </div>
        </section>
      </section>

      <Footer/>
    </div>
  );
};

export default Cart;
