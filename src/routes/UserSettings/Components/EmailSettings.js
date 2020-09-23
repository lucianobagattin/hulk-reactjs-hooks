/**
 * Email Settings
*/
import React from 'react'
import { connect } from 'react-redux'
import { Button, Box } from '@material-ui/core'

// Components
import { CustomSwitch } from 'components/FormElements'
import { ContentLayout } from 'components/Layouts';

// Redux actions
import { emailSwitchChange } from 'actions'

class EmailSettings extends React.Component {

	// Function to handle switch section changes 
	onSwitchChange(type) {
		const { announcements, newsletterWeekly, promotionalMails, formDiscussion } = this.props
		let switchType = '';
		switch (type) {
			case "announcements":
				switchType = announcements;
				break;
			case "newsletterWeekly":
				switchType = newsletterWeekly;
				break;
			case "promotionalMails":
				switchType = promotionalMails;
				break;
			case "formDiscussion":
				switchType = formDiscussion;
				break;
			default:
				break;
		}
		this.props.emailSwitchChange(type, !switchType);
	}

	render() {
		const { announcements, newsletterWeekly, promotionalMails, formDiscussion } = this.props
		return (
			<div className="hk-email-settings">
				<Box my={2}>
					<ContentLayout title="Announcements">
						<CustomSwitch
							title="Features launching, Updates, Alerts and Notices etc."
							onChangeSwitch={() => this.onSwitchChange("announcements")}
							value={announcements}
							defaultChecked={announcements}
							id="announcements"
							name="announcements"
						/>
					</ContentLayout>
				</Box>
				<Box mb={2}>
					<ContentLayout title="Newsletter Weekly">
						<CustomSwitch
							title="Get our weekly newsletter by our experts and guests."
							onChangeSwitch={() => this.onSwitchChange("newsletterWeekly")}
							value={newsletterWeekly}
							defaultChecked={newsletterWeekly}
							id="newsletter-weekly"
							name="newsletter-weekly"
						/>
					</ContentLayout>
				</Box>
				<Box mb={2}>
					<ContentLayout title="Promotional Mails">
						<CustomSwitch
							title="Mail regarding sales, coupons and discount."
							onChangeSwitch={() => this.onSwitchChange("promotionalMails")}
							value={promotionalMails}
							defaultChecked={promotionalMails}
							id="promotional-mails"
							name="promotional-mails"
						/>
					</ContentLayout>
				</Box>
				<Box mb={2}>
					<ContentLayout title="Form Discussions">
						<CustomSwitch
							title="Get an email when your creating discussion get respond by others."
							onChangeSwitch={() => this.onSwitchChange("formDiscussion")}
							value={formDiscussion}
							defaultChecked={formDiscussion}
							id="form-discussion"
							name="form-discussion"
						/>
					</ContentLayout>
				</Box>
				<ContentLayout>
					<Button variant="outlined" className="primary-bg-btn" color="primary">Update</Button>
				</ContentLayout>
			</div>
		);
	}
}

const mapStateToProps = ({ UserSettingsReducer }) => {
	const { announcements, newsletterWeekly, promotionalMails, formDiscussion } = UserSettingsReducer
	return { announcements, newsletterWeekly, promotionalMails, formDiscussion }
}

export default connect(mapStateToProps, { emailSwitchChange })(EmailSettings);