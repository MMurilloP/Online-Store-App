import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './styles/styles.css'

function App() {
  return (
    <ChakraProvider>
      <Router>
      <Header/>
      <Main />
      <Footer/>
      </Router>
    </ChakraProvider>
  );
}

export default App;
