/**
 * Hulk App Layout
*/
import React, { useRef, Fragment ,useEffect,useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {  useLocation } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';
import { Hidden, Drawer, Box } from '@material-ui/core';
import IconSidebar from 'components/IconSidebar';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';

// Components
import SidebarCustomization from 'components/Customizer/Customization';
import NotificationSidebar from 'components/NotificationSidebar/NotificationSidebar'
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar';
import Tutorials from 'components/Tutorials';

// Actions
import { collapsedSidebarAction, darkModeAction, miniSidebarAction, rtlAction, horizontalMenuAction, chooseThemeAction } from 'actions';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		height: '100vh'
	},
	content: {
		paddingTop: 64,
		flexGrow: 1,
		marginLeft: -drawerWidth,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		[theme.breakpoints.down('xs')]: {
			paddingTop: 52,
		},
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	menuButton: {
		color: 'red',
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	bgColor: {
		backgroundColor: '#272e3d',
		borderRight: '0',
		overflowY: 'hidden',
	},
	drawerPaper: {
		width: '100%',
		backgroundColor: '#272e3d',
		borderRight: '0',
		overflowY: 'hidden',
		[theme.breakpoints.up('md')]: {
			position: 'relative',
		},
	},
}));

function HulkAppLayout(props) {
	const classes = useStyles();
	const [mobileOpen,setMobileOpen] = useState(false);
	const [loading,setLoading] = useState(true)
	const settings = useSelector(state => state.settings);
	const dispatch = useDispatch();
	const scrollUp = useRef();
	let location = useLocation();
	const renderPage = ()  => {
		const { children } = props;
		const  pathname  = location.pathname;
		if (pathname === '/app/chat' || pathname.startsWith('/app/email') || pathname === '/app/todo' || pathname === '/app/calendar') {
			return (
				<div className="hulk-page-content">
					{children}
				</div>
			);
		}
		if (settings.isMiniSidebarActive) {
			return (
				<div className="hulk-page-content">
					{children}
				</div>
			)
		} else {
			return (
				<Scrollbars
					className="hulk-scroll main-content"
					autoHide
					autoHideDuration={100}
					ref={scrollUp}
					style={getScrollBarStyle()}
				>
					<div className="hulk-page-content">
						{children}
					</div>
				</Scrollbars>
			);
		}
	}
	useEffect(() => {
		setTimeout(() => {
			if (loading === false && props.location.pathname === '/' ) {
				document.getElementsByClassName("hulk-page-content")[0].classList.add('fadeInUpShorter');
				setTimeout(() => {
					document.getElementsByClassName("hulk-page-content")[0].classList.remove('fadeInUpShorter');
				}, 1500)
			}
		}, 2500)
		const { isDarkModeActive, isRtlActive, isHorizontalMenuActive ,isMiniSidebarActive, selectedThemeColor } = settings;
		if ( location.search === '?darkmode=true&horizontalmenu=true' || location.search === '?horizontalmenu=true&darkmode=true'){
			dispatch(onToggleHorizontalMenu(true));
			dispatch(onToggleDarkMode(true));
		}
		if( location.search === '?horizontalmenu=true' || isHorizontalMenuActive){
			dispatch(onToggleHorizontalMenu(true));
		}
		if (location.search === '?darkmode=true' || isDarkModeActive) {
			dispatch(onToggleDarkMode(true));
		}
		if ( location.search === '?rtl=true' || isRtlActive) {
			dispatch(onToggleRtl(true));
		}
		if( location.search === '?minisidebar=true' || isMiniSidebarActive ){
			dispatch(onToggleMiniSidebar(true));
		}
		if (selectedThemeColor) {
			// dispatch(chooseTheme(selectedThemeColor));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);
	useEffect(() => {
  		if(loading === true){
			setLoading(false);
		} 
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.counter]);
	
	//Scrollbar height
	const getScrollBarStyle = () =>  {
		if (settings.isHorizontalMenuActive) {
			return {
				height: 'calc(100vh - 115px)',
			}
		} else {
			return {
				height: 'calc(100vh - 64px)',
			}
		}
	}

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	// Function to change the state of collapsed sidebar
	const onToggleNavCollapsed = (isActive) => {
		const val = !settings.navCollapsed;
		dispatch(collapsedSidebarAction(val));
	}

	const onToggleDarkMode = (isTrue) => {
		if (isTrue) {
			document.body.classList.remove('light-theme')
			document.body.classList.add('dark-theme');
		} else {
			document.body.classList.remove('dark-theme')
			document.body.classList.add('light-theme');
		}
		dispatch(darkModeAction(isTrue));
	}

	const onToggleRtl = (isTrue) => {
		if (isTrue) {
			document.body.classList.add('rtl-layout');
		} else {
			document.body.classList.remove('rtl-layout')
		}
		dispatch(rtlAction(isTrue));
	}

	const onToggleMiniSidebar = (isTrue) => {
		if (isTrue) {
			document.body.classList.add('icon-layout-wrap');
			document.body.classList.remove('horizontal-layout');
			dispatch(horizontalMenuAction(false));
			dispatch(miniSidebarAction(true));
			dispatch(collapsedSidebarAction(true));
		} else {
			document.body.classList.remove('icon-layout-wrap')
			dispatch(miniSidebarAction(false));
			if (settings.isHorizontalMenuActive === false) {
				dispatch(collapsedSidebarAction(true));
			}
		}
	}

	const onToggleHorizontalMenu = (isActive) => {
		if (isActive) {
			document.body.classList.add('horizontal-layout');
			onToggleMiniSidebar(false);
			dispatch(horizontalMenuAction(true));
			dispatch(collapsedSidebarAction(false));
		} else {
			if (document.body.classList.contains('horizontal-layout')) {
				document.body.classList.remove('horizontal-layout');
				dispatch(horizontalMenuAction(false));
			}
			if (settings.isMiniSidebarActive === false) {
				dispatch(collapsedSidebarAction(true));
			}
		}
	}

	const chooseTheme = (theme) => {
		document.body.classList.remove('light-theme', 'teal-theme', 'violet-theme')
		document.body.classList.add(theme);
		dispatch(chooseThemeAction(theme));
	}

	const { navCollapsed, isDarkModeActive, isMiniSidebarActive, isRtlActive, isHorizontalMenuActive } = settings;
	return (
		<div>
			{ loading === true ? 
				<div id="loading-bg" className="hk-full-loader" >
					<div className="text-center">
						<Box mb={3}>
							{isDarkModeActive ?
								<img alt="site-logo" width="110" height="30" src={require(`assets/Images/hulk-light.png`)} />
								:
								<img alt="site-logo" width="110" height="30" src={require(`assets/Images/hulk-dark.png`)} />
							}
						</Box>
						<CircularProgress />
					</div>
				</div>
				:		
				<Fragment>
					{ isMiniSidebarActive === false ?
						// Layout One
						<div className={`hk-app-layout ${classes.root}`}>
							<Header
								toggleResponsiveSidebar={handleDrawerToggle}
								open={navCollapsed}
								toggleSidebar={(e) => onToggleNavCollapsed(e)}
								openHorizontal={isHorizontalMenuActive}
							/>
							<SidebarCustomization
								iconColor="#fff"
								open={navCollapsed}
								toggleSidebar={(e) => onToggleNavCollapsed(e)}
								darkModeStatus={isDarkModeActive}
								miniSidebarStatus={isMiniSidebarActive}
								toggleDarkMode={(e) => onToggleDarkMode(e)}
								toggleMiniSidebar={(e) => onToggleMiniSidebar(e)}
								rtlStatus={isRtlActive}
								toggleRtl={(e) => onToggleRtl(e)}
								horizontalMenuStatus={isHorizontalMenuActive}
								toggleHorizontalMenu={(e) => onToggleHorizontalMenu(e)}
								chooseTheme={(e) => chooseTheme(e)}
							/>
							<Tutorials />
							<NotificationSidebar />
							<nav aria-label="menu-sidebar">
								{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
								<Hidden lgUp implementation="css">
									<Drawer
										variant="temporary"
										anchor='left'
										open={mobileOpen}
										onClose={handleDrawerToggle}
										classes={{
											paper: `${classes.bgColor} ${classes.drawer}`,
										}}
										ModalProps={{
											keepMounted: true, // Better open performance on mobile.
										}}
									>
										<div>
											<Sidebar closeSidebar={handleDrawerToggle} />
										</div>
									</Drawer>
								</Hidden>
								<Hidden mdDown implementation="css"
									className={clsx(classes.drawer, {
										[`rtl-sidebar`]: !navCollapsed,
									})}
								>
									<Drawer
										variant="persistent"
										anchor="left"
										open={navCollapsed}
										classes={{
											paper: ` ${classes.drawerPaper}`,
										}}
									>
										<Sidebar />
									</Drawer>
								</Hidden>
							</nav>
							<main
								className={clsx(classes.content, {
									[classes.contentShift]: navCollapsed,
								}, 'hk-main')}
							>
								<div className="hk-page">
									{renderPage()}
								</div>
							</main>
						</div>
						:
						<div className={`hk-icon-layout ${classes.root}`}>
							<Fragment>
									<SidebarCustomization
										iconColor="#fff"
										open={navCollapsed}
										toggleSidebar={(e) => onToggleNavCollapsed(e)}
										darkModeStatus={isDarkModeActive}
										miniSidebarStatus={isMiniSidebarActive}
										toggleDarkMode={(e) => onToggleDarkMode(e)}
										toggleMiniSidebar={(e) => onToggleMiniSidebar(e)}
										rtlStatus={isRtlActive}
										toggleRtl={(e) => onToggleRtl(e)}
										horizontalMenuStatus={isHorizontalMenuActive}
										toggleHorizontalMenu={(e) => onToggleHorizontalMenu(e)}
										chooseTheme={(e) => chooseTheme(e)}
									/>
									<NotificationSidebar
										iconColor="#fff"
										open={navCollapsed}
										toggleSidebar={(e) => onToggleNavCollapsed(e)}
										darkModeStatus={isDarkModeActive}
										miniSidebarStatus={isMiniSidebarActive}
										toggleDarkMode={(e) => onToggleDarkMode(e)}
										toggleMiniSidebar={(e) => onToggleMiniSidebar(e)}
										rtlStatus={isRtlActive}
										toggleRtl={(e) => onToggleRtl(e)}
										horizontalMenuStatus={isHorizontalMenuActive}
										toggleHorizontalMenu={(e) => onToggleHorizontalMenu(e)}
									/>
									<nav aria-label="menu-sidebar" className="icon-sidebar">
										{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
										<Hidden lgUp implementation="css">
											<Drawer
												variant="temporary"
												anchor='left'
												open={mobileOpen}
												onClose={handleDrawerToggle}
												classes={{
													paper: `${classes.bgColor} ${classes.drawer}`,
												}}
												ModalProps={{
													keepMounted: true, // Better open performance on mobile.
												}}
											>
												<div>
													<Sidebar closeSidebar={handleDrawerToggle} />
												</div>
											</Drawer>
										</Hidden>
										<Hidden mdDown implementation="css" className={`icon-drawer ${classes.drawer}`}>
											<Drawer
												variant="persistent"
												anchor="left"
												open={navCollapsed}
												classes={{ paper: classes.drawerPaper, }}
											>
												<IconSidebar />
											</Drawer>
										</Hidden>
									</nav>
									<main
										className={clsx(classes.content, {
											[classes.contentShift]: navCollapsed,
										}, 'hk-main')}
									>
										<Box className="icon-header-layout">
											<Header
												toggleResponsiveSidebar={handleDrawerToggle}
												open={navCollapsed}
												toggleSidebar={(e) => onToggleNavCollapsed(e)}
												openHorizontal={isHorizontalMenuActive}
											/>
										</Box>
										<div className="hk-page">
											{renderPage()}
										</div>
									</main>
								</Fragment>
						</div>	
					}
				</Fragment>
			}
		</div>
	);
}


export default HulkAppLayout;