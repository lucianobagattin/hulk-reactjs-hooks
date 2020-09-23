/**
 * Nav List Item
 */
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
   List,
   ListItem,
	Collapse,
	Icon,
	ListItemText,
	Box
} from '@material-ui/core';

// Intl messages
import IntlMessages from 'util/IntlMessages';

const useStyles = makeStyles(theme => ({
	textWhite:{
		color:`${theme.palette.common.white} !important`,
		'& span ,& a': {
			color:theme.palette.common.white,
			fontSize:'0.9375rem '
		}
	},
	ListItem:{
		borderBottom: '1px solid #404854', 
		paddingTop:14, 
		paddingBottom:14,
		'&:hover':{
			backgroundColor:'#515864'
		},
		'@media (max-width:1560px)': {
			paddingTop:10, 
			paddingBottom:10,
		},
	},
	desc:{
		color:'#969fa4',
		'& span':{
			fontSize:'0.75rem',
			color:'#969fa4',
		}
	},
	iconWrap:{
		fontFamily: 'Material Icons Outlined',
		fontSize:'20px !important'
	},
	font9:{
		fontFamily: 'Material Icons Outlined',
		fontSize:'9px !important'
	},
	truncate:{
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
	},
	menuOpen:{
		backgroundColor:'#19222b',
		borderBottom: '0 !important',
		'&:hover':{
			backgroundColor:'#19222b',
		},
		'& .sub-menu':{
			padding:'0 0 10px',
			'& div.MuiListItem-root':{
				padding: '2px 10px 2px 36px',
    			border: 0,
			},
			'& li.MuiListItem-root':{
				padding: 0,
				'& a':{
					padding: '5px 10px 5px 36px',
				}
			},
			'& .active':{
				backgroundColor:'#515864',
			},
			'& .sub-menu':{
				'& .MuiListItem-root':{
					padding: 0,
					'& a':{
						padding: '4px 16px 4px 56px',
					}
				}
			}
		}
	},
	textLink:{
		borderBottom: '1px solid #404854', 
		padding:0,
		'& a':{
			padding:'14px 16px',
			display:'block',
			'@media (max-width:1560px)': {
				padding:'10px 16px',
			},
		}
	},
	linkActive:{
		backgroundColor:'#19222b',
		'&:hover':{
			backgroundColor:'#19222b',
		},
	},
	w100:{
		width:'100%',
	},
	flexCenter:{
		display:'flex',
		alignItems:'center',
		justifyContent:'start',
		width:'100%',
	},
}));

