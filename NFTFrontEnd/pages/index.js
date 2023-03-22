import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection, Service } from "../components/componentsIndex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
    </div>
  );
};

export default Home;