/**
 * Widget Top Sellers Ecommerce Dashboard
 */

import React ,{useState} from 'react'
import { Box, Grid, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import IntlMessages from 'util/IntlMessages';

function BillingForm(props){
   const [billingInformation,setBillingInformation] = useState({
         firstName: '',
         lastName: '',
         streetName: '',
         buildingName: '',
         zipCode: '',
         city: ''
      })
   
   const onChangeBillingInformation = (key, value) => {
      setBillingInformation({
         ...billingInformation,
         [key]: value    
      })
   }
   const isFormValid = () => {
      const { firstName, lastName, streetName, buildingName, zipCode, city } = billingInformation;
      if (firstName !== '' && lastName !== '' && streetName !== '' && buildingName !== '' && zipCode !== '' && city !== '') {
         return true
      } else {
         return false
      }
   }

	/** main function */

	return (
      <Box pt={4}>            
         <Grid container spacing={3} direction="row">
            <Grid item xs={12} sm={6}>
               <TextField
                  id="firstName"
                  label="First Name"
                  style={{ marginBottom: 8 }}
                  placeholder="John"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                     shrink: true,
                  }}
                  onChange={(e) => onChangeBillingInformation('firstName', e.target.value)}
               />
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField
                  id="lastName"
                  label="Last Name"
                  style={{ marginBottom: 8 }}
                  placeholder="Doe"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                     shrink: true,
                  }}
                  onChange={(e) => onChangeBillingInformation('lastName', e.target.value)}
               />
            </Grid>
         </Grid>
         <Grid container spacing={3} direction="row">
            <Grid item xs={12} sm={6}>
               <TextField
                  id="streetName"
                  label="Street Name"
                  style={{ marginBottom: 8 }}
                  placeholder="Street No."
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                     shrink: true,
                  }}
                  onChange={(e) => onChangeBillingInformation('streetName', e.target.value)}
               />
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField
                  id="buildingName"
                  label="Building Name"
                  style={{ marginBottom: 8 }}
                  placeholder="Building Name"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                     shrink: true,
                  }}
                  onChange={(e) => onChangeBillingInformation('buildingName', e.target.value)}
               />
            </Grid>
         </Grid>
         <Grid container spacing={3} direction="row">
            <Grid item xs={12} sm={6}>
               <TextField
                  id="zipCode"
                  label="Zip Code"
                  style={{ marginBottom: 8 }}
                  placeholder="Landmark"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                     shrink: true,
                  }}
                  onChange={(e) => onChangeBillingInformation('zipCode', e.target.value)}
               />
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField
                  id="city"
                  label="City"
                  style={{ marginBottom: 8 }}
                  placeholder="San Diego"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                     shrink: true,
                  }}
                  onChange={(e) => onChangeBillingInformation('city', e.target.value)}
               />
            </Grid>
         </Grid>
         <Box mt={4}>
            <Button 
               disabled={!isFormValid()} 
               variant="contained" 
               onClick={props.onComplete} 
               color="primary"
            >
               <IntlMessages id="component.continueToPayment" />
            </Button>
         </Box>
      </Box>
	);
}

export default BillingForm;