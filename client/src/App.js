import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductsList/ProductsList";
import "./styles/styles.css";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/products" element={<ProductList />}></Route>
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
