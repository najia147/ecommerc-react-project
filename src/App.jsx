import { Routes, Route} from 'react-router';
import { HomePage } from './pages/HomePage';
import { Checkout } from './pages/CheckoutPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='checkout' element={<Checkout/>} />
      </Routes>
    </>
  )
}

export default App
