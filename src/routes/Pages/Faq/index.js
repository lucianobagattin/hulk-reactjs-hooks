/**
 * FAQ Page
 */
import React,{useState} from 'react';
import {
	makeStyles,
	FormControl,
	Input,
	InputAdornment,
	Box,
	ExpansionPanel,
	ExpansionPanelDetails,
	ExpansionPanelSummary,
	Typography,
	Container
} from '@material-ui/core';

import IntlMessages from 'util/IntlMessages';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';

// Data
import { faq } from '../components/data.js';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	title: {
		minHeight: '3rem !important',
		paddingLeft: '2.625rem',
		paddingRight: '0.9375rem',
		'& .MuiExpansionPanelSummary-content': {
			margin: '0.75rem 0 !important'
		}
	},
	faqWrap: {
		marginBottom:'1.25rem',
		'&:last-child':{
			marginBottom:0,
		},
		'& >div': {
			'&:before': {
				opacity: '1 !important',
				top: 19,
				left: 23,
				height: '0.625rem',
				width: '0.625rem',
				borderRadius: '100%',
				//backgroundColor: theme.palette.primary.main,
			}
		},
	},
	heading: {
		flexBasis: '100%',
		fontWeight: 500
	},
	content: {
		backgroundColor:  theme.palette.background.default
	},
	searchBarWrap:{
		'& .MuiInput-underline::before':{
			borderBottom: `1px solid ${theme.palette.common.white}`,
		},
		'& .MuiInputBase-input::placeholder':{
			color: theme.palette.common.white,
		},
		'& .MuiInput-underline:hover:not(.Mui-disabled)::before':{
			borderColor: theme.palette.common.white,
		},
		'& .MuiInput-underline::after':{
			borderBottom: `1px solid ${theme.palette.common.white}`,
		},
		'& .MuiInputBase-root':{
			'& input':{
				color: theme.palette.common.white,
			},
		},
		'& .MuiSvgIcon-root':{
			fill: theme.palette.common.white,
		}
	}
}));

export default function FAQ() {
	const classes = useStyles();
	const [message, setMessage] = useState('');
	const [expanded, setExpanded] = useState('generalEnquries_1');
	const [faqData] = useState(faq);

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className={classes.root}>
			<div className="faq-page">
				<div className="faq-banner bg-primary">
               <Typography variant="h4" className="text-white" ><IntlMessages id="component.faq" /></Typography>
					<Box pt={2} className={classes.searchBarWrap} textAlign="center">
						<FormControl>
							<Input
								type="text"
								name="search"
								placeholder="Search FAQ's"
								onChange={(event) => setMessage(event.target.value)}
								value={message}
								endAdornment={
									<InputAdornment position="end">
										<SearchIcon />
									</InputAdornment>
								}
							/>
						</FormControl>
					</Box>
				</div>
				<Container>
					<Box px={{ xs:'12px', lg:0 }}>
						<Box className="page-space faq-page-wrap">
							{faqData.map((cat, i) => (
								<div key={i} className={classes.faqWrap}>
                           <Box mb={2}><Typography variant="h6"><IntlMessages id={cat.category} /> </Typography></Box>
									{
										cat.content.map((faq, i) => (
											<ExpansionPanel className={classes.faqListItem} key={i} expanded={expanded === cat.id + '_' + faq.subid} onChange={handleChange(cat.id + '_' + faq.subid)}>
												<ExpansionPanelSummary
													className={classes.title}
													expandIcon={<ExpandMoreIcon />}
													aria-controls={cat.id + '_' + faq.subid + '_content'}
													id={cat.id + '_' + faq.subid + '_header'}
												>
													<Typography variant="body2" className={classes.heading}>{faq.qus}</Typography>
													<Box display={{xs:'none', sm:'inline-block'}} className="counter"><Typography variant="subtitle2">{faq.views} views</Typography></Box>
												</ExpansionPanelSummary>
												<ExpansionPanelDetails className={classes.content}>
													<Typography variant="body2">
														{faq.ans}
													</Typography>
												</ExpansionPanelDetails>
											</ExpansionPanel>
										))
									}
								</div>
							))}
						</Box>
					</Box>
				</Container>
			</div>
		</div>
	);
}