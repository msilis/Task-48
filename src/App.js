//imports
import './App.css';
import NavigationBar from './Components/Navigation/navbar';
import Home from './Components/Header/home';
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from './Components/Pages/about';
import Products from './Components/Pages/products';
import LegalStatement from './Components/Pages/legal';
import UserPage from './Components/Pages/userPage';
import { useState } from 'react'
import Shirts from './Components/Pages/products/shirt';
import Socks from './Components/Pages/products/socks';
import Accessories from './Components/Pages/products/acessories';
import Trousers from './Components/Pages/products/trousers';
import Interest from './Components/Pages/interest';



function App() {
  //login state and redirect hook
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function changeLoginState(set){
    console.log('changeLoginState')
    console.log(loggedIn)
    return setLoggedIn(set)
  }
  
  //Logout button functionality
  function handleLogOut(){
    alert('You have been logged out.')
    changeLoginState(false);
    
    //redirect to main landing page
    navigate('/') 
    
  }
  
  return (
    <div className='container'>
    <NavigationBar loginState={loggedIn} changeLogin={changeLoginState}/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Pages/about' element={<About />}></Route>
      <Route path='/Pages/products' element={<Products />}></Route>
      <Route path='/Pages/legal' element={<LegalStatement />}></Route>
      <Route path='/Pages/products/shirt' element={<Shirts />}></Route>
      <Route path='/Pages/products/socks' element={<Socks />}></Route>
      <Route path='/Pages/products/acessories' element={<Accessories />}></Route>
      <Route path='/Pages/products/trousers' element={<Trousers />}></Route>
      <Route path='/Pages/interest' element={<Interest />}></Route>
      {loggedIn &&
      <Route exact path='/Pages/userPage' element={<UserPage logoutButton={handleLogOut}/>}></Route>}
    </Routes>
    </div>
      );
}

export default App;
