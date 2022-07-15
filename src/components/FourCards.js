import './FourCards.scss';
import './ImageGrid.scss';
import {Link} from 'react-router-dom';

function FourCardsContent(props) {
  // Correct! There is no need to specify the key here:
  return (
    
      <div className="col-lg-3 col-6">
      <div className="border backgroundDark roundedEdges">
      <div style={{backgroundImage: `url("${props.image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 370, height:150, backgroundPosition: 'center'}} className="card-img-top roundedEdgesTop" ></div>
        <div className="card-body">
          <h5 className="card-title smallTitleLight">{props.title}</h5>
          <p className="card-text bodyTextLight">{props.text}</p>
          <Link to={props.link} className="btn btn-primary tealBackground">{props.button}</Link>
          </div>
        </div>
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
    <div className="w-100 backgroundMedium">
    <div className='p-5'>
    <h2 className="headerTextDark">Web Development</h2>
    <div className='row pt-2'>
      {listItems}
      </div>
    </div>
    </div>
  );
}


export default FourCards;