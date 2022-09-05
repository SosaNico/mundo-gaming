import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import ItemDetailContainer from './ItemDetailCointainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
