/**
 * Profile Gallery
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, } from '@material-ui/core';

//Component
import { CustomCard } from 'components/GlobalComponents';

const gallery = [
	{
		id: 1,
		thumb: 'blog-1.jpg'
	},
	{
		id: 2,
		thumb: 'blog-2.jpg'
	},
	{
		id: 3,
		thumb: 'blog-3.jpg'
	},
	{
		id: 4,
		thumb: 'blog-4.jpg'
	},
	{
		id: 5,
		thumb: 'blog-5.jpg'
	},
	{
		id: 6,
		thumb: 'blog-6.jpg'
	}
];

const useStyles = makeStyles(theme => ({
	root: {
		'& p-0': {
			padding: 0,
		}
	},
}));

export default function ProfileGallery() {
	const classes = useStyles();

	return (
		<div className={`profile-gallery ${classes.root}`}>
			<CustomCard cardClasses={`p-0`}>
				<GridList cellHeight={140} cols={3}>
					{gallery.map(tile => (
						<GridListTile key={tile.thumb} cols={tile.cols || 1}>
							<img src={require(`assets/Images/${tile.thumb}`)} alt="gallery-img" />
						</GridListTile>
					))}
				</GridList>
			</CustomCard>
		</div>
	);
}