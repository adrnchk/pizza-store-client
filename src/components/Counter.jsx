import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza, decPizza, deletePizza, incPizza } from "../redux/actions";

function Counter(props) {
  const [index, setIndex] = useState(1);
  const dispatch = useDispatch();
  const pizza = useSelector((state) =>
    state.cartReducer.items.find(
      (item) =>
        item.id === props.pizza.id &&
        item.type === props.pizza.type &&
        item.size === props.pizza.size
    )
  );

  function increment() {
    dispatch(incPizza(props.pizza));
    setIndex(index + 1);
  }
  function decrement() {
    dispatch(decPizza(props.pizza));
    index > 1 && setIndex(index - 1);
  }

  return (
    <div className="counter">
      <div className="counter_decrement" onClick={decrement}>
        <ion-icon name="remove-outline"></ion-icon>
      </div>
      <div className="counter_value">{pizza.count}</div>
      <div className="counter_increment" onClick={increment}>
        <ion-icon name="add-outline"></ion-icon>
      </div>
    </div>
  );
}

export default Counter;
