import './FourCards.scss';
import {Link} from 'react-router-dom';

function FourCardsContent(props) {
  // Correct! There is no need to specify the key here:
  return (
    
      <div className="col-lg-3 col-6">
      <div className="p-3 border bg-light">
        <img src={props.image} className="card-img-top" alt={props.altText}/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <Link to={props.link} className="btn btn-primary">{props.button}</Link>
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
    <div className="w-100">
    <div className='p-5'>
    <h2>Web Development</h2>
    <div className='row pt-2'>
      {listItems}
      </div>
    </div>
    </div>
  );
}


export default FourCards;