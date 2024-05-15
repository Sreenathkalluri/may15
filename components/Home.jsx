import React from 'react';
import logo from './logo.png';
import './Home.css'; // Import custom CSS file for additional styling

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="home-content">
            <h1 className="display-4 text-primary mb-4">Welcome to GrowGuide!</h1>
            <p className="text-white">At GrowGuide, our mission is to make plant care easy and accessible for everyone. We understand that many people want to enjoy the benefits of gardening and growing plants at home, but they may not have the knowledge or resources to do so successfully.</p>
          </div>
        </div>
        <div className="col-md-6">
          <img src={logo} alt="Illustration" className="img-fluid" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="home-content">
            <p className="text-white">That's why we're here to help. Our idea is simple: to provide guidance, tips, and resources to help people of all skill levels grow plants at home effortlessly. Whether you're a seasoned gardener or a complete beginner, we've got you covered.</p>
            <p className="text-white">With our easy-to-follow guides, informative articles, and helpful tools, you'll learn everything you need to know to nurture your plants and create a thriving indoor or outdoor garden. From selecting the right plants for your space to providing the proper care and maintenance, we're here to support you every step of the way.</p>
            <p className="text-white">So whether you're looking to add a touch of greenery to your home or cultivate a bountiful garden, let GrowGuide be your go-to resource for all things plant-related. Happy gardening!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
