import React from "react";
import emptyCart from "../resourses/img/empty_cart.png";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addPizza, decPizza, deletePizza, incPizza } from "../redux/actions";

const useClickOutside = (handler) => {
  let domNode = useRef(null);

  useEffect(() => {
    let maybeHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

function SlideCart(props) {
  const close = () => {
    document
      .querySelector(".sidebar-container")
      .classList?.remove("sidebar-container-active");
    document
      .querySelector(".wrapper")
      .classList?.remove("wrapper-sidebar-active");
    document.querySelector("body").classList?.remove("noscroll");
  };
  let closeHandler = useClickOutside(close);
  const cartReducer = useSelector((state) => state.cartReducer);

  return (
    <div ref={closeHandler} className="sidebar-container">
      <div className="cross-btn">
        <ion-icon size="large" onClick={close} name="close-outline"></ion-icon>
      </div>

      <h1>Кошик</h1>
      {cartReducer.items.length !== 0 ? (
        <>
          {cartReducer.items &&
            cartReducer.items.map((obj) => (
              <CartItem
                key={obj.id + obj.type + obj.size}
                id={obj.id}
                category={obj.category}
                size={obj.size}
                type={obj.type}
                image={obj.image}
                name={obj.name}
                price={obj.price}
                count={obj.count}
              />
            ))}
          <div className="sidebar_price">
            <p>До сплати:</p>
            <p>{cartReducer.orderPrice}грн</p>
          </div>
          <Link to="cart">
            <div
              className="button"
              style={{ width: "100%", fontSize: "16px", marginTop: "5px" }}
              onClick={close}
            >
              Оформити
            </div>
          </Link>
        </>
      ) : (
        <div
          style={{
            height: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            transition: "0.3ms",
          }}
        >
          <div className="side-cart--empty">
            <img width="50%" src={emptyCart}></img>
            <h2>Кошик пустий :(</h2>
            <p>У вас гарний смак</p>
            <p>А у нас гарний вибір смачної піци🤩</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SlideCart;
