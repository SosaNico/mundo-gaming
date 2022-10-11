import Navbar from './Navbar/Navbar.jsx';
import ItemDetailContainer from './ItemDetailCointainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Cart} from './Cart/Cart'
import { CartProvider } from './Context/CartContext'
import Checkout from './Checkout/Checkout';
import {Footer} from './Footer/Footer'

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
        <div>
        <h1 className='d-flex justify-content-center m-3'>Productos</h1>
      </div>
          <div className='row justify-content-center m-0'>
          <ItemListContainer/>
        </div>
          </>
        }/>
        <Route path='/categoria/:categoria' element={
          <>
          <h1 className='d-flex justify-content-center m-3'>Productos</h1>
          <div className='row justify-content-center m-0'>
          <ItemListContainer/>
        </div>
          </>
        
        }/>
        <Route path='/detalles/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </div>
    </CartProvider>
    </BrowserRouter>
  );
};

export default App;
