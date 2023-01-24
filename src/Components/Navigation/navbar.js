//imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import nncLogo from '../../Media/favicon_io/NNCLogo.png';
import './navbar.css';
import { Link } from 'react-router-dom'
import LoginButton from '../loginButton';
import { NavDropdown } from 'react-bootstrap';


function NavigationBar(props){

    //Login button functionality
    function changeLoginHandler(){
        let name = prompt('Enter your name');
        alert(`Hello ${name}!`)
        props.changeLogin(true);
      }

    //Check login state to render button accurately
    let button;
    if (props.loginState){
        button = <Link to="../Pages/userPage"><LoginButton checkLogin={props.loginState} /></Link>
    } else {
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
                <NavDropdown title="Products" className='dropdown'>
                <NavDropdown.Item href="/Pages/products/shirt" className='text-decoration-none nav-list-item'>Shirts</NavDropdown.Item>
                <NavDropdown.Item href="/Pages/products/trousers" className='text-decoration-none nav-list-item'>Trousers</NavDropdown.Item>
                <NavDropdown.Item href="/Pages/products/socks" className='text-decoration-none nav-list-item'>Socks</NavDropdown.Item>
                <NavDropdown.Item href="/Pages/products/acessories" className='text-decoration-none nav-list-item'>Acessories</NavDropdown.Item>
                <NavDropdown.Item href="/Pages/products" className='text-decoration-none nav-list-item'>All Products </NavDropdown.Item>
                </NavDropdown>
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

