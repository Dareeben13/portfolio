import React from 'react';
import { Link } from 'react-scroll';

function Button({ text, link }) {
	return (
		<Link activeClass="active" to={link} spy={true} smooth={false} offset={0} duration={200}>
			<button>{text}</button>
		</Link>
	);
}

export default Button;
