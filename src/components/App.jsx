import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import ItemDetailContainer from './ItemDetailCointainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Cart} from './Cart/Cart'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={
        <div className='row justify-content-center m-0'>
          <ItemListContainer/>
        </div>
        }/>
        <Route path='/categoria/:categoria' element={
        <div className='row justify-content-center m-0'>
          <ItemListContainer/>
        </div>
        }/>
        <Route path='/detalles/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
    </CartProvider>
    </BrowserRouter>
  );
};

export default App;
