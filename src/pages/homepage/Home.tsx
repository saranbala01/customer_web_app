import FeaturedPromos from "../../components/promos/FeaturedPromos";
import Header from "../../components/header/Header";
import "./Home.css";
import * as React from "react";
import image from "../../assets/home.png";
import DealOfTheDay from "../../components/dealOfTheDay/DealOfTheDay";

const Home:React.FC=()=> {
  return (
    <>
      <Header />
      <div className="head h-100 ">
        <img src={image} alt="home" />
      </div>
      <FeaturedPromos />
      <DealOfTheDay />
    </>
  );
}

export default Home;
