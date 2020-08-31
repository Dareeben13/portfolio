import React from 'react';
import { Link } from 'react-scroll';

function ScrollLink({ meta, id }) {
	return (
		<Link activeClass="active" to={id} spy={true} smooth={true} offset={0} duration={500}>
			{meta}
		</Link>
	);
}

export default ScrollLink;
