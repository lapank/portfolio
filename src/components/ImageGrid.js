import React from 'react';
import './ImageGrid.scss';
import {Link} from 'react-router-dom';

function ImageGridContent(props) {
  // Correct! There is no need to specify the key here:
  return (
    <div className='row'>
      <div className="col-md-4">
       <h2>{props.title}</h2>
       <p>{props.text}</p>
       <Link to={props.link} className="btn btn-primary">{props.button}</Link>
      </div>
      <div className="col-md-8">
        <div className="row imageGrid">
          <div style={{backgroundImage: `url("${props.image1}")`}} className="col-4 border" ></div>
          <div style={{backgroundImage: `url("${props.image2}")`}} className="col-8 border" ></div>
        </div>
        <div className="row doubleGrid">
          <div style={{backgroundImage: `url("${props.image3}")`}} className="col-4 border" ></div>
          <div className="col-8 ">
            <div className="row imageGrid">
              <div style={{backgroundImage: `url("${props.image4}")`}} className="col-6 border" ></div>
              <div style={{backgroundImage: `url("${props.image5}")`}} className="col-6 border" ></div>
            </div>
            <div className="row imageGrid">
              <div style={{backgroundImage: `url("${props.image6}")`}} className="col-6 border" ></div>
              <div style={{backgroundImage: `url("${props.image7}")`}} className="col-6 border" ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageGrid(props) {
  const item = props.item;
  const listItems = item.map((item) =>
    // Correct! Key should be specified inside the array.
    <ImageGridContent key={item.title}
      link = {item.link}
      button = {item.button}
      title = {item.title}
      text = {item.text}
      image1 = {item.image1}
      altText1 = {item.altText1}
      image2 = {item.image2}
      altText2 = {item.altText2}
      image3 = {item.image3}
      altText3 = {item.altText3}
      image4 = {item.image4}
      altText4 = {item.altText4}
      image5 = {item.image5}
      altText5 = {item.altText5}
      image6 = {item.image6}
      altText6 = {item.altText6}
      image7 = {item.image7}
      altText7 = {item.altText7} />
  );
  return (
    <div className="dark-bg text-light">
    <div className="container pt-5 pb-5">
      {listItems}
    </div>
    </div>
  );
}

export default ImageGrid;