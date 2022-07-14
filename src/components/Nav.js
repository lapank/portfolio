import React, { useState } from 'react';
import '../index.scss';
import './Nav.scss';

function Nav(){
	const [click, setClick] = useState(0);
	if(click % 2 !== 1){
		return(
			<div className="w-100">
			<nav class="navbar navbar-expand-lg navbar-light">
			  <a class="navbar-brand headerText" href="/">Kaylin Lapan | Portfolio</a>
			  <button onClick={() => {setClick(click+1)}} className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse bodyText" id="navbarNavDropdown">
			    <ul class="navbar-nav">
			      <li class="nav-item">
			        <a className="nav-link" href="/web-development">Web Development</a>
			      </li>
			      <li class="nav-item">
			        <a className="nav-link" href="/art-digital-media">Art & Digital Media</a>
			      </li>
			      <li class="nav-item">
			      	<a className="nav-link" href="/product-owner-project-management">Product Owner & Project Managment</a>
			      </li>
			    </ul>
			  </div>
			</nav>
			</div>
		)
	}else{
		return(
			<nav className="navbar navbar-expand-lg navbar-light" style={{height: 220 + 'px'}}>
			  <a className="navbar-brand headerText" href="/">Kaylin Lapan | Portfolio</a>
			  <button onClick={() => {setClick(click+1)}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse show bodyText" id="navbarNavAltMarkup" >
			    <div className="navbar-nav">
			      <a className="nav-item nav-link" href="/web-development">Web Development</a>
			      <a className="nav-item nav-link" href="/art-digital-media">Art & Digital Media</a>
			      <a className="nav-item nav-link" href="/product-owner-project-management">Product Owner & Project Managment</a>
			    </div>
			  </div>
			</nav>

		)
	}
}

export default Nav;