import './FiveCardClusterData.js';
import {Link} from 'react-router-dom';
import {leftDoubleCardContent} from './FiveCardClusterData.js';
import {leftFullWidthCardContent} from './FiveCardClusterData.js';
import {rightCardClusterContent} from './FiveCardClusterData.js';


function Card(props){

	return(
		
	      <div className="p-3">
	        <div className="border backgroundDark roundedEdges">
      <div style={{backgroundImage: `url("${props.image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 370, height:150, backgroundPosition: 'center'}} className="card-img-top roundedEdgesTop"></div>
        <div className="card-body">
          <h5 className="card-title smallTitleLight">{props.title}</h5>
          <p className="card-text bodyTextLight">{props.text}</p>
          <Link to={props.link} className="btn btn-primary tealBackground">{props.button}</Link>
          </div>
        </div>
	        
	    </div>
	)
}

function DoubleCard(props){

	return(
	      <div className="col-6">
	        <div className="border backgroundDark roundedEdges">
      <div style={{backgroundImage: `url("${props.image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 400, height:150, backgroundPosition: 'center'}} className="card-img-top roundedEdgesTop"></div>
        <div className="card-body">
          <h5 className="card-title smallTitleLight">{props.title}</h5>
          <p className="card-text bodyTextLight">{props.text}</p>
          <Link to={props.link} className="btn btn-primary tealBackground">{props.button}</Link>
          </div>
        </div>
	    </div>
	)
}


function LeftDoubleContent(props){
	const item = props.item;
	 const listItems = item.map((item) =>
	    // Correct! Key should be specified inside the array.
	    <DoubleCard key={item.title}
	    	eyebrow = {item.eyebrow}
	      image = {item.image}
	      altText = {item.altText}
	      link = {item.link}
	      button = {item.button}
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
	    	eyebrow = {item.eyebrow}
	      image = {item.image}
	      altText = {item.altText}
	      link = {item.link}
	      button = {item.button}
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
	    	eyebrow = {item.eyebrow}
	      image = {item.image}
	      altText = {item.altText}
	      link = {item.link}
	      button = {item.button}
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
    <div className="w-100 p-5 backgroundDark">
	    <h2 className="headerText gradientText">Project Manager & Product Owner</h2>
	    <div className='row pt-2'>
	    	<div className="col-md-8">
		    	
		      		<LeftDoubleContent item={leftDoubleCardContent}/>

		      	<div className="row">
		      		<LeftFullWidthContent item={leftFullWidthCardContent}/>
		      	</div>
	      	</div>
	      	<div className="col-md-4 gradientBackground">
	      		<RightClusterContent item={rightCardClusterContent}/>
	      	</div>
	    </div>
    </div>
  );
}


export default FiveCardCluster;

