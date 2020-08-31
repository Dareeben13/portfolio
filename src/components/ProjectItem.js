import React from 'react';

function ProjectItem({ data }) {
	return (
		<div className="timeline-item">
			<div className="item-content">
				<span className="tag" style={{ background: data.category.color }}>
					{data.category.tag}
				</span>
				<time>{data.time}</time>
				<p>{data.time}</p>
				{data.link && (
					<a href={data.link.url} target="_blank" rel="noopener noreferrer">
						{data.link.text}
					</a>
				)}
				<span className="circle" />
			</div>
		</div>
	);
}

export default ProjectItem;
