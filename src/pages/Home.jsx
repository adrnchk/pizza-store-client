import React from "react";
import { PizzaBlock, Categories, Header, SortPopup } from "../components";
function Home(props) {
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
        {props.products.map((obj) => (
          <PizzaBlock
            key={obj.id}
            rating={obj.rating}
            category={obj.category}
            sizes={obj.sizes}
            types={obj.types}
            image={obj.imageUrl}
            name={obj.name}
            price={obj.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
