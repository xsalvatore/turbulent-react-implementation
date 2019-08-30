import React, { Fragment, useState } from 'react';
import GridItem from './GridItem';

const GridContainer = () => {
	// useState hook
	const [items, setItems] = useState([
		{
			id: '0',
			value: '0'
		},
		{
			id: '1',
			value: '1'
		},
		{
			id: '2',
			value: '2'
		},
		{
			id: '3',
			value: '3'
		}
	]);

	const addItem = () => {
		setItems([
			...items,
			{
				id: items.length.toString(),
				value: items.length.toString()
			}
		]);
	};

	return (
		<Fragment>
			<div className='grid'>
				{items.map((item) => (
					<GridItem key={item.id} value={item.value} />
				))}
			</div>

			<button onClick={addItem}>Add Box</button>
		</Fragment>
	);
};

export default GridContainer;
