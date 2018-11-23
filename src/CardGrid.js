import React from 'react'
import Card from './Card'

const CardGrid = ({ list }) => {
	const cardArray = list.map((user, i) => {
		return(
			<Card
				key={list[i].name} 
				name={list[i].name}
				height={list[i].height}
			/>
		)
	})

	return(
		<div>
			{cardArray}
		</div>
	)
}

export default CardGrid;