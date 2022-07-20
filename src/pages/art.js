import React from 'react';
import {artData} from '../components/TwoColBoxData';
import {artData1} from '../components/TwoColBoxData';
import {artData2} from '../components/TwoColBoxData';
import {artData3} from '../components/TwoColBoxData';
import TwoColBox from '../components/TwoColBox';
import {galleryData} from '../components/GalleryData';
import Gallery from '../components/Gallery.js';
import CardList from '../components/CardList.js';


function Art(){
	return(
		<div className='art'>
			<TwoColBox item={artData}/>
			<Gallery item={galleryData}/>
			<h2>Digital Media</h2>
			<CardList item={artData1}/>
			<CardList item={artData2}/>
			<CardList item={artData3}/>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/RiEqlchohBU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

		</div>
	);
}

export default Art;