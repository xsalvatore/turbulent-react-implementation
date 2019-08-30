// packages
import React from 'react';

const GridItem = ({ id, value }) => {
	return (
		<div className='grid-item' key={id}>
			{value}
		</div>
	);
};

export default GridItem;
