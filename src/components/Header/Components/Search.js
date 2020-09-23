/**
 * Search Icon
 */
import React from 'react'
import { Input } from 'reactstrap';

export default function Search(){
	return (
		<div className="search-wrapper">
			<Input type="search" className="search-input-lg" placeholder="Search.." />
		</div>
	)
}
