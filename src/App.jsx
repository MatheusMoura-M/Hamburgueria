import { useEffect, useState } from "react";
import { Cart } from "./components/Aside/Cart/cart";
import { Header } from "./components/Cabecalho/Header/Header/header";
import { ProductsList } from "./components/Cards/ProductsList/productsList";
import { api } from "./services/api";
import { Aside, Container, DivTitleAside } from "./styles/global";
import { ThemeTitle } from "./styles/typography";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    api
      .get("/products")
      .then((resp) => setProducts(resp.data))
      .catch((err) => console.log(err));
  }, []);

  const showProducts = () => {};

  const handleClick = (productId) => {
    const newCurrent = products.find(
      (product) => product.id === productId && product
    );
    
    const validation = currentSale.some(elem => elem === newCurrent)
    
    validation
      ? toast.error(`Já possui um ${newCurrent.name} no carrinho`)
      : setCurrentSale([...currentSale, newCurrent]);
    }
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClickrtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <Container tag="main" size="large">
        <ProductsList products={products} handleClick={handleClick} />
        <Aside>
          <DivTitleAside>
            <ThemeTitle size="default">Carrinho de compras</ThemeTitle>
          </DivTitleAside>
          <Cart currentSale={currentSale} />
        </Aside>
      </Container>
    </div>
  );
}
