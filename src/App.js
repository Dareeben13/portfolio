import React from 'react';
import NavBar from './components/NavBar';
import Homepage from './components/HomePage';
import About from './components/About';
import Projects from './components/Projects';
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
