import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { photoURL, price, Quantity, name } = coffee;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img className="h-72" src={photoURL} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <p>Quantity: {Quantity}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <div className="join join-vertical">
              <button className="btn join-item">Button</button>
              <button className="btn join-item">Button</button>
              <button className="btn join-item">Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
