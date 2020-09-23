import React from 'react';
import { Box, Slider } from '@material-ui/core';

const marks = [
	{
		value: 1,
		label: '$1',
	},

	{
		value: 50,
		label: '$50',
	},

	{
		value: 99,
		label: '$99',
	},
];

function valuetext(value) {
	return `${value}`;
}

export default function DiscreteSlider() {
	return (
		<div>
			<Box px={3}>
			<Slider
				defaultValue={20}
				getAriaValueText={valuetext}
				aria-labelledby="discrete-slider-custom"
				step={10}
				valueLabelDisplay="auto"
				marks={marks}
			/>
			</Box>
		</div>
	);
}