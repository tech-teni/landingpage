import React from "react";
import Header from "./components/Header";
import "./App.css";
import Work from "./components/Work";
import Product from "./components/Product";
import AppFeatures from "./components/AppFeatures";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Work />
      <Product />
      <AppFeatures />
      <DownloadApp />
      <Footer />
    </>
  );
};

export default App;
