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

function Card(props){
  return(
      <div className="Card">
      <img className="art" src={props.imgUrl}/>
      {props.title}
      {props.desc}
      {props.sub}
      </div>
    );
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
