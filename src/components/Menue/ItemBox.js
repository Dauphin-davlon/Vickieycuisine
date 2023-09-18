import React from "react";
import './menue.css'

export default function MenuItem({ item }) {
  return (
    <div className="MenuItem">
      <div className="image">
        <img src={item.imageSrc} alt={item.name} />
      </div>
      <div className="info">
        <div className="name">{item.name}</div>
        <div className="description">{item.description}</div>
        <div className="price">${item.price}</div>
      </div>
      <button className="addToCart">Add to Cart</button>
    </div>
  );
}
