import React from 'react';
import './ContentCard.css';

function ContentCard({ content, imageUrl, meta, alt }) {
	return (
		<div className="ui card card-wrapper">
			<div className="card-image">
				<img src={imageUrl} alt={alt} />
			</div>
			<div className="content">
				{content}
				<div className="meta">{meta}</div>
			</div>
		</div>
	);
}

export default ContentCard;
