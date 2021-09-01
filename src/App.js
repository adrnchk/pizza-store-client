import React from "react";
import axios from "axios";
import "./App.css";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";

function App() {
  const [products, setproducts] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setproducts(data.pizzas);
    });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            exact
            path="/"
            render={() => <Home products={products} />}
          ></Route>
          <Route exact path="/Cart" component={Cart}></Route>
        </div>
      </div>
    </div>
  );
}

export default App;
