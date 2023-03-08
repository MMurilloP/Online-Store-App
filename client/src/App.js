import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductsList/ProductsList";
import LandingPage from "./components/LandingPage/LandingPage"
import CartShopping from "./components/CartShopping/CartShopping"

import "./styles/styles.css";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/products" element={<ProductList />}></Route>
              <Route path="/cart" element={<CartShopping />}></Route>
            </Routes>
          </main>
        </Router>
        <Footer />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
