import React from 'react';
import {artData} from '../components/TwoColBoxData';
import {artData1} from '../components/TwoColBoxData';
import {artData2} from '../components/TwoColBoxData';
import {artData3} from '../components/TwoColBoxData';
import TwoColBox from '../components/TwoColBox';
import {galleryData} from '../components/GalleryData';
import Gallery from '../components/Gallery.js';

function Art(){
	return(
		<div className='art'>
			<h1>Fine Art and Digital Media</h1>
			<TwoColBox item={artData}/>
			<Gallery item={galleryData}/>
			<h2>Digital Media</h2>
			<TwoColBox item={artData1}/>
			<TwoColBox item={artData2}/>
			<TwoColBox item={artData3}/>

		</div>
	);
}

export default Art;