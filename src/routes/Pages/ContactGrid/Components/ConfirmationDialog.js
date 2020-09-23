/**
 * Confirmation dialog component
*/
/* eslint-disable */
import React,{useState} from 'react';
import {Button, Box,Typography, Dialog, DialogActions, DialogContent } from '@material-ui/core';

function ConfirmationDialog(props){
	const [open,setOpen] = useState(false);

	//Define function for open confirmation dialog box
	const openDialog = () => {
		setOpen(true);
	};

	//Define function for close confirmation dialog box 
	const closeDialog = () => {
		setOpen(false);
	};

	//Define function for close confirmation dialog box and callback for delete item 
	const onCloseDialog = (isTrue) => {
		setOpen(false);
		props.onConfirm(isTrue);
	};

	return (
		<Dialog
			open={open}
			onClose={closeDialog}
			aria-labelledby="responsive-dialog-title"
			className="confirmation-dialog"
		>
			<DialogContent>
				<Box textAlign="center" pt={2}>
					<Typography variant="h5">
						Are you sure you want to delete this contact permanently?
				</Typography>
				</Box>
			</DialogContent>
			<DialogActions className="px-20 pb-20 justify-content-center">
				<Box mb={2} width="100%" display="flex" justifyContent="center" p={1} textAlign="center">
					<Box mx={2}>
						<Button variant="contained" color="primary" onClick={() => onCloseDialog(true)}>
							Yes
           		</Button>
					</Box>
					<Button variant="contained" color="secondary" onClick={() => onCloseDialog(false)} >
						No
           </Button>
				</Box>
			</DialogActions>
		</Dialog>
	);
}

export default ConfirmationDialog;