/**
 * Custom switch component
 */
import React from 'react';
import { Switch, Tooltip, Box, Typography } from '@material-ui/core';

const CustomSwitch = ({ onChangeSwitch, value, name, title, wrapperClass, defaultChecked, tooltip }) => {
	return (
		<Box display="flex" justifyContent="space-between" alignItems="start" className={wrapperClass}>
			<Box>
				<Typography variant="body2">{title}</Typography>
				{tooltip && tooltip !== '' &&
					<Tooltip title={tooltip} placement="top">
						<i className="material-icons ml-3 cursor-pointer tooltip-icon">help_outline</i>
					</Tooltip>
				}
			</Box>
			<Box>
				<Switch
					size="small"
					checked={defaultChecked}
					onChange={(e) => onChangeSwitch(e)}
					value={value}
					color="primary"
					name={name}
				/>
			</Box>
		</Box>
	)
}
export { CustomSwitch };