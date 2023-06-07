import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import CartPage from './pages/CartPage/CartPage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AddProductForm from './components/AddProductForm/AddProductForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/product/:id' element={<SingleProductPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/add' element={<AddProductForm/>} />
      </Routes>
    </div>
  );
}

export default App;