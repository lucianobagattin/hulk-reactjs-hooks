/**
 * Modals
 */
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Box, Button, Container } from '@material-ui/core';

//Global Component
import { SmallTitleBar, CustomCard } from 'components/GlobalComponents';

import IntlMessages from 'util/IntlMessages';

function rand() {
	return Math.round(Math.random() * 10) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();
	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		'@media (max-width:375px)': {
			width: 280,
		}
	},
}));

const useFadeStyles = makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

export default function SimpleModal() {

	const classes = useStyles();
	const fadeClasses = useFadeStyles();
	const [modalStyle] = useState(getModalStyle);
	const [open, setOpen] = useState(false);
	const [secOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSecOpen = () => {
		setOpen(true);
	};

	const handleSecClose = () => {
		setOpen(false);
	};

	return (
		<div className="ui-app-wrapper">
			<SmallTitleBar
            title={<IntlMessages id="sidebar.modals" />}
				center
			/>
			<div className="page-space">
				<Container>
					<Box px={{ xs: '12px', lg: 0 }}>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.simpleModal" />}>
								<Box pt={2}>
									<Button variant="outlined" className="primary-bg-btn" color="primary" onClick={handleOpen}>
										Open Modal
            					</Button>
									<Modal
										aria-labelledby="simple-modal-title"
										aria-describedby="simple-modal-description"
										open={open}
										onClose={handleClose}
									>
										<div style={modalStyle} className={classes.paper}>
											<h2 id="simple-modal-title">Text in a modal</h2>
											<p id="simple-modal-description">
												Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                						</p>
										</div>
									</Modal>
								</Box>
							</CustomCard>
						</Box>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.transition" />}>
								<Box pt={2}>
									<Button variant="outlined" className="primary-bg-btn" color="primary" onClick={handleSecOpen}>
										react-transition-group
            						</Button>

									<Modal
										aria-labelledby="transition-modal-title"
										aria-describedby="transition-modal-description"
										className={fadeClasses.modal}
										open={secOpen}
										onClose={handleSecClose}
										closeAfterTransition
										BackdropComponent={Backdrop}
										BackdropProps={{
											timeout: 500,
										}}
									>
										<Fade in={secOpen}>
											<div className={fadeClasses.paper}>
												<h2 id="transition-modal-title">Transition modal</h2>
												<p id="transition-modal-description">react-transition-group animates me.</p>
											</div>
										</Fade>
									</Modal>
								</Box>
							</CustomCard>
						</Box>
					</Box>
				</Container>
			</div>
		</div>
	);
}