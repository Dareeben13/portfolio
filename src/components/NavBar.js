import React from 'react';
import './Navbar.css';
import Slide from 'react-reveal';

function NavBar() {
	return (
		<div className="nav-container">
			<Slide top>
				<h3>Welcome</h3>
			</Slide>
			<Slide top>
				<ul className="nav-wrapper">
					<a href="#home">
						<li className="nav-link">Home</li>
					</a>
					<a href="#about">
						<li className="nav-link">About</li>
					</a>
					<a href="/projects">
						<li className="nav-link">Projects</li>
					</a>
					<li className="nav-link">Services</li>
					<li className="nav-link">Contact</li>
				</ul>
			</Slide>
		</div>
	);
}

export default NavBar;
