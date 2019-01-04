import React from 'react';
import { Link } from 'react-router-dom';

import { slugify, dateToBr } from '../../utils';
import './styles.scss';

const PostCard = ({post, className =""}) => (
	<div id="card" className={className}>
		<Link to={`/posts/${slugify(post.title)}`}>
			<img 
				src={require(`../../assets/${post.img.src}`)} 
				alt={post.img.alt}
			/>
		</Link>
		<div className="inner">
			<h2>
				<Link to={`/posts/${slugify(post.title)}`}>
					{post.title}
				</Link>
			</h2>
			<p className="intro">
				{post.intro}
			</p>
			<p className="footer">
				<time>{dateToBr(post.date)}</time> | 
				<a href="#">
					{post.subject}
				</a>
			</p>
		</div>
	</div>
);

export default PostCard;