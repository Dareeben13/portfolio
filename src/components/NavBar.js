import React from 'react';
import { Link } from 'react-scroll';
import ScrollLink from './ScrollLink';
import './Navbar.css';
import Slide from 'react-reveal';

function NavBar() {
	return (
		<div className="nav-container">
			<Slide top>
				<Link activeClass="active" to="home" spy={true} smooth={false} offset={0} duration={100}>
					<h3>Welcome</h3>
				</Link>
			</Slide>
			<Slide top>
				<div className="nav-wrapper">
					<Link activeClass="active" to="home" spy={true} smooth={false} offset={0} duration={100}>
						Home
					</Link>
					<Link activeClass="active" to="about" spy={true} smooth={false} offset={0} duration={100}>
						About
					</Link>
					<Link activeClass="active" to="projects" spy={true} smooth={false} offset={0} duration={100}>
						Projects
					</Link>
					<Link activeClass="active" to="contact" spy={true} smooth={false} offset={0} duration={100}>
						Contact
					</Link>
					<Link activeClass="active" to="services" spy={true} smooth={false} offset={0} duration={100}>
						Services
					</Link>
				</div>
			</Slide>
		</div>
	);
}

export default NavBar;

// <a href="#home">
{
	/* <li className="nav-link">Home</li>
</a>
<a href="#about">
	<li className="nav-link">About</li>
</a>
<a href="/projects">
	<li className="nav-link">Projects</li>
</a>
<li className="nav-link">Services</li>
<li className="nav-link">Contact</li> */
}
