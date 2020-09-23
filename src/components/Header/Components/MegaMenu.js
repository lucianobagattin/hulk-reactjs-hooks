/**
 * Mega Menu Component
*/
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, List, ListItem, Grid, Typography, ListItemText, Icon, Collapse } from '@material-ui/core';
import clsx from 'clsx';
// Data
import MenuData from './data.json';

// Intl messages
import IntlMessages from 'util/IntlMessages';

const useStyles = makeStyles(theme => ({

	megaMenu: {
		width: '100%',
		minWidth: 1000,
		maxWidth: 1000,
		padding: '30px 20px',
	},
	flexCenter: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	}
}));

export default function MegaMenu() {

	const classes = useStyles();

	const [navLinks, setNavLinks] = useState(MenuData);

	const toggleMenu = (index) => {
		setNavLinks(prevState => prevState.map((navLinks, i) => ({
			...navLinks,
			isMenuOpen: i === index && !navLinks.isMenuOpen
		})))
	}

	return (
		<div>
			<ul className="mega-list">
				<li className="mega-menu-parent">
					<a href="# " className="primary-bg-btn">Mega Menu</a>
					<div className="mega-menu-dropmenu">
						<Grid container spacing={3} className="stats-wrap">
							<Grid item xs={12} sm={12} md={8}>
								<List className="mega-menu-ul">
									{navLinks && navLinks.map((menu, index) => {
										return (
											menu.child_routes !== null ?
												<li key={index} className="list-item">
													<ListItem
														disableRipple
														button
														component="div"
														onClick={() => toggleMenu(index)}
														className={clsx(classes.flexCenter, {
															[classes.menuOpen]: menu.isMenuOpen,
														})}
													>
														<ListItemText primary={<IntlMessages id={menu.menu_title} />} />
														{menu.isMenuOpen ?
															<Icon style={{ fontSize: 20, width: 25 }}>remove</Icon>
															:
															<Icon style={{ fontSize: 20, width: 25 }}>add</Icon>
														}
													</ListItem>
													<Collapse
														in={menu.isMenuOpen}
														timeout="auto"
														unmountOnExit
														className={clsx(classes.textWhite, { [classes.menuOpen]: menu.isMenuOpen, })}
													>
														<List component="ul" className="sub-menu">
															{menu.child_routes.map((subMenu, index) => (
																<ListItem key={index}>
																	<NavLink className={classes.flexCenter} to={subMenu.path}>
																		<Box component="span" fontSize={20} color="text.secondary" mr={1} className="material-icons-outlined">{subMenu.icon}</Box>
																		<ListItemText primary={<IntlMessages id={subMenu.menu_title} />} />
																	</NavLink>
																</ListItem>
															))}
														</List>
													</Collapse>
												</li>
												:
												<ListItem key={index}>
													<NavLink className={classes.flexCenter} to={menu.path}>
														<Box component="span" fontSize={20} color="text.secondary" mr={1} className="material-icons-outlined">{menu.icon}</Box>
														<ListItemText primary={<IntlMessages id={menu.menu_title} />} />
													</NavLink>
												</ListItem>
											)
										}
									)}
								</List>
							</Grid>
							<Grid item xs={12} sm={12} md={4}>
								<Typography className="mega-title">Featured Post</Typography>
								<Box>
									<Box mb={2}>
										<a href="# ">
											<img className="img-fluid" alt="mega-menu" src={require(`assets/Images/mega-menu.jpg`)} />
										</a>
									</Box>
									<Typography variant="h6">
										<a href="# " className="text-dark link-hover">Lorem ipsum dolor sit amet, consectetur</a>
									</Typography>
									<Typography variant="body2" className="text-disabled meta-info">
										<span>June 28,2019</span>
										<span>BY: John Doe</span>
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</div>
				</li>
				<li className="mega-menu-parent">
					<a href="# " className="primary-bg-btn">Documentation</a>
					<div className="mega-menu-dropmenu mega-sm">
						<div className="mega-header">
							<a href="https://docs.theironnetwork.org/hulk/" rel="noopener noreferrer" target="_blank">
								<div className="mega-titleIcon">
									<div className="mega-titleIcon--icon">
										<span className="material-icons">
											description
										</span>
									</div>
									<div className="mega-titleIcon--content">
										<h3 className="linkTitle linkIcon mb-0 mt-0">
											Documentation
										</h3>
										<span className="linkSub">Start integrating Hulk’s Components and&nbsp;features</span>
									</div>
								</div>
							</a>
						</div>
						<div className="mega-articles">
							<ul>
								<li><h4>Get Started</h4></li>
								<li>
									<a href="https://docs.theironnetwork.org/hulk/" rel="noopener noreferrer" target="_blank">
										Introduction
                      		</a>
								</li>
								<li>
									<a target="_blank"  rel="noopener noreferrer" href="https://docs.theironnetwork.org/hulk/folder-structure/">
										Folder Structure
                      		</a>
								</li>
								<li>
									<a target="_blank" rel="noopener noreferrer" href="https://docs.theironnetwork.org/hulk/installation/">
										Installation
                      		</a>
								</li>
								<li>
									<a target="_blank" rel="noopener noreferrer" href="https://docs.theironnetwork.org/hulk/adding-menu-item/">
										Adding Menu
                      		</a>
								</li>
							</ul>
							<ul>
								<li><h4>Guides</h4></li>
								<li>
									<a href="https://docs.theironnetwork.org/hulk/adding-widgets/" rel="noopener noreferrer" target="_blank">
										Adding Widget
                      		</a>
								</li>
								<li>
									<a href="https://docs.theironnetwork.org/hulk/authentication/" rel="noopener noreferrer"  target="_blank">
										Authenication
                      		</a>
								</li>
								<li>
									<a rel="noopener noreferrer" href="https://docs.theironnetwork.org/hulk/translate-the-appmulti-language-support/" target="_blank">
										Translation
                      		</a>
								</li>
								<li>
									<a href="https://docs.theironnetwork.org/hulk/themes/" rel="noopener noreferrer" target="_blank">
										Themes
                      		</a>
								</li>
							</ul>
						</div>
						<div className="mega-footer">
							<div className="mega-footer-wrap">
								<div className="mega-footer--list">
									<a href="https://docs.theironnetwork.org/hulk/build-an-app-from-scratch/" rel="noopener noreferrer"  target="_blank">
										<div className="mega-titleIcon">
											<div className="mega-titleIcon--icon">
												<span className="material-icons">
													code
												</span>
											</div>
											<div className="mega-titleIcon--content">
												<h3 className="linkTitle linkIcon mb-0 mt-0">
													Build an App from Scratch
												</h3>
											</div>
										</div>
									</a>
								</div>
								<div className="mega-footer--list">
									<a href="https://docs.theironnetwork.org/hulk/style-customization/" rel="noopener noreferrer" target="_blank">
										<div className="mega-titleIcon">
											<div className="mega-titleIcon--icon">
												<span className="material-icons">
													brush
												</span>
											</div>
											<div className="mega-titleIcon--content">
												<h3 className="linkTitle linkIcon mb-0 mt-0">
													Style Customization
												</h3>
											</div>
										</div>
									</a>
								</div>
								<div className="mega-footer--list">
									<a href="https://docs.theironnetwork.org/hulk/faqs-frequently-asked-questions/" rel="noopener noreferrer" target="_blank">
										<div className="mega-titleIcon">
											<div className="mega-titleIcon--icon">
												<span className="material-icons">
													error_outline
												</span>
											</div>
											<div className="mega-titleIcon--content">
												<h3 className="linkTitle linkIcon mb-0 mt-0">
													Frequently Asked Questions
												</h3>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}