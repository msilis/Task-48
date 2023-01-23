import Card from 'react-bootstrap/Card';
import beltPic from '../../Media/belt.jpg';
import shirtPic from '../../Media/nimble-made-shirt-unsplash.jpg';
import trouserPic from '../../Media/eduardo-pastor-unsplash.jpg';
import sockPic from '../../Media/gabriel-gonzalez-unsplash.jpg'
import './products.css';

const productList = [{
    'pic': shirtPic,
    'title': 'Shirts',
    'text': 'Quality shirts in all sizes.',
    }, {
     'pic': trouserPic,
     'title': 'Trousers',
     'text': 'Our trousers collection offers a wide range of styles and fits for both men and women, from classic to trendy designs, perfect for any occasion.'
    }, {
     'pic': beltPic,
     'title': 'Accessories',
     'text': 'Shoes, belts, cufflinks, and other acessories.'
    }, {
     'pic': sockPic,
     'title': 'Socks',
     'text': 'A special section just for socks.'
    }
]




function Products(){
    return(
        <div className='product-card-container'>
            {
                productList.map((product, i) => {
                    return(
                    <Card key={i}>
                    <Card.Img variant='top' src={Object.values(product['pic']).join('')} className='card-pic' />
                    <Card.Body>
                        <Card.Title>{Object.values(product['title']).join('')}</Card.Title>
                        <Card.Text style={{maxWidth:350}}>{Object.values(product['text']).join('')}</Card.Text>
                    </Card.Body>
                    </Card>
                    )
                })
            }

        </div>
    )

}

export default Products;