import React from "react";
import "./home.css";
import Me from "../../assets/Astronaut-desk.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img"/>
        <h1 className="home__name">muu</h1>
        <span className="home__education">私はエンジニアを志す者です。</span>
        <HeaderSocials/>

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home