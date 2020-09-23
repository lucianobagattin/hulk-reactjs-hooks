/**
 * Accounts settings
 */
import React,{useState} from 'react';
import { FormControl, TextField, Button, Box, Input, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'
// layouts
import { ContentLayout } from 'components/Layouts';

export default function AccountSettings() {

	const [values, setValues] = useState({
		password: 'john@123',
		showPassword: false,
	});
	const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};
	const handleMouseDownPassword = event => {
		event.preventDefault();
	};

	return (
		<div className="hk-account-settings">
			<Box mb={3}>
				<ContentLayout title="Username">
					<form>
						<FormControl fullWidth className="mb-2">
							<TextField
								id="update-username"
								placeholder="Enter username value here..."
								className=""
								type="input"
								value="examplesite.com/abigaildoe"
							/>
						</FormControl>
						<Box pt={2}>
							<FormControl>
								<Button type="submit" variant="outlined" className="primary-bg-btn" color="primary">Update</Button>
							</FormControl>
						</Box>
					</form>
				</ContentLayout>
			</Box>
			<Box mb={3}>
				<ContentLayout title="Password">
					<form>
						<FormControl fullWidth className="mb-2">
							<Input
								id="standard-adornment-password"
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								onChange={handleChange('password')}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
										>
											{values.showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
						<Box>
							<FormControl fullWidth className="mb-2">
								<TextField
									id="new-password"
									placeholder="New password"
									type="password"
									autoComplete="current-password"
								/>
							</FormControl>
						</Box>
						<Box pt={3}>
							<FormControl fullWidth className="mb-2">
								<TextField
									id="retype-password"
									placeholder="Retype password"
									type="password"
									autoComplete="current-password"
								/>
							</FormControl>
						</Box>
						<Box pt={2}>
							<FormControl>
								<Button type="submit" variant="outlined" className="primary-bg-btn" color="primary">Update</Button>
							</FormControl>
						</Box>
					</form>
				</ContentLayout>
			</Box>
			<Box >
				<ContentLayout title="Deactivate">
					<Box fontSize="body2.fontSize" color="text.primary">Deactivating your account will stop you to receive any mails and newsletters from Hulk. Your account will be reactivated next time you sign in.</Box>
					<Box pt={2}>
						<Button variant="outlined" className="primary-bg-btn" color="primary">Deactivate</Button>
					</Box>
				</ContentLayout>
			</Box>
		</div>
	)
}