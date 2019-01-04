import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import MaxContainer from '../../components/MaxContainer';

import './styles.scss';

class About extends Component {

  render() {
    return (
 		<div>
 			<Sidebar/>
	     	<MaxContainer className="about-container">
	     		<section id="about">
					<div className="inner">
						<h1>About me</h1>
						<div className="box">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus veniam saepe fugit ut delectus numquam vel deserunt reprehenderit nulla corrupti, adipisci dolor provident, recusandae mollitia consequatur! Praesentium aut, magni id!
							</p>
							<img 
								src={require("../../assets/profile.jpg")}
								alt="Profile"
							/>
						</div>
						<Link to="/" className="back-button">
							<i className="fa fa-arrow-left">
							</i>
							Back
						</Link>
					</div>
	     		</section>
	     	</MaxContainer>
 		</div>
    );
  }
}

export default About;