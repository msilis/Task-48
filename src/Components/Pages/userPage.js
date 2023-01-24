//imports
import './userPage.css'
import { Button } from 'react-bootstrap';

function UserPage(props){

    return(
        <div id="user-container">
        <h3>User Account</h3>
        <p>Here you can find information on your account.</p>
        <Button id="logout-button" onClick={props.logoutButton}>Logout</Button>
        </div>
    )
}

export default UserPage;