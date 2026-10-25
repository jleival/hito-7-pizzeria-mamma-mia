import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; //1. Importamos CartProvider
import { PizzaProvider } from './context/PizzaContext'; // 1. Importamos PizzaProvider

function App() {
  return (
    <PizzaProvider>
      <CartProvider>
        <div className='min-vh-100 d-flex flex-column'>
          <Navbar />
          <div className='flex-grow-1'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizza/p001" element={<Pizza />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </PizzaProvider>
  );
}

export default App