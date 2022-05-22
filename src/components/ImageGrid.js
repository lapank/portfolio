

function ImageGridContent(props) {
  // Correct! There is no need to specify the key here:
  return (
    <div className='row pt-2'>
      <div className="col-md-4">
       <h2>{props.title}</h2>
       <p>{props.text}</p>
      </div>
      <div className="col-md-8">
        <div className="row">
          <div className="col-4">
            <img src={props.image1} className="img-flex" alt={props.altText1}/>
          </div>
          <div className="col-8">
            <img src={props.image2} className="img-flex" alt={props.altText2}/>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img src={props.image3} className="img-flex" alt={props.altText3}/>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-6">
                <img src={props.image4} className="img-flex" alt={props.altText4}/>
              </div>
              <div className="col-6">
                <img src={props.image5} className="img-flex" alt={props.altText5}/>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <img src={props.image6} className="img-flex" alt={props.altText6}/>
              </div>
              <div className="col-6">
                <img src={props.image7} className="img-flex" alt={props.altText7}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageGrid(props) {
  const item = props.item;
  const listItems = item.map((item) =>
    // Correct! Key should be specified inside the array.
    <ImageGridContent key={item.title}
      link = {item.link}
      title = {item.title}
      text = {item.text}
      image1 = {item.image1}
      altText1 = {item.altText1}
      image2 = {item.image2}
      altText2 = {item.altText2}
      image3 = {item.image3}
      altText3 = {item.altText3}
      image4 = {item.image4}
      altText4 = {item.altText4}
      image5 = {item.image5}
      altText5 = {item.altText5}
      image6 = {item.image6}
      altText6 = {item.altText6}
      image7 = {item.image7}
      altText7 = {item.altText7} />
  );
  return (
    <div className="container pt-5">
      {listItems}
    </div>
  );
}

export default ImageGrid;