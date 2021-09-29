import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import pizzaReducer from "./pizzaReducer";
export const rootReducer = combineReducers({ cartReducer, pizzaReducer });
