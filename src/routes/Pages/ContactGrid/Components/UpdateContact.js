/**
 * Form Dialog
 */
/* eslint-disable */
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { Button, Box } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

//Actions
import { UPDATE_CONTACT } from "actions/Types";

function Updatecontact(props) {
	const [open,setOpen] = useState(false);
	const [name,setName] = useState('');
	const [designation,setDesignation] = useState('');
	const [address,setAddress] = useState('');
	const [isValidname,setIsValidname] = useState(false);
	const [isValiddesignation,setIsValiddesignation] = useState(false);
	const [isValidaddress,setIsValidaddress] = useState(false);

	const contactReducer = useSelector(state => state.ContactReducer);
	
	const dispatch = useDispatch();
	//Define function for close confirmation dialog box 
	const closeDialog = () => {
		setOpen(false);
		props.onCloseDialog(false);
	};

	const handleClose = () => {
		setOpen(false);
		props.onCloseDialog(true);
	};

	useEffect(() => {
		setOpen(true);
		getcontactData();
	},[])

	// get contact data
	const getcontactData = () => {
		setName(props.data.name);
		setDesignation(props.data.designation);
		setAddress(props.data.address);
	}
   /**
   * Method to check update validation
   */
	const onPressUpdate = () => {
		if (name !== '' && designation !== '' && address !== '') {
			updatecontact();
		}
		else {
			if (name === '') {
				setIsValidname(true);
			}
			if (designation === '') {
				setIsValiddesignation(true);
			}
			if (address === '') {
				setIsValidaddress(true);
			}
			if (name === '' && designation === '' && address === '') {
				setIsValidname(true);
				setIsValiddesignation(true);
				setIsValidaddress(true);
			}
		}
	}
	//update contact info
	const updatecontact = () => {
		let ID = props.data.id;
		let contactObject = {
			ID: props.data.id,
			name: name,
			designation: designation,
			address: address
		}
		dispatch({ type: UPDATE_CONTACT, payload: contactObject });
		props.onCloseDialog(true);
		setOpen(false);
	}


	return (
		<div>
			<Dialog
				className="contact-dialog"
				open={open}
				onClose={closeDialog}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Edit Contact</DialogTitle>
				<DialogContent>
					<div>
						<form autoComplete="off">
							<div className="row" style={{ "marginBottom": "20px" }}>
								<Box mb={2}>
									<FormControl
										fullWidth
										required
										error={isValidname}
										aria-describedby="firstsname-text"
										className="d-block"
										style={{ "marginBottom": "10px" }}
									>
										<InputLabel htmlFor="name">Name</InputLabel>
										<Input
											fullWidth
											id="name"
											type="text"
											value={name ? name : ''}
											onChange={(event) => { setName(event.target.value) }}
										/>
										{isValidname &&
											<FormHelperText id="firstsname-text">
												<i className="zmdi zmdi-alert-circle mr-1"></i>
												This field should not be empty.
                                 </FormHelperText>
										}
									</FormControl>
								</Box>
								<Box mb={2}>
									<FormControl
										fullWidth
										required
										error={isValiddesignation}
										aria-describedby="designation-text"
										className="d-block"
										style={{ "marginBottom": "10px" }}
									>
										<InputLabel htmlFor="designation">Contact</InputLabel>
										<Input
											fullWidth
											id="designation"
											type="text"
											value={designation ? designation : ''}
											onChange={(event) => { setDesignation(event.target.value) }}
										/>
										{isValiddesignation &&
											<FormHelperText id="designation-text">
												<i className="zmdi zmdi-alert-circle mr-1"></i>
												This field should not be empty.
                                 </FormHelperText>
										}
									</FormControl>
								</Box>
								<Box mb={2}>
									<FormControl
										fullWidth
										required
										error={isValidaddress}
										aria-describedby="address-text"
										className="d-block"
										style={{ "marginBottom": "10px" }}
									>
										<InputLabel htmlFor="address">Address</InputLabel>
										<Input
											fullWidth
											id="address"
											type="text"
											value={address ? address : ''}
											onChange={(event) => { setAddress(event.target.value) }}
										/>
										{isValidaddress &&
											<FormHelperText id="address-text">
												<i className="zmdi zmdi-alert-circle mr-1"></i>
												This field should not be empty.
                                 </FormHelperText>
										}
									</FormControl>
								</Box>
							</div>
							<div className="pt-25 text-right">
								<Box mb={2} width="100%" display="flex" justifyContent="flex-end" textAlign="center">
									<Box mx={2}>
										<Button variant="contained" color="secondary" onClick={handleClose} >
											Cancel
										</Button>
									</Box>
									<Button variant="contained" color="primary" onClick={() => onPressUpdate()}>
										Submit
									</Button>
								</Box>
							</div>
						</form>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}


export default Updatecontact;