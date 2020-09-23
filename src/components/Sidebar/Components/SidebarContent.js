/**
 * admin header component
 */
/* eslint-disable */
import React, { useEffect, useState} from 'react';
import List from '@material-ui/core/List';
import NavListItem from './NavListItem';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleThirdMenu, toggleMenu, toggleFourthMenu, onLoadToggleMenu } from 'actions';

function SidebarContent(props) {
	const menuListReducer = useSelector(state => state.menuListReducer);
	const dispatch = useDispatch();
	const routes = menuListReducer.navLinks;
	const [navLinks, setNavLinks] = useState(routes);

	const getPlanName = (name) => {
		let newName = name.replace("-", " ");
		return newName
	}
   useEffect(()=>{
      let currentURL = window.location.href
      let currentIndex 
      for (let i = 0; i < navLinks.length; i++) {
         if (navLinks[i].menu == currentURL.split('/')[4]) {
            currentIndex = i;
         }
      }
		onLoadToggle(currentIndex);
   },[]);

	const onLoadToggle = (index) => {
		dispatch(onLoadToggleMenu(index));
		setNavLinks(routes);
	}

	const toggleMenufunction = (index) => {
		dispatch(toggleMenu(index));
      setNavLinks(routes);
	}
	const toggleThirdMenuAndCloseSidebar = (index) =>{
		dispatch(toggleThirdMenu(index));
		setNavLinks(navLinks);
     
      if(props.closeSidebar){
			props.closeSidebar()
		}
	}
	const toggleThirdMenufunction = (index) => {
		dispatch(toggleThirdMenu(index));
      setNavLinks(routes);
   }
   
   const toggleFourthMenufunction = (fourthindex) => {
   	dispatch(toggleFourthMenu(fourthindex));
   	setNavLinks(routes);
      if(props.closeSidebar){
			props.closeSidebar()
		}
   }


	const { closeSidebar } = props;
	return (
		<div>
			<List className="menu-wrap" style={{ padding: 0, }}>
            {navLinks && navLinks.map((Navlink, index) => {
					return (
						<NavListItem
							menu={Navlink} key={index}
                     toggleMenu={() => toggleMenufunction(index)}
                     toggleFourthMenu={(e) => toggleFourthMenufunction(e)}
							toggleThirdMenu={(e) => toggleThirdMenufunction(e)}
							toggleThirdMenuAndCloseSidebar={(e) => toggleThirdMenuAndCloseSidebar(e)}
							closeSidebar={closeSidebar}
						/>
					)
				})}
			</List>
		</div>
	);
}

export default SidebarContent;