import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/header";
import IntroPage from "./components/intro-page/intro-page";
import ReasonPage from "./components/reason-page/reason";
import Article from "./components/article/article";
import Footer from "./components/footer/footer";

const App = () => {
  // const APP_ID = "02f830bb";
  // const APP_KEY = "2ed7281c628add4c5781c4d8e1454dde";

  // const example = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return (
    <div className="App">
      <Header />
      <IntroPage />
      <ReasonPage />
      <Article />
      <Footer />
    </div>
  );
};

export default App;
