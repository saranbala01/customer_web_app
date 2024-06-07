import FeaturedPromos from "../../components/promos/FeaturedPromos";
import Header from "../../components/header/Header";
import * as React from "react";
import DealOfTheDay from "../../components/dealOfTheDay/DealOfTheDay";
import image from "../../assets/home.png";

const Home:React.FC=()=> {
  return (
    <>
      <Header />
      <div className="head h-100 ">
        <img src={image} alt="home" />
      </div>
      <FeaturedPromos/>
      <DealOfTheDay/>
    </>
  );
}

export default Home;
