/**
 * Horizontal Menu
*/
import React, { useEffect,useState } from 'react';
import { Box } from '@material-ui/core';
import menuItems from 'assets/Data/MenuItems';
import NavMenuItem from './NavMenuItem';
import IntlMessages from 'util/IntlMessages';

function HorizontalMenu(){
	const [navLinks] = useState(menuItems.data);
	const [general,setGeneral] = useState(null);
	const [modules,setModules] = useState(null);
	const [components,setComponents] = useState(null);
	const [application,setApplication] = useState(null);

	useEffect(()=>{
		setCategory();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	const setCategory = () => {
		let category1 = navLinks.filter((item, i) => {
			return item.category === 'general';
		})
		let category2 = navLinks.filter((item, i) => {
			return item.category === 'modules';
		})
		let category3 = navLinks.filter((item, i) => {
			return item.category === 'components';
		})
		let category4 = navLinks.filter((item, i) => {
			return item.category === 'applications';
		})
		setGeneral(category1);
		setModules(category2);
		setComponents(category3);
		setApplication(category4);
	}

	return (
      <Box className="horizontal-menu">
         <ul className="list-unstyled nav">
				<li className="nav-item menu-item-has-child">
					<span>
						<i className="material-icons-outlined">dashboard</i>
                  <span className="menu-title"><IntlMessages id="horizontalMenu.general" /></span>
					</span>
					<ul className="list-unstyled sub-menu">
						{general && general.map((menu, key) => (
							<NavMenuItem
								menu={menu}
								key={key}
							/>
						))}
					</ul>
				</li>   
				<li className="nav-item menu-item-has-child">
					<span>
						<i className="material-icons-outlined">widgets</i>
                  <span className="menu-title"><IntlMessages id="horizontalMenu.modules" /></span>
					</span>
					<ul className="list-unstyled sub-menu">
						{modules && modules.map((menu, key) => (
							<NavMenuItem
								menu={menu}
								key={key}
							/>
						))}
					</ul>
				</li>                 
				<li className="nav-item menu-item-has-child">
					<span>
						<i className="material-icons-outlined">view_carousel</i>
                  <span className="menu-title"><IntlMessages id="horizontalMenu.components" /></span>
					</span>
					<ul className="list-unstyled sub-menu">
						{components && components.map((menu, key) => (
							<NavMenuItem
								menu={menu}
								key={key}
							/>
						))}
					</ul>
				</li>     
				<li className="nav-item menu-item-has-child">
					<span>
						<i className="material-icons-outlined">apps</i>
                  <span className="menu-title"><IntlMessages id="horizontalMenu.applications" /></span>
					</span>
					<ul className="list-unstyled sub-menu">
						{application && application.map((menu, key) => (
							<NavMenuItem
								menu={menu}
								key={key}
							/>
						))}
					</ul>
				</li>     
         </ul>
      </Box>   
	);
}

export default HorizontalMenu;