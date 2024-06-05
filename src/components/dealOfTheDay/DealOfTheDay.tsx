import * as React from "react";
import './DealOfTheDay.css';

interface card{
  id:number,
  title:string,
  subTitle:string,
  description:string,
  weight:string,
  originalPrice:string,
  discountPrice:string
}
 
const DealOfTheDay:React.FC=()=>{
 const [card , setCard] = React.useState<card[]>([]);

  React.useEffect(()=>{
    fetch('https://localhost:44311/api/CustomerWeb/GetValue')
    .then((response)=>response.json())
    .then((json)=>setCard(json))
  },[])
console.log(card);
    return(
    <div className="container">
      <div className="text-center">
        Deal of the Day
        </div>
        <div className="container position-relative d-flex col-12 border-1">
          {card.map((product)=>(
                        <div className="card deal col-3" key={product.id}>
                          <div className="card-details p-2">
                          <h6 style={{fontSize:13,fontWeight:'bold'}}>{product.title}</h6>
                          <h6 style={{fontSize:13}}>{product.subTitle}</h6>
                          <h6 style={{fontWeight:'normal',fontSize:12}}>{product.description}</h6>
                          <p className="m-0">{product.weight}</p>
                          </div>
                          <button className="card-button col-12" title="add to cart" type="submit">Add to Cart</button>
                        </div>
          ))}
            
        </div>
    </div>
    );
}

export default DealOfTheDay;