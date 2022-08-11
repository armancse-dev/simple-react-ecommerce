import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/inventory';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/review' element={<OrderReview/>}></Route>
          <Route path='/inventory' element={<Inventory/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>


        </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
