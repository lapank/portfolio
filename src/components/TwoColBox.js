//import React from 'react'
import './TwoColBox.scss';
//import {TwoColBoxData} from './TwoColBoxData';
import {Link} from 'react-router-dom';


function TwoColBoxContent(props) {
  // Correct! There is no need to specify the key here:
  return (
  	<div className='row gy-5'>
  		<div className="col-6">
  			<div className="p-3">
	    		<img src={props.image} alt={props.altText} />
	    	</div>
	    </div>
	    <div className="col card">
	    	<div className="p-3 card-body">
				<h4 className="card-subtitle">{props.eyebrow}</h4>
				<h3 className="card-title">{props.h3}</h3>
				<p className="card-text">{props.text}</p>
			</div>
		</div>
	</div>	
  );
}

function TwoColBox(props) {
  const item = props.item;
  const listItems = item.map((item) =>
    // Correct! Key should be specified inside the array.
    <TwoColBoxContent key={item.eyebrow}
      image = {item.image}
      altText = {item.altText}
      link = {item.link}
      eyebrow = {item.eyebrow}
      h3 = {item.h3}
      text = {item.text} />
	);
  return (
    <div className="container pt-5">
      {listItems}
    </div>
  );
}

export default TwoColBox