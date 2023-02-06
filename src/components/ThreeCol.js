import './ThreeCol.scss';
import github from './images/github-logo-light.png';
import linkedin from './images/linkedin-logo-light.png';
import { Link } from "react-router-dom";

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
          <div className="col-12">
            <h3 className="threeColAccent darkBlueGradientText">{props.h4}</h3>
          </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            <a href={props.link1} className="btn btn-primary">
            <img className="gitHubLogo"width='23' src={github} alt="Logo" />
            <span>Github</span>
            </a>
            <a href={props.link2} className="btn btn-primary linkedinButton">
            <img className="gitHubLogo"width='80' src={linkedin} alt="Logo" />
            </a>
            <p className="threeColText">{props.text}</p>
              <p className="threeColText"><b>{props.eyebrow}</b></p>
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
      h4 = {item.h4}
      text = {item.text}
      link1 = {item.link1}
      link2 = {item.link2} />
  );
  return (
    <div className="w-100 threeColContainer">
      {listItems}
    </div>
  );
}

export default ThreeColBox;