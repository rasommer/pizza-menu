import React from "react";

function Pizza(props) {
  const { name, ingredients, price, photoName, soldOut } = props;
  return (
    <li className="pizza">
      <img src={`/img/${photoName}`} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{`$${price}.00`}</span>
        <p>{soldOut && "Sould Out!"}</p>
      </div>
    </li>
  );
}

export default Pizza;
