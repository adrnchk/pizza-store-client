import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza, decPizza, deletePizza, incPizza } from "../redux/actions";

function PizzaBlock(props) {
  const [type, settype] = React.useState(null);
  const [size, setsize] = React.useState(0);

  const dispatch = useDispatch();
  const cartReducer = useSelector((state) => state.cartReducer);

  const changesize = (index) => {
    setsize(index);
  };
  const changetype = (index) => {
    settype(index);
  };
  React.useEffect(() => {
    if (props.types[0] === 0) settype(0);
    if (props.types[0] === 1) settype(1);
  }, []);

  const addPizzaToCart = () => {
    const newItem = {
      id: props.id,
      category: props.category,
      size: props.sizes[size],
      type: type === 0 ? "традиційна" : "тонка",
      image: props.image,
      name: props.name,
      price: props.price,
      count: 1,
    };
    dispatch(addPizza(newItem));
  };
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={props.image} alt="Pizza" />

      <h4 className="pizza-block__title">{props.name}</h4>
      <div className="pizza-block__info">
        <p>{props.desc}</p>
      </div>
      <div className="pizza-block__selector">
        {props.types && (
          <ul>
            <li
              className={
                props.types.includes(0)
                  ? type === 0
                    ? "active"
                    : ""
                  : "disabled"
              }
              onClick={props.types.includes(0) ? () => changetype(0) : () => {}}
            >
              тонке
            </li>
            <li
              className={
                props.types.includes(1)
                  ? type === 1
                    ? "active"
                    : ""
                  : "disabled"
              }
              onClick={props.types.includes(1) ? () => changetype(1) : () => {}}
            >
              традиційне
            </li>
          </ul>
        )}

        {props.sizes && (
          <ul>
            {props.sizes.map((name, index) => (
              <li
                key={name}
                className={size === index ? "active" : ""}
                onClick={() => changesize(index)}
              >
                {name} см.
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{props.price} грн</div>
        <div
          onClick={addPizzaToCart}
          className="button button--outline button--add"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Додати</span>
          {cartReducer?.productCount != 0 && <i>{cartReducer.productCount}</i>}
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
