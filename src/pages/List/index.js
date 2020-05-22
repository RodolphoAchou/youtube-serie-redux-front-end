import React from 'react';
import Car from '../../components/Car';

const cars = [
	
];

export default function List() {
	return (
		<div className="container-fluid">
			<div className="row">{cars.map((car, index) => <Car key={index} car={car} />)}</div>
		</div>
	);
}
