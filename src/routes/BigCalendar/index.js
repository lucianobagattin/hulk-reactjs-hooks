/**
 * Calendar
*/
import React from 'react';
import { Box } from '@material-ui/core';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

// Components
import { CustomCard } from 'components/GlobalComponents';
import { Scrollbars } from 'react-custom-scrollbars';

// Events
import events from './events';
const localizer = momentLocalizer(moment);
function BigCalendar() {
	return (
		<div className="hk-calendar-wrap">
			<Scrollbars
					className="rct-scroll"
					autoHide
					style={{ height: "calc(100vh - 64px)" }}
				>
				<Box p={3}>
					<CustomCard>
						<Calendar
							events={events}
                     startAccessor="start"
                     endAccessor="end"
                     defaultDate={moment().toDate()}
                     localizer={localizer}
						/>
					</CustomCard>
				</Box>
			</Scrollbars>
		</div>
	);
}

export default BigCalendar;