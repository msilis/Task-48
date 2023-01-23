import './App.css';
import NavigationBar from './Components/Navigation/navbar';
import Home from './Components/Header/home';
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from './Components/Pages/about';
import Products from './Components/Pages/products';
import LegalStatement from './Components/Pages/legal';
import UserPage from './Components/Pages/userPage';
import { useState } from 'react'



function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function changeLoginState(set){
    console.log('changeLoginState')
    console.log(loggedIn)
    return setLoggedIn(set)
  }
  console.log(loggedIn)

  function handleLogOut(){
    console.log('logout button clicked')
    alert('You have been logged out.')
    changeLoginState(false);
    console.log(loggedIn)
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
      {loggedIn &&
      <Route exact path='/Pages/userPage' element={<UserPage logoutButton={handleLogOut}/>}></Route>}
    </Routes>
    </div>
      );
}

export default App;
