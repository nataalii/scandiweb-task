import { Route, Routes } from 'react-router-dom';
import './index.css';
import ProductList from './pages/ProductList/ProductList';
import ProductAdd from './pages/ProductAdd/ProductAdd';
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<ProductList />} />
      <Route path='/add' element={<ProductAdd />} />
    </Routes>
  );
}

export default App;
