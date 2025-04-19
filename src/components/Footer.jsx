import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="email__sending">
        <div className="email__sending__face">
          <img
            src="img/facebr.png"
            alt="#"
            className="email__sending__face__img"
          />
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
  );
};

export default Footer;
