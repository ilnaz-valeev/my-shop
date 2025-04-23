import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import dataCart from "../data/dataCart"; 
import "../css/cart.min.css";

const Cart = () => {
  // Инициализация состояния для товаров в корзине из dataCart.js
  const [cartItems, setCartItems] = useState(dataCart);

  // Функция для изменения количества товара
  const changeQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return; // Не позволяем количество быть меньше 1
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Функция для подсчета общей стоимости
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <Header />

      <section className="head center">
        <h2 className="head__heading">SHOPPING CART</h2>
      </section>

      <section className="cart">
        <section className="cart__left">
          {cartItems.map((item) => (
            <section key={item.id} className="cart__left-column">
              <article className="cart-item">
                <figure className="cart-item__image">
                  <img src={item.image} alt="Product Image" />
                </figure>

                <div className="cart-item__details">
                  <h3 className="cart-item__title">{item.name}</h3>
                  <ul className="cart-item__attributes">
                    <li className="cart-item__attribute">
                      Price:
                      <span className="cart-item__attribute--highlight">
                        ${item.price}
                      </span>
                    </li>
                    <li className="cart-item__attribute">Color: Red</li>
                    <li className="cart-item__attribute">Size: XL</li>
                    <li className="cart-item__attribute">
                      Quantity:
                      <div className="quantity-control">
                        <button
                          onClick={() =>
                            changeQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span className="quantity-control__value">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            changeQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </article>
            </section>
          ))}

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
              SUB TOTAL<span className="amount">${calculateTotal()}</span>
            </div>
            <div className="grand__total">
              GRAND TOTAL<span className="amount">${calculateTotal()}</span>
            </div>
            <div className="mini__line"></div>
            <button className="proceed__checkout">PROCEED TO CHECKOUT</button>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
