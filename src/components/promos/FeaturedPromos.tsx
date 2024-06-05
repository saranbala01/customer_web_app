import "./FeaturedPromos.css";
import * as React from "react";

interface Promo{
  id:number,
  head: string,
  body: string,
  foot:string
}

function FeaturedPromos() {
const [cardDetails,setCardDetails] = React.useState<Promo[]>([]);

React.useEffect(()=>{
  fetch('https://localhost:44311/api/CustomerWeb/GetPromos')
  .then((response)=>response.json())
  .then((json)=>setCardDetails(json))
},[])

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
