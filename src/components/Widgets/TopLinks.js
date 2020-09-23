import React from 'react';
import MaterialTable from "material-table";
import { CustomCard } from 'components/GlobalComponents';
import { Scrollbars } from 'react-custom-scrollbars';

export default function WidgetSimpleTable(props) {
	const { title, columns, data, selection } = props;
	return (
		<div>
			<CustomCard title={title} showDivider={props.showDivider}>
			
					<MaterialTable
						style={{boxShadow:'none'}}
						columns={columns}
						data={data}
						options={{
							actionsColumnIndex: -1,
							sorting: true,
							search: false,
							paging: false,
							toolbar: false,
                     selection: selection,
						}}
					/>
			
			</CustomCard>
		</div>
	);
}