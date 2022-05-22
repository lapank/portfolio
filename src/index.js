import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Head from './Head';

ReactDOM.render(
  <React.StrictMode>
    <Head />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  )

 
/*function CardContent(props) {
  // Correct! There is no need to specify the key here:
  return (
    <div>
        <img className="art" src={props.imgUrl}/>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <h3>{props.sub}</h3>
    </div>
  );
}

function CardList(props) {
  const cards = props.cards;
  const listItems = cards.map((card) =>
    // Correct! Key should be specified inside the array.
    <CardContent key={card.title.toString()}
              imgUrl = {card.imgUrl}
              title = {card.title}
              desc = {card.desc}
              sub = {card.sub} />
  );
  return (
    <div>
      {listItems}
    </div>
  );
}

const cards = [
  {imgUrl: 'http://kaylinlapan.com/media/abattoir-side.png', title:'Fine Art', desc:'Lorem Ipsum', sub: 'Photoshop'},      
  {imgUrl: 'http://kaylinlapan.com/media/abattoir-side.png', title:'Digital Media', desc: 'Lorem Ipsum', sub: 'Photoshop'},      
  {imgUrl: 'http://kaylinlapan.com/media/abattoir-side.png', title:'Product Owner', desc: 'Lorem Ipsum', sub: 'Photoshop'},
  {imgUrl: 'http://kaylinlapan.com/media/abattoir-side.png', title:'Project Manager', desc: 'Lorem Ipsum', sub: 'Photoshop'},
  {imgUrl: 'http://kaylinlapan.com/media/abattoir-side.png', title:'Web Development', desc: 'Lorem Ipsum', sub: 'Photoshop'} 
  ];

ReactDOM.render(
  <CardList cards={cards} />,
  document.getElementById('root')
);*/
