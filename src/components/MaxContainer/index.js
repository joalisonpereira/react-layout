import React from 'react';
import FadeIn from 'react-fade-in';

import './styles.scss';

const MaxContainer = ({children,className=""}) => (
	<div className={`max-container ${className}`}>
		<div className="inner">
			<FadeIn>
				{ children }
			</FadeIn>
		</div>
	</div>
);

export default MaxContainer;