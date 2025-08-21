
import './App.css';
import About from './components/About/About';
import BookConsult from './components/BookConsult/BookConsult';
import Company from './components/Comany/Company';
import Footer from './components/Footer/Footer';
import Hero from './components/hero/Hero';
import Map from './components/Map/Map';
import NavBar from './components/NavBar/NavBar';
import Service from './components/Service/Service';
import {Routes , Route , BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/Home';
import Address from './Pages/Address';

function App() {
  return (
  
    <div className="App">  
 
    <NavBar />


     <Home />

    <Footer />
             
       </div>
 
  );
}

export default App;
