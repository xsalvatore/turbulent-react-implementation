// packages
import React from 'react';

// styles
import './App.scss';

// components
import Header from './components/layout/Header';
import GridContainer from './components/grid/GridContainer';

const App = () => {
	return (
		<div className='app'>
			<Header />

			<section className='grid-container'>
				<GridContainer />
			</section>
		</div>
	);
};

export default App;
