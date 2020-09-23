	/**
 * Horizontal Timeline
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';

import IntlMessages from 'util/IntlMessages';

// components
import { SmallTitleBar } from 'components/GlobalComponents';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
	}
}));

function HorizontalTimeline() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
        <SmallTitleBar title={<IntlMessages id="sidebar.horizontalTimeline" />} center={true} />
			<div className="page-space">
				<Container>
					<Box px={{ xs: '12px', lg: 0 }}>
						<div className="horizontal-timeline text-center">
							<div className="horizontal-timeline-list">
								<div className="horizontal-timeline-list--item">
									<div className="horizontal-timeline-list--item-inner">
										<div className="horizontal-timeline--meta">
											<div>
											<div className="meta-year">1998</div>
												<div>June 27</div>
											</div>
										</div>
										<div className="horizontal-timeline--content">
											<Typography variant="h6">
												Lorem ispum is a dummy
										</Typography>
											<Typography variant="body2">
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti consequuntur ut eveniet ullam quos voluptatum autem odit! Doloremque commodi nostrum laudantium iste obcaecati quae qui ipsam deleniti, aliquid dolores.
										</Typography>
										</div>
									</div>
								</div>
								<div className="horizontal-timeline-list--item">
									<div className="horizontal-timeline-list--item-inner">
										<div className="horizontal-timeline--meta">
											<div>
												<div className="meta-year">2003</div>
												<div>Feb 15</div>
											</div>
										</div>
										<div className="horizontal-timeline--content">
											<Typography variant="h6">
												Consecur adipisic elit
										</Typography>
											<Typography variant="body2">
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti consequuntur ut eveniet ullam quos voluptatum autem odit! Doloremque commodi nostrum laudantium iste obcaecati quae qui ipsam deleniti, aliquid dolores.
										</Typography>
										</div>
									</div>
								</div>
								<div className="horizontal-timeline-list--item">
									<div className="horizontal-timeline-list--item-inner">
										<div className="horizontal-timeline--meta">
											<div>
											<div className="meta-year">2013</div>
												<div>Sep 20</div>
											</div>
										</div>
										<div className="horizontal-timeline--content">
											<Typography variant="h6">
												Obcaeca quae qui ipsam
										</Typography>
											<Typography variant="body2">
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti consequuntur ut eveniet ullam quos voluptatum autem odit! Doloremque commodi nostrum laudantium iste obcaecati quae qui ipsam deleniti, aliquid dolores.
										</Typography>
										</div>
									</div>
								</div>
								<div className="horizontal-timeline-list--item">
									<div className="horizontal-timeline-list--item-inner">
										<div className="horizontal-timeline--meta">
											<div>
												<div className="meta-year">2018</div>
												<div>Oct 05</div>
											</div>
										</div>
										<div className="horizontal-timeline--content">
											<Typography variant="h6">
												Placeat deleniti consequ
										</Typography>
											<Typography variant="body2">
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti consequuntur ut eveniet ullam quos voluptatum autem odit! Doloremque commodi nostrum laudantium iste obcaecati quae qui ipsam deleniti, aliquid dolores.
										</Typography>
										</div>
									</div>
								</div>

							</div>
						</div>
					</Box>
				</Container>
			</div>
		</div>
	);
}

export default HorizontalTimeline;