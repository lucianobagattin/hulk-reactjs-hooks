import React, {useState} from 'react';
import { List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox } from '@material-ui/core';

export default function ProductList(props) {
	const { data } = props;
	const [checked, setChecked] = useState([1]);
	const handleToggle = value => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}
		setChecked(newChecked);
	};

	return (
		<List dense className="product-list-wrap">
			{data.map(value => {
				const labelId = `checkbox-list-secondary-label-${value}`;
				return (
					<ListItem key={value} button>
						<ListItemText id={labelId} primary={value} />
						<ListItemSecondaryAction>
							<Checkbox
								edge="end"
								color="primary"
								onChange={handleToggle(value)}
								checked={checked.indexOf(value) !== -1}	
								inputProps={{ 'aria-labelledby': labelId }}
							/>
						</ListItemSecondaryAction>
					</ListItem>
				);
			})}
		</List>
  );
}