export const setPizzas = (pizzas) => ({
  type: "SET_PIZZAS",
  payload: pizzas,
});
export const addPizza = (pizza) => ({
  type: "ADD_PIZZA",
  payload: pizza,
});
export const deletePizza = (pizza) => ({
  type: "DELETE_PIZZA",
  payload: pizza,
});
export const incPizza = (pizza) => ({
  type: "INC_PIZZA",
  payload: pizza,
});
export const decPizza = (pizza) => ({
  type: "DEC_PIZZA",
  payload: pizza,
});
export const changeOrderPrice = (price) => ({
  type: "ORDER_PRICE",
  payload: price,
});
export const setPromocode = (price) => ({
  type: "SET_PROMOCODE",
  payload: price,
});
