/**
 * Page title component
 */
import React, { Fragment } from 'react';
import { makeStyles, Button, Grid, Typography, Box, Container, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		padding: '3.125rem 0'
	}
}));

const SmallTitleBar = (props) => {
	const classes = useStyles();

	return (
		<Box bgcolor="background.paper" className={`title-banner ${classes.root}`} >
			<Container>
				<Box px={{ xs: '12px', lg: 0 }}>
					<Grid container spacing={3} direction="row">
						{props.center ?
							<Fragment>
								<Grid item xs={12} sm={12}>
									<Box className="title-content" textAlign="center">
										<Typography variant="h4">
											{props.title}
										</Typography>
										{props.desc ?
											<Box pt={1} fontSize="body2.fontSize">
												{props.desc}
											</Box>
											:
											null
										}
									</Box>
								</Grid>
							</Fragment>
							:
							<Fragment>
								<Grid item xs={12} sm={7}>
									<Box className="title-content" textAlign={{xs:'center', sm:'left'}}>
										<Typography variant="h4">
											{props.title}
										</Typography>
										{props.desc ?
											<Box pt="5px" fontSize="body2.fontSize">
												{props.desc}
											</Box>
											:
											null
										}
									</Box>
								</Grid>
								<Grid item xs={12} sm={5}>
									{props.buttonText ?
										<Box className="btn-wrap" textAlign={{xs:'center', sm:'right'}}>
											<Button variant="outlined" component={Link} href={props.buttonLink}>
												<i className='material-icons' style={{ transform: 'rotate(180deg)', display: 'inline-block', paddingLeft: 10 }} >arrow_right_alt</i>
												{props.buttonText}
											</Button>
										</Box>
										:
										null
									}
								</Grid>
							</Fragment>
						}
					</Grid>
				</Box>
			</Container>
		</Box>
	)
}
export { SmallTitleBar };