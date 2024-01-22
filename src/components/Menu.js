import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../data/pizza-data";

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData &&
          pizzaData.map((pizza) => {
            return (
              <Pizza
                key={pizza.name}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                photoName={pizza.photoName}
                soldOut={pizza.soldOut}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default Menu;
