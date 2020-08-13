import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContentCard from './components/ContentCard';
import NavBar from './components/NavBar';
import Homepage from './components/HomePage';
import backgroundImg from './Images/backgroundImg.jpg';
import './App.css';

function App() {
	return (
		<div className="landing">
			<div className="container">
				<NavBar />
				<Homepage />
			</div>
		</div>
	);
}

export default App;
