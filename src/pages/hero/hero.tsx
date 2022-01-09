import React from "react";
import "./_hero.css";
import { Header } from "../../components/header/header";

export const Hero = () => {
  return (
    <div className="wrapper">
      <div className="hero__container">
        <Header />
        <div className="hero">
          <h1 className="hero__header">Hey, I'm Muneer...</h1>
          <h3 className="hero__subHeader">
            A Frontend Engineer, who likes to create solid and scalable
            products.
          </h3>
          <div className="hero__header-btn">
            <button className="hero__btn btn-1">resume</button>
            <button className="hero__btn btn-2">gmail</button>
            <button className="hero__btn btn-3">LinkedIn</button>
            <button className="hero__btn btn-4">github</button>
          </div>
        </div>
      </div>
    </div>
  );
};
