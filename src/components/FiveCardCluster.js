import './FiveCardClusterData.js';
import {Link} from 'react-router-dom';
import {leftDoubleCardContent} from './FiveCardClusterData.js';
import {leftFullWidthCardContent} from './FiveCardClusterData.js';
import {rightCardClusterContent} from './FiveCardClusterData.js';


function Card(props){

	return(
		
	      <div className="p-3">
	        <img src={props.image} className="card-img-top" alt={props.altText}/>
	        <div className="card-body">
	          <h5 className="card-title">{props.title}</h5>
	          <p className="card-text">{props.text}</p>
	          <Link to="{props.text}" className="btn btn-primary">Go somewhere</Link>
	        </div>
	        
	    </div>
	)
}

function DoubleCard(props){

	return(
	      <div className="col-6">
	        <img src={props.image} className="card-img-top" alt={props.altText}/>
	        <div className="card-body">
	          <h5 className="card-title">{props.title}</h5>
	          <p className="card-text">{props.text}</p>
	          <Link to="{props.text}" className="btn btn-primary">Go somewhere</Link>
	        </div>
	    </div>
	)
}


function LeftDoubleContent(props){
	const item = props.item;
	 const listItems = item.map((item) =>
	    // Correct! Key should be specified inside the array.
	    <DoubleCard key={item.title}
	      image = {item.image}
	      altText = {item.altText}
	      link = {item.link}
	      title = {item.title}
	      text = {item.text} />
	      );
		return(
			<div className="row">
			{listItems}
			</div>
	)
}

function LeftFullWidthContent(props){
	  const item = props.item;
	  const listItems = item.map((item) =>
	    // Correct! Key should be specified inside the array.
	    <Card key={item.title}
	      image = {item.image}
	      altText = {item.altText}
	      link = {item.link}
	      title = {item.title}
	      text = {item.text} />
	      );
		return(
		<div className="col-12">
			{listItems}
		</div>
	)
}

function RightClusterContent(props){
	const item = props.item;
	  const listItems = item.map((item) =>
	    // Correct! Key should be specified inside the array.
	    <Card key={item.title}
	      image = {item.image}
	      altText = {item.altText}
	      link = {item.link}
	      title = {item.title}
	      text = {item.text} />
	      );
	return(
		<div className="col-12 mt-3 mb-3">
			{listItems}
		</div>
	)
}

function FiveCardCluster(){
  return (
    <div className="container pt-5 pb-5">
	    <h2>Project Manager & Product Owner</h2>
	    <div className='row pt-2'>
	    	<div className="col-md-8">
		    	
		      		<LeftDoubleContent item={leftDoubleCardContent}/>

		      	<div className="row">
		      		<LeftFullWidthContent item={leftFullWidthCardContent}/>
		      	</div>
	      	</div>
	      	<div className="col-md-4 bg-light">
	      		<RightClusterContent item={rightCardClusterContent}/>
	      	</div>
	    </div>
    </div>
  );
}


export default FiveCardCluster;

