import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import nncLogo from '../../Media/favicon_io/NNCLogo.png';
import './navbar.css';
import { Link } from 'react-router-dom'
import LoginButton from '../loginButton';
//import { useState } from 'react';


function NavigationBar(props){
    //Login button state
    //const [loggedIn, setLoggedIn] = useState(false);

    function changeLoginHandler(){
        let name = prompt('Enter your name');
        alert(`Hello ${name}!`)
        props.changeLogin(true);
      }

    //Check login state to render button accurately
    let button;
    if (props.loginState){
        console.log(props.loginState)
        button = <Link to="../Pages/userPage"><LoginButton checkLogin={props.loginState} /></Link>
    } else {
        console.log(props.loginState)
        button = <LoginButton checkLogin={props.loginState} loginClick={changeLoginHandler}/>
    }

    return(
        <Navbar bg='light' sticky='top' className='navbar-main'>
            <Navbar.Brand>  
                <Link to="/" className='text-decoration-none' >
                <img src={nncLogo} className="logo"/>
                {'  '}
                No-Name Clothing</Link></Navbar.Brand>
                <Navbar.Collapse className='justify-content-end'>
            <Nav className="nav_list" >
                <Link to="../Pages/products" className='text-decoration-none nav-list-item'>Products </Link>
                <Link to="../Pages/about" className='text-decoration-none nav-list-item'>About</Link>
                <Link to="../Pages/interest" className="text-decoration-none nav-list-item">Interest Calc</Link>
                <Link to="../Pages/legal" className='text-decoration-none nav-list-item'>Legal</Link>
            </Nav>
            {button}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;

