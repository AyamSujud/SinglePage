import React from 'react';
import Navbar from '../components/Navbar';
import ImageContainer from '../components/ImageContainer';
import UpdatesList from '../components/UpdatesList';
import Footer from '../components/Footer';


function Home() {
    return (
      <div className="App  bg-white">
        <Navbar />
        <ImageContainer /> 
        <UpdatesList />
        <Footer />
      </div>
    );
  }
  
  export default Home;