import './ThreeCol.scss';

function ThreeColBoxContent(props) {
  // Correct! There is no need to specify the key here:
  return (
    <div>
    <div className="relativeContainer">
    <img className="threeColBackgroundImage" src={props.image} />
    <div className="row topText">
      <div className="col-5">
      </div>
      <div className="col-7">
        <div className="row">
          <div className="col-12">
            <h3 className="threeColHeader large darkBlueGradientText">{props.h3}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <h4 className="threeColAccent darkBlueGradientText">{props.eyebrow}</h4>
          </div>
          <div className="col-md-9">
            <p className="threeColText">{props.text}</p>
          </div>
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
    <div className="w-100 threeColContainer">
      {listItems}
    </div>
  );
}

export default ThreeColBox;