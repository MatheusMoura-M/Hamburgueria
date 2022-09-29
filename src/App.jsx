import { useEffect, useState } from "react";
import { Header } from "./components/Cabecalho/Header/Header/header";
import { api } from "./services/api";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // useEffect(() => {
  //   api
  //     .get("/products")
  //     .then((resp) => setProducts(resp.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
