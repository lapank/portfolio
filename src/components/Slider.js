import './Slider.scss';
import React, { useState } from 'react';


function SliderContent(props){
  const [thumbnail, setThumbnail] = useState('thumbnail1');
  console.log(thumbnail);
  return (
    <div>
      <div className="row">
        <div className="col-md-4 bg-light">
          
        </div>
        <div className="col-md-8">
          <div className="row">
              <img src="https://picsum.photos/1325/1200" alt="test"/>
          </div>
          <div class="container">
          <div className="row">
            <div onClick={() => setThumbnail('thumbnail1')} style={{backgroundImage: `url("${props.image1}")`}} id="thumbnail1" className="col-2 border thumbnailBox"></div>
              <div onClick={() => setThumbnail('thumbnail2')} style={{backgroundImage: `url("${props.image2}")`}} id="thumbnail2" className="col-2 border thumbnailBox"></div>
              <div onClick={() => setThumbnail('thumbnail3')} style={{backgroundImage: `url("${props.image3}")`}} id="thumbnail3" className="col-2 border thumbnailBox"></div>
              <div onClick={() => setThumbnail('thumbnail4')} style={{backgroundImage: `url("${props.image4}")`}} id="thumbnail4" className="col-2 border thumbnailBox"></div>
              <div onClick={() => setThumbnail('thumbnail5')} style={{backgroundImage: `url("${props.image5}")`}} id="thumbnail5" className="col-2 border thumbnailBox"></div>
              <div onClick={() => setThumbnail('thumbnail6')} style={{backgroundImage: `url("${props.image6}")`}} id="thumbnail6" className="col-2 border thumbnailBox"></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider(props){
    const item = props.item;
  const listItems = item.map((item) =>
    // Correct! Key should be specified inside the array.
    <SliderContent key={item.title}
      title = {item.title}
      text = {item.text}
      image1 = {item.image1}
      image2 = {item.image2} 
      image3 = {item.image3} 
      image4 = {item.image4} 
      image5 = {item.image5} 
      image6 = {item.image6}  />
  );
  return (
    <div className="container pt-2">
      {listItems}
    </div>
  );
}


export default Slider;