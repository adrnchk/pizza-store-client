import React, { useRef, useState } from "react";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addPizza,
  decPizza,
  deletePizza,
  incPizza,
  changeOrderPrice,
  setPromocode,
} from "../redux/actions";

import emptyCart from "../resourses/img/empty_cart.png";

function Cart() {
  const cartReducer = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const promocode = useRef(null);
  const tryPromocode = () => {
    !cartReducer.promocode
      ? promocode.current.value === "adr123" &&
        dispatch(changeOrderPrice(cartReducer.orderPrice / 2)) &&
        dispatch(setPromocode(true)) &&
        console.log("Promocode activated -50%")
      : alert("You can use only one promocode at the same time");
  };

  return (
    <div className="cart-content">
      <h2>Кошик</h2>
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
          <div className="cart_promocode">
            <h3>Промокод:</h3>
            <input ref={promocode} type="text" />
            <button onClick={tryPromocode}>Застосувати</button>
          </div>
          <div className="cart_price">
            <p>До сплати: </p>
            <span>{cartReducer.orderPrice}грн</span>
          </div>

          <div
            className="button"
            style={{ width: "100%", fontSize: "16px", marginTop: "5px" }}
          >
            Оформити
          </div>
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

export default Cart;
