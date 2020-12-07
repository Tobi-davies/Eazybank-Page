import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import IntroPage from "./components/intro-page/intro-page";
import ReasonPage from "./components/reason-page/reason";
import Article from "./components/article/article";
import Footer from "./components/footer/footer";

const App = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <Header toggler={setToggle} toggle={toggle} />
      <IntroPage toggle={toggle} />
      <ReasonPage />
      <Article />
      <Footer />
    </div>
  );
};

export default App;
