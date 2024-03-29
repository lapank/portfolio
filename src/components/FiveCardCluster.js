import './FiveCardCluster.scss';
import './FiveCardClusterData.js';
import {Link} from 'react-router-dom';
import {leftDoubleCardContent} from './FiveCardClusterData.js';
import {leftFullWidthCardContent} from './FiveCardClusterData.js';
import {rightCardClusterContent} from './FiveCardClusterData.js';


function Card(props){

	return(
		
	      <div className="p-3">
		<Link to={props.link}><div className="fiveCardCluster">
      <div style={{backgroundImage: `url("${props.image}")`, backgroundRepeat: 'no-repeat'}} className="card-img-top roundedEdgesTop fiveCardImage"></div>
        <div className="card-body">
        <p className="videoEyebrow">{props.eyebrow}</p>
          <h5 className="card-title ">{props.title}</h5>
          <p className="card-text bodyTextLight">{props.text}</p>
          <div className="cardButton btn btn-primary ">{props.button}</div>
          </div>
        </div></Link>
	    </div>
	)
}


function CardFull(props){

	return(
		
	      <div className="pt-3">
	        <Link to={props.link}><div className="fiveCardCluster">
      <div style={{backgroundImage: `url("${props.image}")`, backgroundRepeat: 'no-repeat'}} className="card-img-top roundedEdgesTop fiveCardImageFull"></div>
        <div className="card-body">
        <p className="videoEyebrow">{props.eyebrow}</p>
          <h5 className="card-title ">{props.title}</h5>
          <p className="card-text bodyTextLight">{props.text}</p>
          <div className="cardButton btn btn-primary ">{props.button}</div>
          </div>
        </div></Link>
	    </div>
	)
}

function DoubleCard(props){

	return(
	      <div className="col-6">
	       <Link to={props.link}><div className="fiveCardCluster">
      <div style={{backgroundImage: `url("${props.image}")`, backgroundRepeat: 'no-repeat'}} className="card-img-top roundedEdgesTop fiveCardImage"></div>
        <div className="card-body">
        <p className="videoEyebrow">{props.eyebrow}</p>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text bodyTextLight">{props.text}</p>
          <div className="cardButton btn btn-primary ">{props.button}</div>
          </div>
        </div></Link>
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
	    <CardFull key={item.title}
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
    <div className="p-5 backgroundDark">
	    <h2 className="blueGradientText headerText fiveCardClusterTitle">Project Manager & Product Owner</h2>
	    <div className='row pt-2'>
	    	<div className="col-lg-8">
		    	
		      		<LeftDoubleContent item={leftDoubleCardContent}/>

		      	<div className="row">
		      		<LeftFullWidthContent item={leftFullWidthCardContent}/>
		      	</div>
	      	</div>
	      	<div className="col-lg-4 blueGradientBackground">
	      		<RightClusterContent item={rightCardClusterContent}/>
	      	</div>
	    </div>
    </div>
  );
}


export default FiveCardCluster;

