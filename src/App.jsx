import { useEffect, useState } from "react";
import { Cart } from "./components/Aside/Cart/cart";
import { Header } from "./components/Cabecalho/Header/header";
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
  const [inputSearch, setInputSearch] = useState("");
  const [openDiv, setOpenDiv] = useState(false);
  const [animation, setAnimation] = useState(true)
  const [margin, setMargin] = useState(true)

  useEffect(() => {
    api
      .get("/products")
      .then((resp) => {
        const newProducts = resp.data.map((elem) => {
          const newObject = { ...elem, count: 1 };
          return newObject;
        });
        setProducts(newProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .get("/products")
      .then((resp) => {
        const newProducts = resp.data.map((elem) => {
          const newObject = { ...elem, count: 1 };
          return newObject;
        });
        setFilteredProducts(newProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (productId) => {
    const newCurrent = products.find(
      (product) => product.id === productId && product
    );

    const validation = currentSale.some((elem) => elem.id === newCurrent.id);

    if (validation) {
      let elem = currentSale.findIndex((elem) => elem.id === newCurrent.id);
      let newElem = [...currentSale];
      newElem[elem].count = newElem[elem].count + 1;

      setCurrentSale(newElem);
    } else {
      toast.success(`${newCurrent.name} adicionado(a) ao carrinho`);
      setCurrentSale([...currentSale, newCurrent]);
    }

    setAnimation(false)
  };

  const removeProducts = (productt) => {
    let elem = currentSale.findIndex((elem) => elem.id === productt.id);
    let newElem = [...currentSale];

    if (newElem[elem].count > 1) {
      newElem[elem].count = newElem[elem].count - 1;
    } else {
      const filtered = currentSale.filter(
        (product) => product.id !== productt.id && product
      );
      newElem = filtered;

      toast.dark(`${productt.name} removido(a) do carrinho`, {
        position: "bottom-right",
      });
      setCurrentSale(newElem);
    }
    setCurrentSale(newElem);
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={1400}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header
        setOpenDiv={setOpenDiv}
        filteredProducts={filteredProducts}
        setProducts={setProducts}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        setAnimation={setAnimation}
        setMargin={setMargin}
      />
      <Container tag="main" size="large">
        <ProductsList
          openDiv={openDiv}
          setOpenDiv={setOpenDiv}
          filteredProducts={filteredProducts}
          setProducts={setProducts}
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
          products={products}
          handleClick={handleClick}
          animation={animation}
          margin={margin}
          setMargin={setMargin}
          />
        <Aside>
          <DivTitleAside>
            <ThemeTitle size="default">Carrinho de compras</ThemeTitle>
          </DivTitleAside>
          <Cart currentSale={currentSale} removeProducts={removeProducts} />
        </Aside>
      </Container>
    </div>
  );
};
