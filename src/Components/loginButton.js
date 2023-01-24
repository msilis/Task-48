//imports
import Button from 'react-bootstrap/Button';

//Login button text
const loginButton = 'Sign In'
const loggedIn = 'My Account'

function LoginButton(props){
    
    //get state of login to decide text of login button
    const loginClick = props.loginClick

    return(
        
        <Button onClick={loginClick}>{props.checkLogin ? loggedIn : loginButton  }</Button>
    )
}

export default LoginButton;