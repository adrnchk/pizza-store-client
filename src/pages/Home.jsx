import React from "react";
import { PizzaBlock, Categories, Header, SortPopup } from "../components";

import { useDispatch, useSelector } from "react-redux";
import { addPizza, decPizza, deletePizza, incPizza } from "../redux/actions";
function Home(props) {
  const pizzaReducer = useSelector((state) => state.pizzaReducer);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryNames={["Усі", "Акції", "Популярні", "Класичні", "Преміум"]}
        ></Categories>
        <SortPopup items={["популярності", "ціні", "алфавіту"]}></SortPopup>
      </div>

      <h2 className="content__title">Усі піци</h2>
      <div className="content__items">
        {pizzaReducer &&
          pizzaReducer.items.map((obj) => (
            <PizzaBlock
              key={obj.id}
              id={obj.id}
              rating={obj.rating}
              category={obj.category}
              sizes={obj.sizes}
              types={obj.types}
              image={obj.imageUrl}
              name={obj.name}
              price={obj.price}
              desc={obj.desc}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
