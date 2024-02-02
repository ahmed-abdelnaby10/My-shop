import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom"
import Products from './components/Products';
import ProductPage from './components/ProductPage';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';

function App() {
  
  return (
    <>
      <NavBar />
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/products/:productID' element={<ProductPage />}/>
          <Route path='/products/cart' element={<Cart />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/cart/checkout' element={<CheckOut />}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
