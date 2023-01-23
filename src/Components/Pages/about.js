import hangerImage from '../../Media/andrej-lisakov-unsplash.jpg';
import './about.css';


function About(){
    return(
        <div className='about-section'>
            <div className='about-image'>
                <img src={hangerImage} className='hanger-image' alt='hanger picture'/>
            </div>
            <div className='about-text'>
                <h3>About Us</h3>
                <p>Our clothing brand is dedicated to providing high-quality, stylish garments for fashion-conscious individuals. We believe in creating clothing that not only looks great, but also feels comfortable to wear. We use only the finest materials and craftsmanship to ensure that our customers are completely satisfied with their purchases. From casual wear to formal attire, we have something for everyone in our collection. We are committed to offering excellent customer service and are always on the lookout for new, exciting trends to incorporate into our designs. Thank you for choosing our brand.</p>
            </div>
        </div>
    )

}

export default About;