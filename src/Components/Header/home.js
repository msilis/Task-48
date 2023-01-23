import './home.css'
import splashimage from "../../Media/burgess-milner-unsplash.jpg"

function Home(){
    return(
        <div>
            <img src={splashimage} alt='Clothing image'/>
            <h1>Welcome</h1>
        </div>
    )
}

export default Home;