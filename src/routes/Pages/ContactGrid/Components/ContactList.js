import React, { Fragment,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Typography } from '@material-ui/core';
import OperationButton from './OperationButton';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
	thumb: {
		width: 100,
		height: 100,
		marginBottom: 10,
	},
	paper:{
		backgroundColor:"transparent",
		boxShadow:'none',
	},
	table:{
		'& tr':{
			marginBottom:10,
			borderRadius:4,
			height:'auto',
			boxShadow:'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
		},
		'& .MuiTableHead-root':{
			backgroundColor:"transparent",
		},
		'& .MuiTableCell-head, .MuiTableCell-body':{
			height:'auto',
			padding:'12px 16px',
			lineHeight:1,
			borderBottom: 0,
			backgroundColor:theme.palette.common.white,
		}
	}
}));

export default function ContactList(props) {
	const [checked, setChecked] = useState(false);

	const handleChange = event => {
		setChecked(event.target.checked);
	};

	const classes = useStyles();
	const { contacts } = props;
	
	return (
		<Fragment>
			<TableContainer component={Paper} className={`contact-list-wrap ${classes.paper}`}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>
								<Checkbox
									checked={checked}
									onChange={handleChange}
									value="primary"
									inputProps={{ 'aria-label': 'primary checkbox' }}
								/>
							</TableCell>
							<TableCell>Name</TableCell>
							<TableCell align="left">Email</TableCell>
							<TableCell align="left">Designation</TableCell>
							<TableCell align="left">Address</TableCell>
							<TableCell align="left">Phone No.</TableCell>
							<TableCell align="left">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{contacts && contacts.map((contact, index) => (
							<TableRow key={index}>
								<TableCell>
									<Checkbox
										checked={checked}
										onChange={handleChange}
										value="primary"
										inputProps={{ 'aria-label': 'primary checkbox' }}
									/>
								</TableCell>
								<TableCell align="left">
									<Box display="inline-flex" alignItems="center">
										<img alt="Remy Sharp" style={{ borderRadius: 4 }} height={48} width={48} src={require(`assets/Images/avatars/${contact.image}`)} />
										<Box px="12px"><Typography variant="body2" color="primary">{contact.name}</Typography></Box>
									</Box>
								</TableCell>
								<TableCell align="left">{contact.email}</TableCell>
								<TableCell align="left">{contact.designation}</TableCell>
								<TableCell align="left">{contact.address}</TableCell>
								<TableCell align="left">{contact.phoneNo}</TableCell>
								<TableCell align="left">
									<OperationButton parentEditMethod={() => props.parentEditMethod(contact)} 
									parentMethod={() => props.parentMethod(contact)} 
									data={contact} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Fragment>
	);
}