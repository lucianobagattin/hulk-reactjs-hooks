/**
 * product Detail Page
 */
import React from 'react';
import { Typography, Box, Icon, Link } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function ProductReviews(){
	return (
		<div className="product-detail-page">
			<ExpansionPanel className="product-accordion">
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography variant="body2">Reviews and Rating (2.1k)</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Box width={1}>
						<Box display="flex" className="ratingHeader" width={1} alignItems="center" mb={1}>
							<div>
								<Typography variant="h2">
									4.8
                    </Typography>
							</div>
							<div>
								<div className="rating">
									<Icon>star</Icon><Icon>star</Icon><Icon>star</Icon><Icon>star</Icon><Icon>star_half</Icon>
								</div>
								<span className="reviewNum font-sm">(2.1k Reviews)</span>
							</div>
						</Box>
						<div>
							<Link href="#" onClick={event => event.preventDefault()}>Write a Review</Link>
						</div>
						<ul className="reviewList">
							<li>
								<span className="reviewMainComment text-over">Its Perfect to wear</span>
								<div className="title-review">
									<div className="rating">
										<Icon>star</Icon><Icon>star</Icon><Icon>star</Icon><Icon>star</Icon><Icon>star</Icon>
									</div>
									<div>Tony Stark</div>
									<div className="text-muted font-sm">22 Dec 2018</div>
								</div>
								<div>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
								</div>
							</li>
							<li>
								<span className="reviewMainComment text-over">Its Perfect to wear</span>
								<div className="title-review">
									<div className="rating">
										<Icon>star</Icon><Icon>star</Icon><Icon>star</Icon><Icon>star</Icon><Icon>star</Icon>
									</div>
									<div>Tony Stark</div>
									<div className="text-muted font-sm">22 Dec 2018</div>
								</div>
								<div>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
								</div>
							</li>
							<li>
								<span className="reviewMainComment text-over">Its Perfect to wear</span>
								<div className="title-review">
									<div className="rating">
										<Icon>star</Icon><Icon>star</Icon><Icon>star</Icon><Icon>star</Icon><Icon>star</Icon>
									</div>
									<div>Tony Stark</div>
									<div className="text-muted font-sm">22 Dec 2018</div>
								</div>
								<div>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
								</div>
							</li>
						</ul>
					</Box>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	)
}

export default ProductReviews;