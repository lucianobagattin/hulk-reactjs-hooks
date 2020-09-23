/**
 * Nav Menu Item
 */
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

// Intl messages
import IntlMessages from 'util/IntlMessages';

function NavMenuItem(props){

	const { menu } = props;
	return (
		<Fragment>
			{menu.child_routes !== null ?
				<li className="menu-item-has-child">
					<a href="javasacript:;" onClick={e => e.preventDefault()}>
						<i className="material-icons-outlined">{menu.icon}</i>
						<span><IntlMessages id={menu.menu_title} /></span>
					</a>
					<ul className={classnames("list-unstyled sub-menu", { 'deep-level': menu.child_routes.length > 10 })}>
						{menu.child_routes.map((subMenu, subKey) => {
							if (!subMenu.third_child_routes) {
								return (
									<li key={subKey}>
										<NavLink to={subMenu.path} className="nav-link no-arrow" activeClassName="active">
											<span><IntlMessages id={subMenu.menu_title} /></span>
										</NavLink>
									</li>
								)
							}
							return (
								<li key={subKey} className="menu-item-has-child">
                           <a href="javasacript:;" onClick={e => e.preventDefault()} >
										<span><IntlMessages id={subMenu.menu_title} /></span>
									</a>
									<ul className="list-unstyled sub-menu hjh">
										{subMenu.third_child_routes.map((nestedMenu, nestedKey) => (
											<li key={nestedKey}>
												<NavLink to={nestedMenu.path}>
													<span><IntlMessages id={nestedMenu.menu_title} /></span>
												</NavLink>
											</li>
										))}
									</ul>
								</li>
							);
						})}
					</ul>
				</li>
				:
				<li>
					<NavLink to={menu.path}>
						<i className="material-icons-outlined">{menu.icon}</i>
						<span><IntlMessages id={menu.menu_title} /></span>
					</NavLink>
				</li>
			}
		</Fragment>
	);
}

export default NavMenuItem;