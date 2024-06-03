import * as React from "react";

const card = [
    {
      id: 1,
      head: "Premium Antibiotic-residue-free Boneless Chicken Breast Fillest",
      bodyh: "From Joseph Farm",
      foot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, optio repellat aperiam saepe obcaecati vitae dolorem quam, rerum aspernatur modi quae quidem nisi! Odit, est. Veritatis fugiat odit laborum nam.", 
    },
    {
      id: 2,
      head: "Fresh Beans",
      body: "From Martha's Fresh Farm",
      foot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, optio repellat aperiam saepe obcaecati vitae dolorem quam, rerum aspernatur modi quae quidem nisi! Odit, est. Veritatis fugiat odit laborum nam.",
    },
    {
      id: 3,
      head: "Premium,delicious and rich with calcium Cow Milk(Organic)",
      body: "From George Farm",
      foot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, optio repellat aperiam saepe obcaecati vitae dolorem quam, rerum aspernatur modi quae quidem nisi! Odit, est. Veritatis fugiat odit laborum nam.",
    },
  ];

const DealOfTheDay:React.FC=()=>{
    return(
    <div className="container text-center">
        Deal of the Day
        <div className="card col-12 border-1">
            <div className="col-3"></div>
            
        </div>
    </div>
    );
}

export default DealOfTheDay;