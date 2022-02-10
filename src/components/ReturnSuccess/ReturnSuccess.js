/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './ReturnSuccess.scss';
import Success from '../../assets/images/success.png';
import { useNavigate } from 'react-router-dom';

const ReturnSuccess = () => {
	const navigate = useNavigate();
	const returnToHome = ()=>{
		navigate('/');
	};

	return(
	<div className='content success'>
		<div className='content-header'>
			<div>
				<h3>You're all set</h3>
			</div>
		</div>
		<div className='content-body center'>
			<img src={Success} alt='Success Image'/>
			<h3>Return is successful</h3>
			<small>A confirmation email with all details regarding has been sent to your account</small>
			<button className='secondary' onClick={returnToHome}>{`< Return another order`}</button>
		</div>
	</div>
)};

export default ReturnSuccess;
