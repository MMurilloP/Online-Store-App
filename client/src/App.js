import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductsList/ProductsList";
import './styles/styles.css'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path='/products' element= {<ProductList />}></Route>
          </Routes>
          
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </ChakraProvider>
  );
}

export default App;
