/**
 * Global Search Component
*/
/*eslint-disable*/
import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { Tooltip, IconButton, Box, TextField, Icon } from '@material-ui/core';

import urlName from 'assets/Data/GlobalSearchMenuItem';

const useStyles = makeStyles(theme => ({
	inputBar: {
		width: 'calc(100% - 40px)',
		'& .MuiInputBase-root': {
			'&:before, &:after': {
				display: 'none',
			}
		}
	},
	closeIcon: {
		width: 40
	}
}));

function GlobalSearch(props) {
	const classes = useStyles();
	const [searchResult, setSearchResult] = useState(false);
	const [searchData, setSearchData] = useState(null);
	const [value, setValue] = useState('');
	const [windowWidth,setWindowWidth] =useState();
	const [windowHeight,setWindowHeight] =useState();

	useEffect(()=>{
		updateDimensions();
	});
	useEffect(()=>{
		window.addEventListener("resize", updateDimensions);
	});
	
	const updateDimensions = () => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
	}

	const updateSearch = (e) => {
		setValue(e.target.value);
		if(e.target.value == ''){
			setSearchResult(false);
		} else {
			setSearchResult(true);
			let filteredMenu = urlName.data.filter((menu,i) => 
			menu.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1);
			setSearchData(filteredMenu);
		}
	}

	const changeSearchResult = () => {
		setSearchResult(false);
		setValue('');
		props.showSearchBar()
	}


	const { className } = props;

	return (
		<div className={className}>
			<Box className={classes.inputBar}>
				<TextField 
					fullWidth 
					id="standard-basic" 
					placeholder="Search here..." 
					onChange={(e) => updateSearch(e)}
					value={value}
				/>
			</Box>
			<Tooltip title="Close" placement="bottom">
				<IconButton
					className={classes.closeIcon}
					size="small"
					onClick={props.showSearchBar}
				>
					<Icon style={{ transform: 'scale(0.9)' }}>close</Icon>
				</IconButton>
			</Tooltip>
			{searchResult && 
				<div className="search-overlay-wrap">
					{searchData.length == 0 ? 
						<div>
							<ul >
								<li>
									<div className="no-result-found">
										<span>Nothing Found</span>
									</div>
								</li>
							</ul>
						</div>
						:
						<div>
							<ul >
								{
									searchData.map((data,i)=>(
										<li key={i}>
											<div>
												<Link to={data.url} onClick={() => changeSearchResult()} >{data.name}</Link>
											</div>
										</li>
									))
								}
							</ul>
						</div>
					}
				</div>
			}
		</div>
	);
}

export default GlobalSearch;