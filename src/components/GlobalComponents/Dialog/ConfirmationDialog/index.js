/**
 * Confirmation dialog component
*/
/* eslint-disable */
import React, {useEffect,useState} from 'react';
import { Dialog, DialogContent, DialogActions, Button, Box, Typography } from '@material-ui/core';

function ConfirmationDialog(props) {
   const [open,setOpen] = useState(false);
   console.log(props);
   
   useEffect(() => {
      if(props.refresh){
         openDialog(); //children function of interest
      }      
   },[props.refresh]);

   //Define function for open confirmation dialog box
   const openDialog = () => {
      setOpen(true);
   };

   //Define function for close confirmation dialog box and callback for delete item 
   const closeDialog = (isTrue) => {
      setOpen(false);
      props.onConfirm(isTrue)
   };

   return (
      <Dialog
         open={open}
         ref={props.refconfirm}
         onClose={()=>closeDialog()}
         aria-labelledby="responsive-dialog-title"
      >
         <DialogContent>
				<Box textAlign="center" pt={2}>
					<Typography variant="h5">
						Are you sure you want to delete this product ?
					</Typography>
				</Box>
         </DialogContent>
         <DialogActions className="px-20 pb-20 justify-content-center">
            <Box mb={2} width="100%" display="flex" justifyContent="center" p={1} textAlign="center">
					<Box mr={2}>
						<Button color="primary" variant="contained" onClick={() => closeDialog(true)}>
							yes
						</Button>
					</Box>
					<Button color="secondary" variant="contained" onClick={() => closeDialog(false)} autoFocus>
						no
					</Button>
				</Box>
         </DialogActions>
      </Dialog >
   );
}

export { ConfirmationDialog };