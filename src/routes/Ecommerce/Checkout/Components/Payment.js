/**
 * payment tab component
 */
/* eslint-disable */
import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Grid, Button, Divider, Radio, Box } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import MaskedInput from "react-text-mask";
import Input from '@material-ui/core/Input';
import { Link, withRouter } from 'react-router-dom';
import Cards from 'react-credit-cards';

const TextMaskCustom = (props) => {
	const { inputRef, ...other } = props;
	return (
		<MaskedInput
			{...other}
			mask={[/\d/, /\d/, '/', /\d/, /\d/]}
		/>
	);

}
const TextCVC = (props) => {
	const { inputRef, ...other } = props;
	return (
		<MaskedInput
			{...other}
			mask={[/\d/, /\d/, /\d/, /\d/]}
		/>
	);
}

const expDate = (props) => {
	const { inputRef, ...other } = props;
	return (
		<MaskedInput
			{...other}
			mask={[/\d/, /\d/,'/', /\d/, /\d/]}
		/>
	);
}

const cardNo = (props) => {
	const { inputRef, ...other } = props;
	return (
		<MaskedInput
			{...other}
			mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
		/>
	);
}

function PaymentTabs(props){
	const [value,setValue] = useState(0);
	const [selected,setSelected] = useState('a');
	const [creditCardInfo, setCreditCardInfo] = useState({
			number: '',
			cvc: '',
			holderName: '',
			expiryDate: '',
			focused: ''
		});

	const onCreditCardValueChange = (key, e) => {
		setCreditCardInfo({
			...creditCardInfo,
			[key]: e.target.value
			}
		)
	}

	const onFocusTextFields = (key) => {
		setCreditCardInfo( {
				...creditCardInfo,
				focused: key
			}
		)
	}
	const { validatePayment } = props;		
	return (
		<div>
			<div className="">
				<Grid container spacing={0}>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<form noValidate autoComplete="off" className="my-20">
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12} md={6} lg={6}>
									<FormControl fullWidth>
										<InputLabel shrink>Card Number</InputLabel>
										<Input
											placeholder="0123 4567 8912 3456"
											value={creditCardInfo.number}
											onChange={(e) => onCreditCardValueChange('number', e)}											
											onFocus={() => onFocusTextFields('number')}
											inputComponent={cardNo}
										/>
									</FormControl>
								</Grid>

								<Grid item xs={12} sm={12} md={6} lg={6} >
									<FormControl fullWidth>
										<InputLabel shrink>Name On Card</InputLabel>
										<Input
											value={creditCardInfo.holderName}
											onChange={(e) => onCreditCardValueChange('holderName', e)}										
											onFocus={() => onFocusTextFields('name')}
											placeholder="John Doe"
										/>
									</FormControl>
								</Grid>
								<Grid item xs={12} sm={12} md={6} lg={6} >
									<FormControl fullWidth>
										<InputLabel shrink>Expiry Date</InputLabel>
										<Input
											value={creditCardInfo.expiryDate}
											onChange={(e) => onCreditCardValueChange('expiryDate', e)}
											onFocus={() => onFocusTextFields('expiry')}
											placeholder="MM YYYY"
											inputComponent={expDate}
										/>
									</FormControl>
								</Grid>

								<Grid item xs={12} sm={12} md={6} lg={6} >
									<FormControl fullWidth>
										<InputLabel shrink>CVC</InputLabel>
										<Input
											value={creditCardInfo.cvc ? creditCardInfo.cvc : ''}
											onChange={(e) => onCreditCardValueChange('cvc', e)}
											onFocus={() => onFocusTextFields('cvc')}
											placeholder="XXX"
											inputComponent={TextCVC}
										/>
									</FormControl>
								</Grid>
							</Grid>
							<Box my={3}>
								{window.location.pathname == '/app/pages/pricing/pricing-upgrade' || window.location.pathname == '/app/pages/stepper/vertical-stepper' ?										
									<Button variant="contained" color="primary" className="button btn-active mr-20" onClick={validatePayment}>
										submit
                         			</Button>
									:
									<Box display="flex" alignItems="center">
										<Box mx={2}>
											<Button variant="contained" color="default" className="button" onClick={props.onChangeInfo}>Back</Button>
										</Box>
										<Button variant="contained" color="primary" className="button btn-active mr-20" >
											submit
                            			</Button>
									</Box>
								}
							</Box>
						</form>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<div>
							<Cards
								number={creditCardInfo.number? creditCardInfo.number : ''}
								name={creditCardInfo.holderName ? creditCardInfo.holderName : ''}
								expiry={creditCardInfo.expiryDate ? creditCardInfo.expiryDate : ""}
								cvc={creditCardInfo.cvc ? creditCardInfo.cvc : ''}
								focused={creditCardInfo.focused ? creditCardInfo.focused : ''}
							/>
						</div>
					</Grid>
				</Grid>
			</div>
		</div >
	);
}

export default PaymentTabs;