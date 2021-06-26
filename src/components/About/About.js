import React from 'react';
import Bio from './Bio';
import Skills from './Skills';
import Education from './Education';

function About() {
	return (
		<div className='container' id='About'>
			{/* This Is Bio */}
			<Bio />
			<Skills />
			<Education />
		</div>
	);
}

export default About;
