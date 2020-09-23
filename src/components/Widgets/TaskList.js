/*
 * Task List Widget
 */
import React, { useRef, Fragment ,useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, Box, FormControlLabel, List, ListItem, Snackbar, Avatar, IconButton, Button, Dialog,
DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import Dragula from 'react-dragula';
import { Scrollbars } from 'react-custom-scrollbars';
// Data
import TaskListData from 'assets/Data/Tasks.json';

const useStyles = makeStyles(theme => ({
	checkRoot: {
		marginRight: 0,
		marginLeft: -10,
	},
	checkBox: {
		fontSize: '1.3rem',
	},
	drag: {
		width: 25,
		paddingLeft: 3,
		textAlign:'center',
		fontSize: 16,
		opacity: 0,
		transition: 'all 0.3s ease-out',
		marginLeft: -18,
	},
	navList: {
		borderBottom: `1px Solid ${theme.palette.divider}`,
		transition: 'all 0.3s ease-out',
		'& .content-wrap':{
			position:'relative',
			width:'calc(100% - 40px)',
		},
		'& .content-text':{
			width:'calc(100% - 130px)',
			
		},
		'& .task-meta':{
			width:130,
			
		},
		'& .task-action':{
			position:'absolute',
			right:0,
			opacity:0
		},
		'&:hover': {
			'& .icon-wrap': {
				opacity: 1
			},
			'& .task-meta':{
				opacity:0
			},
			'& .task-action':{
				opacity:1,
			},
		}
	},
	padY: {
		paddingTop: 10,
		paddingBottom: 0,
	},
	avatr: {
		fontSize: 15,
		width: 36,
		height: 36,
	},
	taskMeta:{
		transition: 'all 0.3s ease-in',
	},
}));

function TaskListWidget(props){
	const classes = useStyles();
	const [toDoListData,setToDoListData] = useState(TaskListData);
	const [snackbar,setSnackbar] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');
	const [dialog,setDialog] = useState(false);
	const [updateBtn,setUpdateBtn] = useState(false);
	const taskListScroll = useRef();
	const [newTask, setNewTask] = useState({
			id: TaskListData.length + 1,
			taskName: "",
			deadline: new Date(),
			completed: false,
			assignedTo: "",
			deadlineColor: "primary.main",
			avatarBG: "bg-success",
		});

	const dragulaDecorator = (componentBackingInstance) => {
		if (componentBackingInstance) {
			let options = {};
			Dragula([componentBackingInstance], options);
		}
	}

	// on change task status
	const handleChange = (event, data) => {
		let selectedTodoIndex = toDoListData.indexOf(data);
		let updateData = toDoListData.map((o) => {
		    if (o === data) return {...data, completed: event.target.checked}
		    return o;
		  });
		if (updateData[selectedTodoIndex].completed === true) {
			setTimeout(() => {
				setToDoListData(updateData);
				setSnackbar(true);
				setSnackbarMessage('Task Completed');
			}, 1500);
		} else {
			setTimeout(() => {
				setToDoListData(updateData);
			}, 1500);
		}
	}

	const getfirstcharacters = (str) => {
		var matches = str.match(/\b(\w)/g);
		return matches.join('');
	}

	const addNewTask = () => {
		if (newTask.taskName !== '' && newTask.deadline !== '') {
			setTimeout(() => {
				toDoListData.push(newTask)
				setSnackbar(true);
				setSnackbarMessage('New Task Added');
				taskListScroll.current.scrollToBottom();
			}, 1500)
		}
		setDialog(false);
	}

	const editTask = (data) => {
		setUpdateBtn(true);
		setNewTask({
				id: data.id,
				taskName: data.taskName,
				deadline: data.deadline,
				completed: data.completed,
				assignedTo: data.assignedTo,
				deadlineColor: data.deadlineColor,
				avatarBG: data.avatarBG
		})
		setDialog(true);
	};

	const updateTask = () => {
		let ddd = toDoListData.filter((data) => {
			return newTask.id === data.id
		})
		let selectedTodoIndex = toDoListData.indexOf(ddd[0]);
		setTimeout(() => {
			toDoListData.splice(selectedTodoIndex, 1, newTask)
			setSnackbar(true);
			setSnackbarMessage('Task Updated Successfully');
		}, 500)
		setDialog(false);
	}

	const deleteTask = (data) => {
		let selectedTodoIndex = toDoListData.indexOf(data);
		setTimeout(() => {
			toDoListData.splice(selectedTodoIndex, 1);
			setSnackbar(true);
			setSnackbarMessage('Task Deleted Successfully');
		}, 1000)
	}

	const addNew = () => {
		setDialog(true);
		setUpdateBtn(false);
		setNewTask({
				taskName: "",
				assignedTo:"",
				deadline: new Date()
			}
		);
	}
	
	return (
		<Box position="relative" className="task-list-wrap">
			<Box position="absolute" className="add-new-btn" top={{ xs:'-40px', sm:'-48px' }} right="0">
				<Button className={`${classes.addBtn} primary-bg-btn`} variant="outlined" color="primary" onClick={() => addNew()}>
					Add New
				</Button>
			</Box>
			<Scrollbars
				className="rct-scroll"
				autoHide
				style={{ height: "468px" }}
				ref={taskListScroll}
			>
				<List component="nav" className={clsx(`${classes.padY} container todo-list-ul`)} ref={dragulaDecorator}>
					{toDoListData.length > 0 ? 
						<Fragment>
							{
								toDoListData.slice(-props.startIndex, toDoListData.length).map((data, index) => (
									<ListItem key={index} disableRipple className={classes.navList} button>
										<div className="w-100">
											<Box display="flex" justifyContent="flex-start" alignItems="center">
												<Box width="40px" className="checkbox-wrap" display="flex" justifyContent="flex-start" alignItems="center">
													<Box className={clsx(`${classes.drag} icon-wrap fas fa-grip-vertical`)} component="span" display="inline-block" color="text.disabled"></Box>
													<FormControlLabel
														className={classes.checkRoot}
														control={
															<Checkbox
																className={classes.checkBox}
																icon={<Box component="span" className="far fa-check-circle" />}
																checkedIcon={<Box component="span" className="fas fa-check-circle" />}
																checked={data.completed}
																color="primary"
																onChange={(event) => handleChange(event, data)}
															/>
														}
													/>
												</Box>
												<Box className="content-wrap" display={{ xs:'block', sm:'flex' }} justifyContent="space-between" alignItems="center">
													<Box className="content-text" >{data.taskName}</Box>
													<Box className="task-meta" pl={2} display="flex" justifyContent="flex-end" alignItems="center">
														{data.deadline && <Box color={data.deadlineColor} pr={1} fontSize="body1.fontSize">{data.deadline}</Box>}
														<Avatar className={clsx(`${classes.avatr} ${data.avatarBG}`)}>{getfirstcharacters(data.assignedTo)}</Avatar>
													</Box>
													<Box className="task-action" display="flex" justifyContent="flex-end" alignItems="center">
														<IconButton size="small" onClick={() => editTask(data)}>
															<Box component="span" fontSize={{ xs:14, sm:20 }} color="primary.main" className="material-icons">edit</Box>
														</IconButton>
														<IconButton size="small" onClick={() => deleteTask(data)}>
															<Box component="span" fontSize={{ xs:14, sm:20 }} color="secondary.main" className="material-icons-outlined">delete</Box>
														</IconButton>
													</Box>
												</Box>
											</Box>
										</div>
									</ListItem>
								))
							}
						</Fragment>
						:
						<Box fontSize="h5.fontSize">
							List is empty
						</Box>
					}

				</List>
			</Scrollbars>	
			<Snackbar
				className="snackbar-wrap"
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				open={snackbar}
				onClose={() => setSnackbar(false)}
				autoHideDuration={2000}
				snackbarcontentprops={{
					'aria-describedby': 'message-id',
				}}
				message={<span id="message-id">{snackbarMessage}</span>}
			/>
			<Dialog
				open={dialog}
				onClose={() => setDialog(false)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle className="dialog-header" id="alert-dialog-title">{"Add New Task"}</DialogTitle>
				<DialogContent className="dialog-content">
					<TextField
						margin="dense"
						id="name"
						onChange={(e) => setNewTask({ ...newTask, taskName: e.target.value } )}
						label="Task Title"
						type="text"
						fullWidth
						value={newTask.taskName} className="mb-1"
					/>
					<TextField
						margin="dense"
						id="name"
						onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value } )}
						label="Assign to"
						type="text"
						fullWidth
						value={newTask.assignedTo} className="mb-1"
					/>

					<TextField
						id="date"
						label="Schedule Date"
						type="date"
						InputLabelProps={{
							shrink: true
						}}
						fullWidth
						value={newTask.deadline}
						onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
					/>
				</DialogContent>
				<DialogActions className="dialog-footer">
					<Button onClick={() => setDialog(false)} variant="contained" color="secondary">
						Cancel
					</Button>
					{
						updateBtn ?
							<Button onClick={() => updateTask()} variant="outlined" className="primary-bg-btn" color="primary" autoFocus>
								Update
						</Button>
							:
							<Button onClick={() => addNewTask()} variant="outlined" className="primary-bg-btn" color="primary" autoFocus>
								Add
						</Button>
					}
				</DialogActions>
			</Dialog>
		</Box>
	)
}
export default TaskListWidget;