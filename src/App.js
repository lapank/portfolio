import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App(){
	return(
			<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' />
				</Routes>
			</Router>
			</div>
		);
}

export default App;