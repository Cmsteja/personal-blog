import React from 'react';
import './style.css'; // Import CSS file for styling
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import {Row,Col} from 'react-bootstrap';

const HomePage = () => {
  const [text] = useTypewriter({
    words:['Developer','Tech Critic', 'Blogger','PhotoGeek'],
    loop:{}
  });
  return (
    <div className="home-page">
      <Row>
        <Col className='card-block-home' lg={6}>
            <div className="content" >
            <h1> Hi I'm  {' '}
                <span style={{fontWeight:'bold',color:'green'}}>
                  {text}
                  </span>
                  <span>
                  <Cursor/>
                  </span>
            </h1>
            <div> Hi all my name is Surya, welcome to my tech-centric realm,<br/> where I share my research, interests, and insights through captivating blogs.<br/> Join me on this exhilarating journey of knowledge and passion."</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
