/**
 * Buttons
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton, Box, ButtonBase, Typography, Icon, Container } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';
import IntlMessages from 'util/IntlMessages';
// Global Components
import { CustomCard, SmallTitleBar } from 'components/GlobalComponents';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	input: {
		display: 'none',
	},
	margin: {
		margin: theme.spacing(1),
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
	button: {
		margin: theme.spacing(1),
	},
	complexRoot: {
		display: 'flex',
		flexWrap: 'wrap',
		minWidth: 300,
		width: '100%',
		[theme.breakpoints.down('xs')]: {
			minWidth: 'auto',
		},
	},
	image: {
		position: 'relative',
		height: 200,
		[theme.breakpoints.down('xs')]: {
			width: '100% !important', // Overrides inline-style
			height: 100,
		},
		'&:hover, &$focusVisible': {
			zIndex: 1,
			'& $imageBackdrop': {
				opacity: 0.15,
			},
			'& $imageMarked': {
				opacity: 0,
			},
			'& $imageTitle': {
				border: '4px solid currentColor',
			},
		},
	},
	focusVisible: {},
	imageButton: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white,
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%',
	},
	imageBackdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.4,
		transition: theme.transitions.create('opacity'),
	},
	imageTitle: {
		position: 'relative',
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.background.paper,
		position: 'absolute',
		bottom: -2,
		left: 'calc(50% - 9px)',
		transition: theme.transitions.create('opacity'),
	},
}));

const images = [
	{
		url: 'breakfast.jpg',
		title: 'Breakfast',
		width: '40%',
	},
	{
		url: 'burgers.jpg',
		title: 'Burgers',
		width: '30%',
	},
	{
		url: 'camera.jpg',
		title: 'Camera',
		width: '30%',
	},
];
export default function Buttons() {
	const classes = useStyles();
	return (

		<div className="ui-app-wrapper">
			<SmallTitleBar
            title={<IntlMessages id="sidebar.buttons" />}
				center
			/>
			<div className="page-space">
				<Container>
					<Box px={{ xs:'12px', lg:0 }}>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.containedButtons" />}>
								<Box pt={2} className={classes.root}>
									<Button variant="contained">Default</Button>
									<Button variant="contained" color="primary">
									Primary
									</Button>
									<Button variant="contained" color="secondary">
									Secondary
									</Button>
									<Button variant="contained" disabled>
									Disabled
									</Button>
									<Button variant="contained" color="primary" href="#contained-buttons">
									Link
									</Button>
								</Box>
							</CustomCard>
						</Box>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.textButtons" />}>
								<Box pt={2} className={classes.root}>
									<Button>Default</Button>
									<Button color="primary">Primary</Button>
									<Button color="secondary">Secondary</Button>
									<Button disabled>Disabled</Button>
									<Button href="#text-buttons" color="primary">Link</Button>
								</Box>
							</CustomCard>
						</Box>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.outlinedButtons" />}>
								<Box pt={2} className={classes.root}>
									<Button variant="outlined">Default</Button>
									<Button variant="outlined" color="primary">Primary</Button>
									<Button variant="outlined" color="secondary">Secondary</Button>
									<Button variant="outlined" disabled>Disabled</Button>
									<Button variant="outlined" color="primary" href="#outlined-buttons">
										Link
									</Button>
								</Box>
							</CustomCard>
						</Box>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.uploadButton" />}>
								<Box pt={2} className={classes.root}>
									<input
										accept="image/*"
										className={classes.input}
										id="contained-button-file"
										multiple
										type="file"
									/>
									<label htmlFor="contained-button-file">
									<Button variant="contained" color="primary" component="span">
										Upload
									</Button>
									</label>
									<input
									accept="image/*"
									className={classes.input}
									id="text-button-file"
									multiple
									type="file"
									/>
									<label htmlFor="text-button-file">
									<Button component="span">Upload</Button>
									</label>
									<input
									accept="image/*"
									className={classes.input}
									id="outlined-button-file"
									multiple
									type="file"
									/>
									<label htmlFor="outlined-button-file">
									<Button variant="outlined" component="span">
										Upload
									</Button>
									</label>
									<input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
									<label htmlFor="icon-button-file">
									<IconButton color="primary" aria-label="upload picture" component="span">
										<PhotoCamera />
									</IconButton>
									</label>
								</Box>
							</CustomCard>
						</Box>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.sizes" />}>
								<Box pt={2} className={classes.root}>
									<div>
										<Button size="small" className={classes.margin}>
											Small
										</Button>
										<Button size="medium" className={classes.margin}>
											Medium
										</Button>
										<Button size="large" className={classes.margin}>
											Large
										</Button>
									</div>
									<div>
										<Button variant="outlined" size="small" color="primary" className={classes.margin}>
											Small
										</Button>
										<Button variant="outlined" size="medium" color="primary" className={classes.margin}>
											Medium
										</Button>
										<Button variant="outlined" size="large" color="primary" className={classes.margin}>
											Large
										</Button>
									</div>
									<div>
										<Button variant="contained" size="small" color="primary" className={classes.margin}>
											Small
										</Button>
										<Button variant="contained" size="medium" color="primary" className={classes.margin}>
											Medium
										</Button>
										<Button variant="contained" size="large" color="primary" className={classes.margin}>
											Large
										</Button>
									</div>
									<div>
										<IconButton aria-label="delete" className={classes.margin} size="small">
											<ArrowDownwardIcon fontSize="inherit" />
										</IconButton>
										<IconButton aria-label="delete" className={classes.margin}>
											<DeleteIcon fontSize="small" />
										</IconButton>
										<IconButton aria-label="delete" className={classes.margin}>
											<DeleteIcon />
										</IconButton>
										<IconButton aria-label="delete" className={classes.margin}>
											<DeleteIcon fontSize="large" />
										</IconButton>
									</div>
								</Box>
							</CustomCard>
						</Box>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.buttonsWithIconsAndLabel" />}>
								<Box pt={2} className={classes.root}>
									<Button
										variant="contained"
										color="secondary"
										className={classes.button}
										startIcon={<DeleteIcon />}
									>
										Delete
									</Button>
									<Button
										variant="contained"
										color="primary"
										className={classes.button}
										endIcon={<Icon>send</Icon>}
									>
										Send
									</Button>
									<Button
										variant="contained"
										color="default"
										className={classes.button}
										startIcon={<CloudUploadIcon />}
									>
										Upload
									</Button>
									<Button
										variant="contained"
										disabled
										color="default"
										className={classes.button}
										startIcon={<KeyboardVoiceIcon />}
									>
										Talk
									</Button>
									<Button
										variant="contained"
										color="primary"
										size="small"
										className={classes.button}
										startIcon={<SaveIcon />}
									>
										Save
									</Button>
									<Button
										variant="contained"
										color="primary"
										size="large"
										className={classes.button}
										startIcon={<SaveIcon />}
									>
										Save
									</Button>
								</Box>
							</CustomCard>
						</Box>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.iconButtons" />}>
								<Box pt={2} className={classes.root}>
									<IconButton aria-label="delete">
										<DeleteIcon />
									</IconButton>
									<IconButton aria-label="delete" disabled color="primary">
										<DeleteIcon />
									</IconButton>
									<IconButton color="secondary" aria-label="add an alarm">
										<AlarmIcon />
									</IconButton>
									<IconButton color="primary" aria-label="add to shopping cart">
										<AddShoppingCartIcon />
									</IconButton>
								</Box>
							</CustomCard>
						</Box>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.complexButtons" />}>
								<Box pt={2} className={classes.complexRoot}>
									{images.map(image => (
										<ButtonBase
											focusRipple
											key={image.title}
											className={classes.image}
											focusVisibleClassName={classes.focusVisible}
											style={{
												width: image.width,
											}}
										>
											<span
												className={classes.imageSrc}
												style={{ backgroundImage: "url(" + require('assets/Images/' + image.url) + ")", backgroundSize: `cover`, backgroundPosition: `center`, height: `100%` }}
											/>
											<span className={classes.imageBackdrop} />
											<span className={classes.imageButton}>
												<Typography
													component="span"
													variant="subtitle1"
													color="inherit"
													className={classes.imageTitle}
												>
													{image.title}
													<span className={classes.imageMarked} />
												</Typography>
											</span>
										</ButtonBase>
									))}
								</Box>
							</CustomCard>
						</Box>
					</Box>
				</Container>
			</div>
		</div>
	);
}