import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router';
import { HomePage } from './pages/home/HomePage';
import { Checkout } from './pages/CheckoutPage/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';

function App() {
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    const cartData = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    }

    cartData();
  }, [])

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart}/>} />
        <Route path='checkout' element={<Checkout cart={cart}/>} />
        <Route path='orders' element={<OrdersPage cart={cart}/>} />
        <Route path='tracking' element={<TrackingPage/>} />
      </Routes>
    </>
  )
}

export default App
