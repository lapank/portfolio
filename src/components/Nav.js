import React, { useState } from 'react';

function Nav(){
	const [click, setClick] = useState(0);
	console.log(click % 2);
	if(click % 2 !== 1){
		return(
			<nav className="navbar navbar-expand-lg ">
			  <a className="navbar-brand" href="/">Kaylin Lapan | Portfolio</a>
			  <button onClick={() => {setClick(click+1)}} className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
			    <div className="navbar-nav">
			      <a className="nav-item nav-link" href="/web-development">Web Development</a>
			      <a className="nav-item nav-link" href="/art-digital-media">Art & Digital Media</a>
			      <a className="nav-item nav-link" href="/product-owner-project-management">Product Owner & Project Managment</a>
			    </div>
			  </div>
			</nav>
		)
	}else{
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height: 220 + 'px'}}>
			  <a className="navbar-brand" href="/">Kaylin Lapan | Portfolio</a>
			  <button onClick={() => {setClick(click+1)}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse show" id="navbarNavAltMarkup" >
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