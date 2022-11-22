import './FourCards.scss';
import './ImageGrid.scss';
import {Link} from 'react-router-dom';

function FourCardsContent(props) {
  // Correct! There is no need to specify the key here:
  return (
    
      <div className="col-md-6 col-xl-3">
      <a href={props.link}><div className="fourColCard outlineNavOverlay">
      <div style={{backgroundImage: `url("${props.image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 370, height:150, backgroundPosition: 'center'}} className="fourColThumbnail"></div>
        <div className="card-body">
          <h5 className="card-title ">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href={props.link} className="btn btn-primary fourColButton">{props.button}</a>
          </div>
        </div></a>
    </div>
    
  );
}

function FourCards(props) {
  const item = props.item;
  const listItems = item.map((item) =>
    // Correct! Key should be specified inside the array.
    <FourCardsContent key={item.title}
      image = {item.image}
      altText = {item.altText}
      link = {item.link}
      title = {item.title}
      text = {item.text} 
      button = {item.button}/>
  );
  return (
    <div className="w-100 fourCardBackground">
    <div className='p-5'>
    <h2 className="threeColHeader large fourCardTitle">Web Development</h2>
    <div className='row pt-5'>
      {listItems}
      </div>
    </div>
    </div>
  );
}


export default FourCards;