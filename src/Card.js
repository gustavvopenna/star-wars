import React from 'react';

const Card = ({ name, height }) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<h1>{name}</h1>
			<h2>{height}</h2>
		</div>
	)
}

export default Card;