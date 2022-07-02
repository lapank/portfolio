import './TwoColBox.scss';


function TwoColBoxAnimationContent(props) {
  // Correct! There is no need to specify the key here:
  return (
  	<div className='row'>
  		<div className="col-md-6 animation-container">
        <img className="img-fluid background-animation" src={props.image} alt={props.altText} />
	    		<img className="img-fluid animation" src={props.image2} alt={props.altText} />
	    </div>
	    <div className="col-md-6">
	    	<div className="p-3">
				<h4 className="yellow small">{props.eyebrow}</h4>
				<h3 className="yellow times large">{props.h3}</h3>
				<p className="white">{props.text}</p>
			</div>
		</div>
	</div>	
  );
}

function TwoColBoxAnimation(props) {
  const item = props.item;
  const listItems = item.map((item) =>
    // Correct! Key should be specified inside the array.
    <TwoColBoxAnimationContent key={item.eyebrow}
      image = {item.image}
      image2 = {item.image2}
      altText = {item.altText}
      link = {item.link}
      eyebrow = {item.eyebrow}
      h3 = {item.h3}
      text = {item.text} />
	);
  return (
    <div className="container pt-2">
      {listItems}
    </div>
  );
}

export default TwoColBoxAnimation;