import * as React from "react";
import './DealOfTheDay.css';

interface card {
  id: number,
  title: string,
  subTitle: string,
  description: string,
  weight: string,
  originalPrice: string,
  discountPrice: string
}

const DealOfTheDay: React.FC = () => {
  const [card, setCard] = React.useState<card[]>([]);

  React.useEffect(() => {
    fetch('https://localhost:44311/api/CustomerWeb/GetValue')
      .then((response) => response.json())
      .then((json) => setCard(json))
  }, [])
  return (
    <div className="dealOfTheDay">
      <div className="container deals">
        <div className="text-center heading">
          Deal of the Day
        </div>
        <div className="deals-card position-relative d-flex col-12 border-1">
          {card.map((product) => (
            <div className="card deal col-3" key={product.id}>
              <div className="card-details p-2">
                <h6 style={{ fontWeight: 'bold' }}>{product.title}</h6>
                <h6>{product.subTitle}</h6>
                <h6 style={{ fontWeight: 'normal', fontSize: 12 }}>{product.description}</h6>
                <div className="weight-price-container">
                  <p className="m-0 weight">{product.weight}</p>
                  <p className="m-0 original-price" style={{ textDecoration: product.discountPrice ? 'line-through' : 'none' }}>
                    {product.originalPrice}
                  </p>
                  {product.discountPrice && (
                    <p className="m-0 discount-price">{product.discountPrice}</p>
                  )}
                </div>
              </div>
              <button className="card-button col-12" title="add to cart" type="submit">Add to Cart</button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default DealOfTheDay;