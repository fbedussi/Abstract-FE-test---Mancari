import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import Header from "./components/Header.jsx";
import Page from "./components/Page.jsx";
import Footer from "./components/Footer.jsx";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Page />
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
