import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import MaxContainer from '../../components/MaxContainer';

import './styles.scss';

class Contact extends Component {

  render() {
    return (
		<div>
			<Sidebar/>
			<MaxContainer className="contact-container">
				<section id="contact">
					<div className="inner">
						<h1>Contact</h1>
						<div className="info">
							<div className="item">
								<h4>Phone</h4>
								<i className="fa fa-phone"></i>
								<p>(99) 999999999</p>
							</div>
							<div className="item">
								<h4>Email</h4>
								<i className="fa fa-envelope"></i>
								<p>example@email.com</p>
							</div>
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

export default Contact;