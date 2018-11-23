import React from 'react';

const Card = ({ name, height }) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<h1 className='f4'>Name: {name}</h1>
			<h2 className='f5'>Height: {height}</h2>
		</div>
	)
}

export default Card;