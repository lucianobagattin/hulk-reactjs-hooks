/**
 * Video Player
 */
import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Container } from '@material-ui/core';
import IntlMessages from 'util/IntlMessages';

//Components
import { SmallTitleBar, CustomCard } from 'components/GlobalComponents';


function VideoPlayer() {
		return (
			<div className="video-page-wrap">
				<SmallTitleBar
					title={<IntlMessages id="sidebar.videoPlayer" />}
					center={true}
				/>
				<div className="page-space">
					<Container>
						<Box px={{ xs: '12px', lg: 0 }}>
							<Box mb={4}>
								<CustomCard title={<IntlMessages id="component.youtubevideoplayer" />}>
									<Box pt={2}>
										<div className='player-wrapper'>
											<ReactPlayer
												url='https://www.youtube.com/watch?v=rbTVvpHF4cU'
												className='react-player'
												playing
												width='100%'
												height='500px'
											/>
										</div>
									</Box>
								</CustomCard>
							</Box>
							<Box mb={4}>
								<CustomCard title={<IntlMessages id="component.vimeovideoplayer" />}>
									<Box pt={2}>
										<div className='player-wrapper'>
											<ReactPlayer
												url='https://vimeo.com/243556536'
												className='react-player'
												playing
												width='100%'
												height='500px'
											/>
										</div>
									</Box>
								</CustomCard>
							</Box>
						</Box>
					</Container>
				</div>
			</div>
		);
}

export default VideoPlayer;