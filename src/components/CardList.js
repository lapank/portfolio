import './TwoColBox.scss';
import '../index.scss';


function TwoColBoxContent(props) {
  // Correct! There is no need to specify the key here:
  return (
  	<div className='row backgroundDark'>
  		<div className="col-md-6">
        <img className="img-fluid" src={props.image} alt={props.altText} />
	    </div>
	    <div className="col-md-6">
	    	<div className="p-3">
				<p className="smallTitleLight">{props.eyebrow}</p>
        <h3 className="smallTitleLight">{props.h3}</h3>
        <p className="bodyTextLight">{props.text}</p>
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
    <div className="w-100 gradientBackground p-5">
    <div className="container">
      {listItems}
    </div>
    </div>
  );
}

export default TwoColBox;