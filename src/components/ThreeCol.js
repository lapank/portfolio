
function ThreeColBoxContent(props) {
  // Correct! There is no need to specify the key here:
  return (
  	<div className='row'>
       <div className="col-md-6">
         <div className='row'>
           <div className="col-md-12">
           <div className="p-3">
            <h3 className="yellow times large">{props.h3}</h3>
            </div>
           </div>
         </div>
        <div className='row'>
          <div className="col-md-6">
            <div className="p-3">
                <h4 className="yellow small text-right">{props.eyebrow}</h4>
            </div>
           </div>
           <div className="col-md-6">
            <div className="p-3">
              <p className="white">{props.text}</p>
            </div>
           </div>
        </div>
       </div>
      
    		<div className="col-md-6" style={{paddingLeft:0}}>
        <div style={{backgroundImage: `url("${props.image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 955, backgroundPosition: 'center', height:629}}></div>
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