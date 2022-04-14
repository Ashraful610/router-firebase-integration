import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';

function App() {
  return (
    <div className='w-50 mx-auto'>
       <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<LogIn></LogIn>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
    </div>
  );
}

export default App;
