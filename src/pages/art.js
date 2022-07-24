import React from 'react';
import {artData} from '../components/TwoColBoxData.js';
import TwoColBox from '../components/TwoColBox.js';
import {galleryData} from '../components/GalleryData.js';
import Gallery from '../components/Gallery.js';
import CardList from '../components/CardList.js';
import {cardData} from '../components/CardData.js';


function Art(){
	return(
		<div className='art'>
			<TwoColBox item={artData}/>
			<Gallery item={galleryData}/>
			<h2>Digital Media</h2>
			<CardList item={cardData}/>
			<div className="container pt-5 pb-5">
			<h2 className="gradientText headerText ">Video</h2>
			<p className="bodyTextLight">This video was edited down from ___ minutes to ___ minutes.</p>
			<div className="embed-responsive embed-responsive-16by9">

			<iframe width="560" height="315" src="https://www.youtube.com/embed/RiEqlchohBU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
			</div>

		</div>
	);
}

export default Art;