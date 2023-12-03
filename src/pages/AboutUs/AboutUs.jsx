import React from 'react';

const AboutUs = () => {
    return (
        <div>
    <h2 className='text-center text-3xl mt-5 mb-8'>Our Interior Design</h2>
<div className="carousel w-full">
    
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/jLKj207/photo-1517248135467-4c7edcad34c4-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/LSBqyBR/photo-1557955776-857434f1c951-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces-edg.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/K9SS8xK/photo-1533630654593-b222d5d44449-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  {/* <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> */}
</div>

   
            
        </div>
    );
};

export default AboutUs;