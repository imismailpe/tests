import React from 'react';
import {Link} from 'react-router-dom';

const Nav = ()=>{
	return(
		<ul className="navlinks">
			<Link to="/">
				<li className="navlink">Home</li>
			</Link>
			<li className="navlink">About</li>
			<Link to="/users">
				<li className="navlink">Users</li>
			</Link>
			<Link to="/posts">
				<li className="navlink">Posts</li>
			</Link>
		</ul>
		)
}

export default Nav;