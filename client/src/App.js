import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavUser from './Components/NavUser';
import Home from './Components/Home';
import Profil from './Components/Profil';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivateRoute from './Components/PrivateRoute';
import HandleError from './Components/HandleError';

function App() {
  return (
    <div>
      <NavUser/>
      <HandleError/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
