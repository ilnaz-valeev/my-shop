import React from "react";
import ReactDOM from "react-dom/client"; // Новый импорт для React 18
import App from "./App";
import "./index.css"; // Глобальные стили для всего приложения

// Создаем корневой элемент и рендерим компонент App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
