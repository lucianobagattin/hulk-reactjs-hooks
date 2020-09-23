/**
 * Vertical Timeline
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography, Button } from '@material-ui/core';
import IntlMessages from 'util/IntlMessages';
// components
import { SmallTitleBar } from 'components/GlobalComponents';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
	}
}));

function VerticalTimeline() {
	const classes = useStyles();
		return (
			<div className={classes.root}>
            <SmallTitleBar title={<IntlMessages id="sidebar.verticalTimeline" />} center={true} />
				<div className="page-space">
					<Container>
						<Box className="v-timeline-wrap">
							<div className="v-timeline">
								<div className="v-timeline-icon">
									<i className="material-icons">
										calendar_today
										</i>
									<span className="v-timeline-date">June 03</span>
								</div>
								<div className="v-timeline-list">
									<div className="v-timeline-meta">

										<div className="v-timeline-time">
											08:31 AM
									</div>
									</div>
									<div className="v-timeline-block">
										<div className="v-timeline-content">
											<Box mb={1}>
												<Typography variant="h6" className="v-timeline-title">Perspiciatis Unde Omnis Iste Natus </Typography>
											</Box>
											<Typography> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam </Typography>
										</div>
										<div className="v-timeline-action">
											<Button variant="outlined" color="primary"> <i className="material-icons">
												edit
</i>
												Edit
</Button>
											<Button variant="outlined" color="primary"> <i className="material-icons">
												remove_red_eye
</i>
												View
</Button>
										</div>
									</div>
								</div>
							</div>
							<div className="v-timeline">
								<div className="v-timeline-icon">
									<i className="material-icons">
										calendar_today
										</i>
									<span className="v-timeline-date">June 03</span>
								</div>
								<div className="v-timeline-list">
									<div className="v-timeline-meta">

										<div className="v-timeline-time">
											08:31 AM
									</div>
									</div>
									<div className="v-timeline-block">
										<div className="v-timeline-content">
											<Box mb={1}>
												<Typography variant="h6" className="v-timeline-title">Perspiciatis Unde Omnis Iste Natus </Typography>
											</Box>
											<Typography> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam </Typography>
										</div>
										<div className="v-timeline-action">
											<Button variant="outlined" color="primary"> <i className="material-icons">
												edit
</i>
												Edit
</Button>
											<Button variant="outlined" color="primary"> <i className="material-icons">
												remove_red_eye
</i>
												View
</Button>
										</div>
									</div>
								</div>
							</div>
							<div className="v-timeline">
								<div className="v-timeline-icon">
									<i className="material-icons">
										calendar_today
										</i>
									<span className="v-timeline-date">June 03</span>
								</div>
								<div className="v-timeline-list">
									<div className="v-timeline-meta">

										<div className="v-timeline-time">
											08:31 AM
									</div>
									</div>
									<div className="v-timeline-block">
										<div className="v-timeline-content">
											<Box mb={1}>
												<Typography variant="h6" className="v-timeline-title">Perspiciatis Unde Omnis Iste Natus </Typography>
											</Box>
											<Typography> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam </Typography>
										</div>
										<div className="v-timeline-action">
											<Button variant="outlined" color="primary">
												<i className="material-icons">
													edit
												</i>
												Edit
											</Button>
											<Button variant="outlined" color="primary">
												<i className="material-icons">
													remove_red_eye
												</i>
												View
											</Button>
										</div>
									</div>
								</div>
							</div>
							<div className="v-timeline">
								<div className="v-timeline-icon">
									<i className="material-icons">
										calendar_today
										</i>
									<span className="v-timeline-date">June 03</span>
								</div>
								<div className="v-timeline-list">
									<div className="v-timeline-meta">

										<div className="v-timeline-time">
											08:31 AM
									</div>
									</div>
									<div className="v-timeline-block">
										<div className="v-timeline-content">
											<Box mb={1}>
												<Typography variant="h6" className="v-timeline-title">Perspiciatis Unde Omnis Iste Natus </Typography>
											</Box>
											<Typography> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam </Typography>
										</div>
										<div className="v-timeline-action">
											<Button variant="outlined" color="primary"> <i className="material-icons">
												edit
</i>
												Edit
</Button>
											<Button variant="outlined" color="primary"> <i className="material-icons">
												remove_red_eye
</i>
												View
</Button>
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

export default VerticalTimeline;