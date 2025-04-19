import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Здесь можно отправить данные на сервер
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
        <h2 className="head__heading">REGISTRATION</h2>
      </section>

      <section className="content">
        <form onSubmit={handleSubmit}>
          <div className="content__left">
            <h3 className="content__left__header__name">Your Name</h3>
            <input
              type="text"
              name="firstName"
              className="content__left__input"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              className="content__left__input"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <div className="floor__selection">
              <label className="floor__selection__male">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  required
                />{" "}
                Male
              </label>
              <label className="floor__selection__female">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  required
                />{" "}
                Female
              </label>
            </div>

            <h3 className="content__left__header__name">Login details</h3>

            <input
              type="email"
              name="email"
              className="content__left__input"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              className="content__left__input"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <p className="content__left__text">
              Please use 8 or more characters, with at least 1 number and a
              mixture of uppercase and lowercase letters
            </p>

            <button type="submit" className="proceed__checkout">
              JOIN NOW
              <svg
                width="17"
                height="10"
                viewBox="0 0 17 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.77 0.0540883C11.684 0.0897967 11.6058 0.142131 11.54 0.208095C11.474 0.273891 11.4217 0.352055 11.386 0.438109C11.3503 0.524162 11.3319 0.616415 11.3319 0.709584C11.3319 0.802752 11.3503 0.895005 11.386 0.981059C11.4217 1.06711 11.474 1.14528 11.54 1.21107L14.5812 4.25116H0.708318C0.52046 4.25116 0.340297 4.32579 0.207462 4.45862C0.0746263 4.59146 0 4.77162 0 4.95948C0 5.14734 0.0746263 5.3275 0.207462 5.46033C0.340297 5.59317 0.52046 5.6678 0.708318 5.6678H14.5813L11.54 8.70791C11.407 8.84091 11.3323 9.0213 11.3323 9.2094C11.3323 9.39749 11.407 9.57788 11.54 9.71089C11.673 9.84389 11.8534 9.91861 12.0415 9.91861C12.2296 9.91861 12.41 9.84389 12.543 9.71089L16.7929 5.46098C16.8589 5.39518 16.9112 5.31702 16.9469 5.23097C16.9826 5.14491 17.001 5.05266 17.001 4.95949C17.001 4.86632 16.9826 4.77407 16.9469 4.68802C16.9112 4.60196 16.8589 4.5238 16.7929 4.458L12.543 0.208095C12.4772 0.142131 12.399 0.0897967 12.313 0.0540883C12.2269 0.01838 12.1347 0 12.0415 0C11.9483 0 11.8561 0.01838 11.77 0.0540883Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>

        <section className="content__right">
          <p className="content__right__header">LOYALTY HAS ITS PERKS</p>
          <p className="content__right__under__header">
            Get in on the loyalty program where you can earn points and unlock
            serious perks. Starting with these as soon as you join:
          </p>
          <span>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                fill="black"
              />
            </svg>
            <p>15% off welcome offer</p>
          </span>
          {/* Повторите для других преимуществ */}
        </section>
      </section>

      <footer>{/* Код для подписки и социальных сетей */}</footer>
    </div>
  );
};

export default Registration;
