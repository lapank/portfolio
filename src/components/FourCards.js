import './FourCards.scss';

function FourCardsContent(props) {
  // Correct! There is no need to specify the key here:
  return (
    
      <div className="col-md-3">
      <div className="p-3 border bg-light">
        <img src={props.image} className="card-img-top" alt={props.altText}/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="{props.text}" className="btn btn-primary">Go somewhere</a>
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
      text = {item.text} />
  );
  return (
    <div className="container">
    <h2>Web Development</h2>
    <div className='row pt-2'>
      {listItems}
      </div>
    </div>
  );
}

function Card(props){
  return (
    <div className="col-md-3 card">
        <img src={props.image} className="card-img-top" alt={props.altText}/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="{props.text}" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  );
}

export default FourCards;