function NavListItem(props) {
	const classes = useStyles();

   const toggleAndCloseSidebar = () => {
		props.toggleMenu()
		if(props.closeSidebar){
			props.closeSidebar()
		}
   }
   
   const { menu, toggleMenu, toggleFourthMenu, toggleThirdMenu, toggleThirdMenuAndCloseSidebar } = props;
	// Child Route is not null and full page menu is false
	if (menu.child_routes !== null && menu.fullPageMenu === false) {
      return (
         <li>
            <ListItem
					disableRipple
               button
               component="div"
					onClick={() => toggleMenu()}
					className={clsx(classes.textWhite, classes.ListItem ,  {
						[`active-menu ${classes.menuOpen}`]: menu.isMenuOpen,
					},"list-item")}
            >
               <div className={classes.w100}>
						{/* Level 1 menu title */}
						<div className={classes.flexCenter}>
							<Box component="span" className={classes.iconWrap}>{menu.icon}</Box>
							<ListItemText primary={ <IntlMessages id={menu.menu_title}/> } style={{ paddingLeft: 12 }}/>
							{menu.isMenuOpen ? 
								<Icon style={{ fontSize: 20, width:25 }}>arrow_drop_up</Icon>
								: 
								<Icon style={{ fontSize: 20, width:25 }}>arrow_drop_down</Icon>
							}	
                  </div>
						{/* Below is the description  for level 1 menu */}
						<>
							{menu.desc ?	
								<Fragment>
									{menu.content.length !== 0 ? 
										<>
											{menu.isMenuOpen ? 
												null
												:
												<Box fontSize="body1.fontSize" className={`desc-wrap ${classes.truncate} ${classes.desc}`} display="block">
													{menu.content}
												</Box>
											}
										</>
										: 
										<>
											{menu.isMenuOpen ? 
												null
												: 
												<Box fontSize="body1.fontSize" className={`desc-wrap ${classes.truncate} ${classes.desc}`} display="block">
													{menu.child_routes.map((item, index) => {
														return (
															<Fragment key={index}>
                                                <IntlMessages id={item.menu_title} />
															</Fragment>
														)
													}).reduce((prev, curr) => [prev, ', ', curr])}
												</Box>
											}
										</>
									}
								</Fragment>
								:
								null
							}
						</>
               </div>
            </ListItem>
				{/* This is the first collapse */}
				<Collapse 
					in={menu.isMenuOpen} 
					timeout="auto" 
					unmountOnExit 
					className={clsx(classes.textWhite, { [classes.menuOpen]: menu.isMenuOpen,})}
				>
               <List component="ul" className="sub-menu">
                  {menu.child_routes.map((subMenu, index) => {
							// Third child route is not null
							if (subMenu.third_child_routes !== null && subMenu.fullPageMenu === false){
									return(
										<li key={index}>
											<ListItem
												disableRipple
												button
												component="div"
												onClick={() => toggleThirdMenu(index)}
												className={clsx(classes.textWhite, classes.ListItem ,{
													[classes.menuOpen]: subMenu.isMenuOpen,
												},"list-item")}
											>
												{/* Level 2 menu title */}
												<div className={classes.w100}>
													<div className={classes.flexCenter}>
														<Box component="span" className={classes.font9}>remove</Box>
														<ListItemText primary={ <IntlMessages id={subMenu.menu_title} /> } style={{ paddingLeft: 8 }}/>
														{subMenu.isMenuOpen ? 
															<Icon style={{ fontSize: 20, width:25 }}>arrow_drop_up</Icon>
															: 
															<Icon style={{ fontSize: 20, width:25 }}>arrow_drop_down</Icon>
														}	
													</div>
												</div>
											</ListItem>
											{/* This is the second collapse */}
											<Collapse 
												in={subMenu.isMenuOpen} 
												timeout="auto" 
												unmountOnExit 
												className={clsx(classes.textWhite, 
													{
													[classes.menuOpen]: subMenu.isMenuOpen,
													}
												)}
											>
												{/* Level 3 menu title */}
												<List component="ul" className="sub-menu">
                                       {
                                          subMenu.third_child_routes.map((thirdMenu,fourthindex) =>{
                                             return(
                                                <Fragment key={fourthindex}>
                                                   <ListItem
                                                      disableRipple
                                                      button
                                                      component="li"
                                                      onClick={() => toggleFourthMenu(fourthindex)}
                                                      className={clsx(classes.textWhite, classes.ListItem,{
																				[classes.menuOpen]: subMenu.isMenuOpen,
																		},"list-item")}
                                                   >
                                                      <NavLink 
                                                         className={`link ${classes.flexCenter}`}
                                                         to={thirdMenu.path}
                                                      >
                                                         <Box mr={1} component="span" className={`icon ${classes.font9}`}>remove</Box>
                                                         <IntlMessages id={thirdMenu.menu_title} />
                                                      </NavLink>
                                                   </ListItem>
                                                </Fragment>
                                             )
                                          })
                                       }
												</List>
											</Collapse>
										</li>
									)
								// })}	
							}

							// Third child route is null
                     return (
								<ListItem 
									key={index}
									 disableRipple 
									 button 
									 component="li" 
									 style={{ paddingTop:0, paddingBottom:0 }}
                            onClick={ () => toggleThirdMenuAndCloseSidebar(index) }
									 className={classes.childList}
									>
									<NavLink 
										className={`list-link ${classes.flexCenter}`}
										to={subMenu.path}
									>
										<Box mr={1} component="span" className={`icon ${classes.font9}`}>remove</Box>
                              <IntlMessages id={subMenu.menu_title} />
                           </NavLink>
                        </ListItem>
                     )
                  })}
               </List>
            </Collapse>
         </li>
      )
	}
	
	// Child Route is null
   return (
      <ListItem
			disableRipple
         button
         component="li"
         className={clsx(classes.textWhite, classes.textLink, {
				[classes.linkActive]: menu.isMenuOpen,
			},"list-item")}
			onClick={() => toggleAndCloseSidebar()}
      >
			<div className={classes.w100}>
				<NavLink to={menu.path}>
					<Box className={classes.flexCenter} >
						<Box component="span" className={classes.iconWrap}>{menu.icon}</Box>
						<ListItemText primary={<IntlMessages id={menu.menu_title} />} style={{ paddingLeft: 12 }}/>
					</Box>
					<Fragment>
					{menu.desc ?
						<Fragment>
							{menu.content.length !== 0 ?
								<>
									<Box fontSize="body1.fontSize" className={`desc-wrap ${classes.truncate} ${classes.desc}`} display="block">
										{menu.content}
									</Box>
								</>
								:
								null
							}
						</Fragment>
						:
						null
					}
				</Fragment>
				</NavLink> 
         </div>
      </ListItem>
   );
}

export default NavListItem;