const initialState = {
  items: [],
  orderPrice: 0,
  productCount: 0,
  promocode: false,
};

const cart = (state = initialState, action) => {
  if (action.type === "ORDER_PRICE") {
    if (action.payload >= 0)
      return {
        ...state,
        orderPrice: Math.round(action.payload * 100) / 100,
      };
  }
  if (action.type === "SET_PROMOCODE") {
    return {
      ...state,
      promocode: action.payload,
    };
  }

  if (action.type === "INC_PIZZA") {
    let old = state.items.findIndex(
      (item) =>
        item.id === action.payload.id &&
        item.type === action.payload.type &&
        item.size === action.payload.size
    );
    if (old !== -1) {
      let newItems = state.items;
      newItems[old].count++;
      return {
        ...state,
        items: newItems,
        orderPrice: state.orderPrice + action.payload.price,
      };
    }
  }
  if (action.type === "DEC_PIZZA") {
    let old = state.items.findIndex(
      (item) =>
        item.id === action.payload.id &&
        item.type === action.payload.type &&
        item.size === action.payload.size
    );
    if (old !== -1) {
      let newItems = state.items;
      if (newItems[old].count > 1) {
        newItems[old].count--;
        return {
          ...state,
          items: newItems,
          orderPrice: state.orderPrice - action.payload.price,
        };
      }
    }
  }
  if (action.type === "ADD_PIZZA") {
    let old = state.items.findIndex(
      (item) =>
        item.id === action.payload.id &&
        item.type === action.payload.type &&
        item.size === action.payload.size
    );
    if (old === -1) {
      return {
        ...state,
        items: [...state.items, action.payload],
        productCount: state.productCount + 1,
        orderPrice: state.orderPrice + action.payload.price,
      };
    } else {
      let newItems = state.items;
      newItems[old].count++;
      return {
        ...state,
        items: newItems,
        orderPrice: state.orderPrice + action.payload.price,
      };
    }
  }
  if (action.type === "DELETE_PIZZA") {
    let count = state.items.find(
      (item) =>
        item.id === action.payload.id &&
        item.type === action.payload.type &&
        item.size === action.payload.size
    ).count;
    console.log(count);
    return {
      ...state,
      productCount: state.productCount - 1,
      items: state.items.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.type !== action.payload.type ||
          item.size !== action.payload.size
      ),
      orderPrice: state.orderPrice - action.payload.price * count,
      productCount: state.productCount - 1,
    };
  }
  return state;
};
export default cart;
