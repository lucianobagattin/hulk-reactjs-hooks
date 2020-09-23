/**
 * Checkout
 */
import React from 'react'
import { Box, Container } from '@material-ui/core'
import { SmallTitleBar } from 'components/GlobalComponents';
import IntlMessages from 'util/IntlMessages';

//Components
import CheckoutForm from './Components/CheckoutForm';
function Checkout(){
	return (
		<div className="checkout-wrap">
			<Box className="white-btn-color">
				<SmallTitleBar
					title={<IntlMessages id="sidebar.checkout" />}
					buttonText={<IntlMessages id="component.backToProducts" />}
					buttonLink="/app/ecommerce/shop"
				/>
			</Box>
			<div className="page-space">
				<Container>
					<Box px={{ xs: "12px", lg: 0 }}>
						<CheckoutForm />
					</Box>
				</Container>
			</div>
		</div>
	);
}

export default Checkout;