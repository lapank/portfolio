import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const element = (
  <div>
  <h2>Fine Art</h2>
  <h2>Digital Art and Media</h2>
  <h2>Product Owner</h2>
  <h2>Project Manager</h2>
  <h2>Web Development</h2>
  </div>
  );

class Card extends React.Component{
  render(){
    return(
       <div className="Card">
          <img className="art" src={this.props.imgUrl}/>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
          <h3>{this.props.sub}</h3>
        </div>
    )
  }
}



const card = {
  imgUrl: 'http://kaylinlapan.com/media/abattoir-side.png',
  title:'Fine Art',
  desc: 'Lorem Ipsum',
  sub: 'Photoshop'
  };

ReactDOM.render(
  <Card
  imgUrl={card.imgUrl}
  title={card.title}
  desc={card.desc}
  sub={card.sub}/>,

  document.getElementById('root')
);
