import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className='w-50 mx-auto'>
       <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<LogIn></LogIn>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/products' element={
                <RequiredAuth>
                     <Products></Products>
                </RequiredAuth>
            }></Route>
            <Route path='/orders' element={
              <RequiredAuth>
                  <Orders></Orders>
              </RequiredAuth>
            }></Route>
        </Routes>
    </div>
  );
}

export default App;
