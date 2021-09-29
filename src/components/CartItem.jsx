import React from "react";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";
import { addPizza, decPizza, deletePizza, incPizza } from "../redux/actions";

export default function CartItem(props) {
  const dispatch = useDispatch();
  const pizza = useSelector((state) =>
    state.cartReducer.items.find(
      (item) =>
        item.id === props.id &&
        item.type === props.type &&
        item.size === props.size
    )
  );
  return (
    <div className="cart-item">
      <img className="cart-item__image" src={props.image} alt="Pizza" />
      <div className="cart_item__info">
        <h4 className="cart-item__title">{props.name}</h4>
        <small className="cart_item__desc">
          {props.type}, {props.size}см
        </small>
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: "20px",
          marginTop: "60px",
          alignItems: "center",
        }}
      >
        <Counter pizza={props}></Counter>
        <p className="cart_item__price" style={{ marginLeft: "10px" }}>
          {pizza.price ? pizza.price * pizza.count : "0"}грн
        </p>
      </div>
      <div
        className="cart-item__delete"
        onClick={() => {
          dispatch(deletePizza(props));
        }}
      >
        <ion-icon name="trash-outline"></ion-icon>
      </div>
    </div>
  );
}
