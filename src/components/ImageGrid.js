import React from 'react';
import './ImageGrid.scss';
import {Link} from 'react-router-dom';

function ImageGridContent(props) {
  // Correct! There is no need to specify the key here:
  return (
    <div className='row'>
       <div className="col-md-6 p-5 imageGridBackground">
      <div className="d-flex align-items-center justify-content-center" style={{height: 500}}>
       <p>
         <span className="headerText gradientText">{props.title}</span>
         <br/>
         <span className="bodyTextLight mt-5">{props.text}</span><br/>
         <Link to={props.link} className="btn btn-primary mt-5 tealBackground">{props.button}</Link>
        </p>
      </div>
      </div>
      <div className="col-md-6">
        <div className="row imageGrid">
          <div style={{backgroundImage: `url("${props.image2}")`, backgroundRepeat: 'no-repeat', backgroundSize: 300, backgroundPosition: 'center'}} className="col-4 border" ></div>
          <div style={{backgroundImage: `url("${props.image4}")`, backgroundRepeat: 'no-repeat', backgroundSize: 600, backgroundPosition: 'center'}} className="col-8 border" ></div>
        </div>
        <div className="row doubleGrid">
          <div style={{backgroundImage: `url("${props.image3}")`, backgroundRepeat: 'no-repeat', backgroundSize: 370, backgroundPosition: 'center'}} className="col-4 border" ></div>
          <div className="col-8 ">
            <div className="row imageGrid">
              <div style={{backgroundImage: `url("${props.image1}")`, backgroundRepeat: 'no-repeat', backgroundSize: 400, backgroundPosition: 'center'}} className="col-6 border" ></div>
              <div style={{backgroundImage: `url("${props.image5}")`, backgroundRepeat: 'no-repeat', backgroundSize: 300, backgroundPosition: 'top'}} className="col-6 border" ></div>
            </div>
            <div className="row imageGrid">
              <div style={{backgroundImage: `url("${props.image6}")`, backgroundRepeat: 'no-repeat', backgroundSize: 300, backgroundPosition: 'center top'}} className="col-6 border" ></div>
              <div style={{backgroundImage: `url("${props.image7}")`, backgroundRepeat: 'no-repeat', backgroundSize: 300, backgroundPosition: 'center'}} className="col-6 border" ></div>
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

    <div >
      {listItems}
    </div>
  );
}

export default ImageGrid;