import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import MaxContainer from '../../components/MaxContainer';

import { POSTS } from '../../data';
import { slugify, dateToBr } from '../../utils';
import './styles.scss';

class Post extends Component {
  
  state = {
  	post : null
  }

  componentDidMount(){
  	const { slugifyTitle } = this.props.match.params;
	const post = POSTS.filter(item => {
		return slugify(item.title) === slugifyTitle
	})[0];

	if(!post) return this.props.history.replace('/');

	this.setState({post});
  }

  _renderPost(){
  	let { post } = this.state;
	return (
		<div className="content">
			<img 
				src={require(`../../assets/${post.img.src}`)} 
				alt={post.img.alt}
				id="img-post"
			/>
			<article className="inner">
				<header>
					<h1>{post.title}</h1>
					<p>
						<time>{dateToBr(post.date)}</time> | 
						<a href="#">
							{post.subject}
						</a>
					</p>
				</header>
				<div className="divider"></div>
				<div className="text">
					{post.content}
				</div>
			</article>
		</div>
	);
  }
  
  render() {
  	let { post } = this.state;
    return (
      <div>
      	<Sidebar/>
      	<MaxContainer className="post-container">
      		<section id="post">
				{
      				post !== null &&
      				this._renderPost()
      			}
      		</section>
      	</MaxContainer>
      </div>
    );
  }
}

export default Post;