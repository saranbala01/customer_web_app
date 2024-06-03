import "./FeaturedPromos.css";
import * as React from "react";

function FeaturedPromos() {
  const cardDetails = [
    {
      id: 1,
      head: "Freshly Harvested",
      body: "Organic Vegetables",
      foot: "at your doorstep",
    },
    {
      id: 2,
      head: "Make your Day",
      body: "Fruitilicious",
      foot: "Fresh and exotic fruits from Al Fasilya Farms",
    },
    {
      id: 3,
      head: "Enriched with natural",
      body: "Sweetness!",
      foot: "Premium quality dates from Abdaly Farms",
    },
  ];

  return (
    <>
      <div className=" mt-5 container fw-semibold  fs-3 ">
        Featured Promos
      </div>
      <div className="d-flex justify-content-around ">
        <div className="promos justify-content-center ">
          {cardDetails.map((details) => (
            <div className="cards"  key={details.id}>
              <h5>{details.head}</h5>
              <h3>{details.body}</h3>
              <h6>{details.foot}</h6>
              <button className="explore">Explore</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturedPromos;
