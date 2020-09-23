import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import { Dialog, Box} from '@material-ui/core';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} className="h-stepper-video-pop">
    	<>
      	<iframe title="popupvideo" width="600" height="385" src={props.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  	const [open, setOpen] = useState(false);
  	const [selectedValue, setSelectedValue] = useState(emails[1]);

  	const handleClickOpen = () => {
    	setOpen(true);
  	};

  	const handleClose = (value) => {
  		props.onClose();
   	setOpen(false);
    	setSelectedValue(value);
  	};

	return (
		<div>
			<Box color="primary.main" onClick={handleClickOpen} style={{cursor:'pointer'}}>
				<i className="fa-3x fas fa-play"></i>
			</Box>
			<SimpleDialog link={props.videoLink} selectedValue={selectedValue} open={open} onClose={handleClose} />
		</div>
	);
}