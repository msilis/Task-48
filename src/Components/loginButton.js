import Button from 'react-bootstrap/Button';


const loginButton = 'Sign In'
const loggedIn = 'My Account'

function LoginButton(props){
    
    const loginClick = props.loginClick
    console.log('My Account clicked');
    console.log(`${props.checkLogin} from loginButton`)

    return(
        
        <Button onClick={loginClick}>{props.checkLogin ? loggedIn : loginButton  }</Button>
    )
}

export default LoginButton;