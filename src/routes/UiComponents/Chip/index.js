/**
 * Chip 
*/
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Avatar, Chip, Container } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import IntlMessages from 'util/IntlMessages';
//Global Components
import { SmallTitleBar, CustomCard } from 'components/GlobalComponents';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(0.5),
		},
	},
	Paper: {
		padding: '0.75rem',
		backgroundColor: 'transparent',
		boxShadow: 'none',
	}
}));

export default function Chips() {
	const classes = useStyles();

	const handleDelete = () => {
		console.info('You clicked the delete icon.');
	};

	const handleClick = () => {
		console.info('You clicked the Chip.');
	};

	const [chipData, setChipData] = useState([
		{ key: 0, label: 'Angular' },
		{ key: 1, label: 'Python' },
		{ key: 2, label: 'Polymer' },
		{ key: 3, label: 'React' },
		{ key: 4, label: 'Vue.js' },
	]);

	const removeChip = chipToDelete => () => {
		setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
	};

	return (

		<div className="ui-chip-wrapper">
			<SmallTitleBar
            title={<IntlMessages id="sidebar.chip" />}
				center
			/>
			<div className="page-space">
				<Container>
					<Box px={{ xs: '12px', lg: 0 }}>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="sidebar.chip" />}>
								<Box pt={2}>
									<div className={classes.root}>
										<Chip label="Basic" />
										<Chip label="Disabled" disabled />
										<Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
										<Chip
											avatar={<Avatar alt="Natacha" src={require(`assets/Images/avatars/user-6.jpg`)} />}
											label="Deletable"
											onDelete={handleDelete}
										/>
										<Chip
											icon={<FaceIcon />}
											label="Clickable deletable"
											onClick={handleClick}
											onDelete={handleDelete}
										/>
										<Chip
											label="Custom delete icon"
											onClick={handleClick}
											onDelete={handleDelete}
											deleteIcon={<DoneIcon />}
										/>
										<Chip label="Clickable Link" component="a" href="#chip" clickable />
										<Chip
											avatar={<Avatar>M</Avatar>}
											label="Primary clickable"
											clickable
											color="primary"
											onDelete={handleDelete}
											deleteIcon={<DoneIcon />}
										/>
										<Chip
											icon={<FaceIcon />}
											label="Primary clickable"
											clickable
											color="primary"
											onDelete={handleDelete}
											deleteIcon={<DoneIcon />}
										/>
										<Chip label="Deletable primary" onDelete={handleDelete} color="primary" />
										<Chip
											icon={<FaceIcon />}
											label="Deletable secondary"
											onDelete={handleDelete}
											color="secondary"
										/>
									</div>
								</Box>
							</CustomCard>
						</Box>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.outlinedChip" />}>
								<Box pt={2}>
									<div className={classes.root}>
										<Chip label="Basic" variant="outlined" />
										<Chip label="Disabled" disabled variant="outlined" />
										<Chip
											avatar={<Avatar>M</Avatar>}
											label="Clickable"
											onClick={handleClick}
											variant="outlined"
										/>
										<Chip
											avatar={<Avatar alt="Natacha" src={require(`assets/Images/avatars/user-6.jpg`)} />}
											label="Deletable"
											onDelete={handleDelete}
											variant="outlined"
										/>
										<Chip
											icon={<FaceIcon />}
											label="Clickable deletable"
											onClick={handleClick}
											onDelete={handleDelete}
											variant="outlined"
										/>
										<Chip
											label="Custom delete icon"
											onClick={handleClick}
											onDelete={handleDelete}
											deleteIcon={<DoneIcon />}
											variant="outlined"
										/>
										<Chip label="Clickable link" component="a" href="#chip" clickable variant="outlined" />
										<Chip
											avatar={<Avatar>M</Avatar>}
											label="Primary clickable"
											clickable
											color="primary"
											onDelete={handleDelete}
											deleteIcon={<DoneIcon />}
											variant="outlined"
										/>
										<Chip
											icon={<FaceIcon />}
											label="Primary clickable"
											clickable
											color="primary"
											onDelete={handleDelete}
											deleteIcon={<DoneIcon />}
											variant="outlined"
										/>
										<Chip label="Deletable primary" onDelete={handleDelete} color="primary" variant="outlined" />
										<Chip
											icon={<FaceIcon />}
											label="Deletable secondary"
											onDelete={handleDelete}
											color="secondary"
											variant="outlined"
										/>
									</div>
								</Box>
							</CustomCard>
						</Box>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.chipArray" />}>
								<Box pt={2}>
									<div className={classes.root}>
										{chipData.map(data => {
											let icon;
											if (data.label === 'React') {
												icon = <TagFacesIcon />;
											}
											return (
												<Chip
													key={data.key}
													icon={icon}
													label={data.label}
													onDelete={data.label === 'React' ? undefined : removeChip(data)}
													className={classes.chip}
												/>
											);
										})}
									</div>
								</Box>
							</CustomCard>
						</Box>
					</Box>
				</Container>
			</div>
		</div>
	);
}