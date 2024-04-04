import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Navigation from './customer/components/navigation/Navigation';
import Product from './customer/components/product/Product';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <HomePage /> 
        <Product />
        <ProductDetails />
        <Cart />
        <Checkout />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
