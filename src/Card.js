import React from 'react';

const Card = ({ name, height }) => {
	return(
		<div className='tc bg-dark-gray yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<h2 className='f4'>Name: {name}</h2>
			<h3 className='f5'>Height: {height}</h3>
		</div>
	)
}

export default Card;