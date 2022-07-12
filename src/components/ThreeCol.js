
function ThreeColBoxContent(props) {
  // Correct! There is no need to specify the key here:
  return (
  	<div className='row'>
    <div className="col-md-6" style={{paddingRight:0}}>
        <div style={{backgroundImage: `url("${props.image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 955, backgroundPosition: 'center', height:629}}></div>
        </div>
       <div className="col-md-6 p-5 gradientBackground">
         <div className='row'>
           <div className="col-md-12">
           <div className="p-3">
            <h3 className="headerText large">{props.h3}</h3>
            </div>
           </div>
         </div>
        <div className='row'>
          <div className="col-md-4">
            <div className="p-3">
                <h4 className="accentText">{props.eyebrow}</h4>
            </div>
           </div>
           <div className="col-md-8">
            <div className="p-3">
              <p className="bodyText">{props.text}</p>
            </div>
           </div>
        </div>
       </div>
      
    		

  	</div>	
  );
}

function ThreeColBox(props) {
  const item = props.item;
  const listItems = item.map((item) =>
    // Correct! Key should be specified inside the array.
    <ThreeColBoxContent key={item.eyebrow}
      image = {item.image}
      altText = {item.altText}
      link = {item.link}
      eyebrow = {item.eyebrow}
      h3 = {item.h3}
      text = {item.text} />
	);
  return (
    <div className="w-100">
      {listItems}
    </div>
  );
}

export default ThreeColBox;