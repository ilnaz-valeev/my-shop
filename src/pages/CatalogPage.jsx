import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Data from "../data/Data";
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
    const productSizes = product.sizes; // Предполагаем, что у продукта есть массив 'sizes'
    return productSizes.some((size) => selectedSizes[size]);
  };

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
                <path d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625..." />
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
                <path d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493..." />
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

      {/* Передаем функцию фильтрации в компонент Data */}
      <Data filterBySize={filterBySize} />

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

      <Footer />
    </div>
  );
};

export default Catalog;
