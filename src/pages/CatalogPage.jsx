import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Data from "../data/Data"; // Импортируем массив данных
import "../css/catalog.min.css";

const Catalog = () => {
  // Состояние для выбранных размеров
  const [selectedSizes, setSelectedSizes] = useState({
    XS: false,
    S: false,
    M: false,
    L: false,
  });

  // Обработчик изменений состояния для фильтрации по размеру
  const handleSizeChange = (size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [size]: !prevSizes[size], // Переключение состояния выбранного размера
    }));
  };

  // Функция для фильтрации товаров по выбранным размерам
  const filterBySize = (product) => {
    const productSizes = product.sizes || []; // Предполагаем, что у продукта есть массив 'sizes'
    return productSizes.some((size) => selectedSizes[size]);
  };

  return (
    <div>
      
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
            </div>
          </details>
        </div>

        <div className="sort">
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
                <input
                  type="checkbox"
                  onChange={() => handleSizeChange("XS")}
                  checked={selectedSizes.XS}
                />{" "}
                <span>XS</span>
              </label>
              <label className="sort__label">
                <input
                  type="checkbox"
                  onChange={() => handleSizeChange("S")}
                  checked={selectedSizes.S}
                />{" "}
                <span>S</span>
              </label>
              <label className="sort__label">
                <input
                  type="checkbox"
                  onChange={() => handleSizeChange("M")}
                  checked={selectedSizes.M}
                />{" "}
                <span>M</span>
              </label>
              <label className="sort__label">
                <input
                  type="checkbox"
                  onChange={() => handleSizeChange("L")}
                  checked={selectedSizes.L}
                />{" "}
                <span>L</span>
              </label>
            </div>
          </details>
        </div>
      </div>

      {/* Фильтрация и отображение данных */}
      <div className="product-list">
        {Data.filter(filterBySize).map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <a href={product.link}>View Product</a>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Catalog;
