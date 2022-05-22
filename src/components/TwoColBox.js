//import React from 'react'
import './TwoColBox.scss';
//import {TwoColBoxData} from './TwoColBoxData';
import {Link} from 'react-router-dom';


function TwoColBoxContent(props) {
  // Correct! There is no need to specify the key here:
  return (
  	<div className='row gy-5'>
  		<div className="col-6">
  			<div className="p-3 border bg-light">
	    		<img className="img-fluid" src={props.image} alt={props.altText} />
	    	</div>
	    </div>
	    <div className="col">
	    	<div className="p-3 border bg-light">
				<Link to={props.link}>
					<h4>{props.eyebrow}</h4>
					<h3>{props.h3}</h3>
					<p>{props.text}</p>
				</Link>
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
    <div className="container px-9">
      {listItems}
    </div>
  );
}

export default TwoColBox