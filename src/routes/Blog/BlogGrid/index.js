/**
 * Blog Grid Page
*/
import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, Box, Card, CardContent, Fab, Icon, Container, Avatar } from '@material-ui/core';
import IntlMessages from 'util/IntlMessages';

// Data
import BlogData from 'assets/Data/BlogData';

// Component
import { SmallTitleBar } from 'components/GlobalComponents';
const useStyles = makeStyles(theme => ({
	button: {
		fontSize:'1.125rem',
	},
	thumbWrap:{
		lineHeight:1,
		position: 'relative',
		'& img':{
			height: 250,
			objectFit: 'cover',
			width: '100%',
		}
	},
	overlayContent: {
		position: 'absolute',
		top: 19,
		right: 16,
	},
	avatar:{
		width: 45,
		height: 45,
	},
	icon:{
		color: theme.palette.common.white,
		transform:'rotateY(180deg)',
	}
}));

function BlogGrid() {
	const classes = useStyles();
  	const [allBlogs] = useState(BlogData.data);
  	const [initialNo, setinitialNo] = useState(9);
	const loadMore = event => {
    	setinitialNo(initialNo + 3);
  	};
	return (
		<div className="blog-grid-wrap">
			<Box>
            <SmallTitleBar title={<IntlMessages id="sidebar.blogGrid" />} center={true} />
			</Box>
			<Container maxWidth="lg">
				<Box px={{ xs:'12px', lg:0 }} className="page-space">
					<Grid container spacing={3}>
						{allBlogs && allBlogs.map((blog, i) => (
							<Fragment key={i}>
								{i < initialNo &&
									<Grid item xs={12} sm={6} md={4} color="primary.main">
										<Card className="blog-grid-item">
											<Box className={classes.thumbWrap}>
												<Link to={`/app/blog/blog-detail/${blog.id}`}>
													<img className="img-fluid" alt="img" height="250" src={require(`assets/Images/${blog.image}`)} />
												</Link>
												<Box className={`icon-wrap ${classes.overlayContent}`}>
													<Fab color="primary" component={Link} size="small" to={`/app/blog/blog-detail/${blog.id}`}>
														<Icon className={classes.icon}>reply</Icon>
													</Fab>
												</Box>
											</Box>
											<Box>
												<CardContent>
													<Box mb={1} component={Link} to={`/app/blog/blog-detail/${blog.id}`} fontSize="h6.fontSize" fontWeight="500">{blog.title}</Box>
													<Typography variant="body2">{blog.desc.length > 180 ? blog.desc.substring(0, 80) + '...' : blog.desc}</Typography>
													<Box pt={2} display="flex" alignItems="center">
														<Box>
															<Avatar className={classes.avatar} alt="user-thumb" src={require(`assets/Images/avatars/${blog.authorImage}`)} />
														</Box>
														<Box px={2}>
															<Typography variant="subtitle2" color="textPrimary">By {blog.author}</Typography>
															<Typography variant="subtitle2" color="textSecondary">Posted on : {blog.postOn}</Typography>
														</Box>
													</Box>
												</CardContent>
											</Box>
										</Card>
									</Grid>
								}
							</Fragment>
						))
						}
					</Grid>
					<Box textAlign="center" py={3}>
						{initialNo === allBlogs.length ?
							<Button disabled className={classes.button}>
								<Box component="span" pr='5px' className="material-icons">autorenew</Box>
								Load More
							</Button>
							: 
							<Button className={classes.button} color="primary" onClick={loadMore}>
								<Box component="span" pr='5px' className="material-icons">autorenew</Box>
								<IntlMessages id="component.loadmore" />
							</Button>
						}
					</Box>
				</Box>
			</Container>
		</div>
	);
}
export default BlogGrid;