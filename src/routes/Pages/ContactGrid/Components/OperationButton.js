/**
 * Operational Menu
*/
import React,{useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function OperationButton(props) {

   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);

   const handleClick = event => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
	};
	
   const onDelete = (event) => {
		setAnchorEl(null);
      props.parentMethod();
   }
   const onEdit = () => {
      setAnchorEl(null);
      props.parentEditMethod();
   }
   return (
      <div>
         <IconButton
				size="small"
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
         >
            <MoreHorizIcon />
         </IconButton>
         <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
         >
            <MenuItem key={'Edit'} onClick={() => onEdit(props.data)}>
               {'Edit'}
            </MenuItem>
            <MenuItem key={'Delete'} onClick={() => onDelete(props.data)}>
               {'Delete'}
            </MenuItem>
         </Menu>
      </div>
   );
}