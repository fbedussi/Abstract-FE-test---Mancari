import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import Header from "./components/Header.jsx";
import Page from "./components/Page.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Page />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
