import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import NavBar from './components/Header/Navbar/Navbar'

function App() {
  return (
    <ChakraProvider>
      <Router>
      <NavBar/>
      <Main />
      <Footer/>
      </Router>
    </ChakraProvider>
  );
}

export default App;
