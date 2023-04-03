import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import FrontPage from "./page/FrontPage"
import { Routes, Route } from "react-router-dom";
import { Home } from './page/Home';
import { Register } from './components/Register';

function App() {

  

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
      {/* <NavBar />
      <ProductList /> */}
    </div>
  );
}

export default App;
