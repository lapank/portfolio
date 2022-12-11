import '../index.scss';
import './SecondaryPageHeader.scss';
import SecondaryNavOverlay from './SecondaryNavOverlay.js';

function SecondaryPageHeaderContent(props) {
  // Correct! There is no need to specify the key here:
  return (
  	<div className='row'>
  		
	    
	    	<div className="p-3">
				<p className="smallTitleDark">{props.eyebrow}</p>
        <h3 className="headerTextDark large">{props.h3}</h3>
        <p className="bodyTextDark">{props.text}</p>
			</div>
		
	</div>	
  );
}

function SecondaryPageHeader(props) {
  const item = props.item;
  const listItems = item.map((item) =>
    <SecondaryPageHeaderContent key={item.eyebrow}
      eyebrow = {item.eyebrow}
      h3 = {item.h3}
      text = {item.text} />
	);
  return (
  <div className="blueBackground">
  <div className="blueGradientBackground">
  	<SecondaryNavOverlay/>
    <div className="w-100 p-5">
    
    <div className="container">
      {listItems}
    </div>
    </div>
    </div>
    </div>
  );
}

export default SecondaryPageHeader;