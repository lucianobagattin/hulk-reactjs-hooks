/**
 * Page title component
 */
import React, { Fragment } from 'react';
import { Button, Grid, Typography, Box, Container, Link} from '@material-ui/core';

const PageTitleBarWithImage = (props) => {

	const { title, desc, buttonLink, buttonText } = props;

	return (
		<Box bgcolor="background.paper" className="title-banner" pt={2} pb={{ xs:2 , md: 4 }}>
			<Container>
				<Box px={{ xs: '12px', lg: 0 }}>
					<Grid container spacing={3} direction="row" justify="center" alignItems="center">
						<Grid item xs={12} sm={12} md={8}>
							<Box py={{ xs:4, sm:6, md:0 }} className="title-content" width={{ xs:'100%', sm:'75%' }} mx={{ xs:'auto', md:0 }} textAlign={{xs:'center', md:'left'}}>
								<Typography variant="h2">
									{title}
								</Typography>
								{desc ?
									<Box mb={3}>
										<p>
											{desc}
										</p>
									</Box>
									:
									''
								}
								{buttonText ?
									<Fragment>
										{buttonLink ?
											<Button variant="outlined" color="default" component={Link} to={buttonLink}>
												{buttonText}
											</Button>
											:
											<Button variant="outlined" color="default">
												{buttonText}
											</Button>
										}
									</Fragment>
									:
									''
								}
							</Box>
						</Grid>
						<Grid item xs={12} sm={12} md={4}>
							<Box className="title-image" display={{ xs:'none', md:'block' }} textAlign="right">
								<img className="img-fluid" alt="titlebar-thumb" width="300" src={require(`assets/Images/${props.image}`)}></img>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	)
}
export { PageTitleBarWithImage };