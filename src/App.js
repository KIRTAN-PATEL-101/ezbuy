import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Navigation from './customer/components/navigation/Navigation';
import Order from './customer/components/order/Order';
import OrderDetails from './customer/components/order/OrderDetails';
import Product from './customer/components/product/Product';
import HomePage from './customer/pages/HomePage/HomePage';
import Routes from './Routers/CustomerRouter';
import CustomerRouter from './Routers/CustomerRouter';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomerRouter />}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
