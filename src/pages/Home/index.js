import React, { Component } from 'react';

import Sidebar from '../../components/Sidebar';
import MaxContainer from '../../components/MaxContainer';
import PostCard from '../../components/PostCard';

import { POSTS } from '../../data';
import './styles.scss';

class Home extends Component {
  render() {
    return (
      	<div>
      		<Sidebar/>
	      	<MaxContainer className="home-container">
            <section id="home">
              {
                POSTS.map(post =>
                  <PostCard 
                    post={post} 
                    key={post.id}
                    className="post-card"
                  />
                )
              }
            </section>
          </MaxContainer>
      	</div>
    );
  }
}

export default Home;