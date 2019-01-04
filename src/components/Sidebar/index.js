import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Sidebar = () => (
	<div id="sidebar">
		<div className="inner">
			<header id="header">
				<h1>
					<Link to="/">
						React Layout
					</Link>
				</h1>
				<div className="divider"></div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dignissimos nemo sunt minus, blanditiis libero dolores quibusdam accusantium, reiciendis nam voluptatum totam incidunt asperiores commodi, rerum quos corrupti earum, ut!
				</p>
				<div className="divider"></div>
				<nav>
					<ul className="nav-links">
						<li>
							<Link to="/">
								START
							</Link>
						</li>
						<li>
							<Link to="/sobre">
								ABOUT
							</Link>
						</li>
						<li>
							<Link to="/contato">
								CONTACT
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<div className="divider"></div>
			<footer>
				<ul className="social-links">
					<li>
						<a href="#">
							<i className="fa fa-facebook"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fa fa-linkedin"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fa fa-instagram"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fa fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fa fa-github"></i>
						</a>
					</li>
				</ul>
				<p className="small-text">
					<strong>React Layout</strong> - 2018
				</p>
			</footer>
		</div>
	</div>
);

export default Sidebar;