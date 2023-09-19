import {Row,Col} from 'react-bootstrap';
import './styles.css'; // Import CSS file for styling

const blogs = ()=>{
    return(
        <>
            <Row className='blogs-display' lg={4}>
                <Col className='card-block'>
                    <h1> Title</h1>
                    <p> Body</p>
                </Col>
                <Col className='card-block'>
                    <h1> Title</h1>
                    <p> Body</p>
                </Col>
                <Col className='card-block'>
                    <h1> Title</h1>
                    <p> Body</p>
                </Col>
                <Col className='card-block'>
                    <h1> Title</h1>
                    <p> Body</p>
                </Col>
            </Row>
            <Row className='blogs-display' lg={4}>
                <Col className='card-block'>
                    <h1> Title</h1>
                    <p> Body</p>
                </Col>
                <Col className='card-block'>
                    <h1> Title</h1>
                    <p> Body</p>
                </Col>
                <Col className='card-block'>
                    <h1> Title</h1>
                    <p> Body</p>
                </Col>
                <Col className='card-block'>
                    <h1> Title</h1>
                    <p> Body</p>
                </Col>
            </Row>
        </>
        

    )
}
export default blogs;