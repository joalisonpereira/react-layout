import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Post from './pages/Post';

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Home} exact/>
			<Route path="/sobre" component={About}/>
			<Route path="/contato" component={Contact}/>
			<Route path="/posts/:slugifyTitle" component={Post}/>
			<Route path="*" component={Home}/>
		</Switch>
	</BrowserRouter>
);

export default App;