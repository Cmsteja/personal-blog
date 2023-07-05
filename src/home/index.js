import React from 'react';
import './style.css'; // Import CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      {/* <img src="https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg" alt="Background" className="background-image" /> */}
      <div className="content">
        <div className='content' style={{fontSize:"50px"}}> Hi I'm Surya Chakkapalli</div>
        <div className='content'> Welcome to my tech-centric realm, where I share my research, interests, and insights through captivating blogs.<br/> Join me on this exhilarating journey of knowledge and passion."</div>
      </div>
    </div>
  );
};

export default HomePage;
