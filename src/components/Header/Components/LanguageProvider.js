/**
 * Language Provider Component
 */
import React ,{ Fragment,useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch,useSelector  } from 'react-redux';
import { Divider, Box, List, ListItem, ListSubheader, Typography, Popover, Button } from '@material-ui/core';

// Actions
import { setLanguage, rtlAction } from 'actions';

const useStyles = makeStyles(theme => ({
   root: {
      width: '100%',
      minWidth: 250,
      maxWidth: 250,
		padding: 0,
		backgroundColor:theme.palette.background.default,
     '& .MuiListSubheader-root':{
			backgroundColor:theme.palette.background.paper,
	  	},
      '& .top-dropdown-menu--item': {
			margin: 5,
			width:'calc(100% - 10px)',
			border:0,
			alignItems:'center',
			padding: '0.5rem',
			cursor:'pointer',
			backgroundColor:theme.palette.background.paper,
      }
   }
}));

function LanguageProvider() {
   const classes = useStyles();
   const [anchorEl,setAnchorEl] = useState(null);
	const settings = useSelector(state => state.settings);
   const dispatch = useDispatch();
   const { locale, languages } = settings;
   //Define function for open dropdown
   const handleClick = event => {
      setAnchorEl(event.currentTarget);
   };

   //Define function for close dropdown
   const handleClose = () => {
      setAnchorEl(null);
	};
	
   const onChangeLanguage = (lang) => {
      dispatch(setLanguage(lang));
      if (lang.locale === 'ar') {
         rtlLayoutHanlder(true);
      } else {
         rtlLayoutHanlder(false);
      }
	}
	
   const rtlLayoutHanlder = (isTrue) => {
      var root = document.getElementsByTagName('html')[0];
      if (isTrue) {
         root.setAttribute('dir', 'rtl');
         document.body.classList.add("rtl-layout");
      }
      else {
         root.setAttribute('dir', 'ltr');
         document.body.classList.remove("rtl-layout");
      }
      dispatch(rtlAction(isTrue));
	}
	
     
      const open = Boolean(anchorEl);

      return (
         <div>
				<Button aria-describedby={open ? 'notifications' : null} variant="contained" color="default"
               style={{ padding: '6px' }}
               onClick={handleClick}
				>
               <img alt="translate-icon" width="35" height="20" src={require(`assets/Images/flags/${locale.icon}`)} />
					<Box component="span" pl={1} className="material-icons" color="text.primary">arrow_drop_down</Box>
				</Button>
            <Popover
               id="notifications"
               open={open}
               anchorEl={anchorEl}
               onClose={handleClose}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
               }}
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
               }}
            >
               <Fragment>
                  <List className={`${classes.root} top-dropdown-menu`}
                     component="nav"
                     aria-labelledby="nested-list-subheader"
                     subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                           <div className="dropdown-header text-center">
                              <Typography variant="body2">Languages</Typography>
                           </div>
                        </ListSubheader>
                     }
                  >
                     <Divider></Divider>
                     {languages && languages.map((item, index) => (
                        <ListItem component="div" className="top-dropdown-menu--item" key={index} onClick={() => onChangeLanguage(item)}>
									<img alt="translate-icon" width="45" height="25" src={require(`assets/Images/flags/${item.icon}`)} />
                           <Box px={2}>{item.name}</Box>
                        </ListItem>
                     ))}  
                  </List>
               </Fragment>
            </Popover>
         </div>
      ); 
}



export default LanguageProvider;