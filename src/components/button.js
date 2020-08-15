import React from 'react';

function Button({ text, link }) {
	return (
		<a href={link}>
			<button>{text}</button>
		</a>
	);
}

export default Button;
