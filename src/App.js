import React from "react";
import axios from "axios";
import "./App.css";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import SlideCart from "./components/SlideCart";
import { useDispatch, useSelector } from "react-redux";
import {
  addPizza,
  decPizza,
  deletePizza,
  incPizza,
  setPizzas,
} from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home />}></Route>
          <Route exact path="/Cart" component={Cart}></Route>
        </div>
      </div>
      <SlideCart></SlideCart>
    </div>
  );
}

export default App;
