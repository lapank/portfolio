import './CardData.js';
import './TwoColBox.scss';
import '../index.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function CardContent(props) {
  const [image, setImage] = useState(props.image);
  return (
  	<div className='row cardBackground mt-5'>
  		<div className="col-md-6">
        <img className="img-fluid" src={image} alt={props.altText} />
	    </div>
	    <div className="col-md-6">
	    	<div className="p-3">
				<p className="videoEyebrow">{props.eyebrow}</p>
        <h3 className="videoTitle">{props.h3}</h3>
        <p className="bodyTextLight pb-3">{props.text}</p>
        <Link onClick={() => {setImage(props.image + "?t=" + Math.floor(Math.random() * 14182940000))}} className="link" to={props.replayID}>Replay Animation</Link>

        <Link to={props.replayID} className="link" onClick={() => {setImage(props.image + "?t=" + Math.floor(Math.random() * 14182940000))}}>Replay Animation</Link>
			</div>
		</div>
	</div>	
  );
}

function CardList(props) {
  const item = props.item;
  const listItems = item.map((item) =>
    // Correct! Key should be specified inside the array.
    <CardContent key={item.eyebrow}
      image = {item.image}
      altText = {item.altText}
      link = {item.link}
      eyebrow = {item.eyebrow}
      h3 = {item.h3}
      text = {item.text}
      replayID = {item.replayID} />
  );
  return (
    <div className="w-100 backgroundDark p-5">

    <div className="container">
    <h1 className="blueGradientText headerText fiveCardClusterTitle">Digital Media</h1>
      {listItems}
    </div>
    </div>
  );
}



export default CardList;