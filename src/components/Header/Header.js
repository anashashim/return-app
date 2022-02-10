import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.svg';

const Header = props => (
	<div className='header'>
		<img src={logo} alt="logo"/>
	</div>
);
export default Header;
