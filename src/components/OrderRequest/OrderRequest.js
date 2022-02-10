/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './OrderRequest.scss';

const OrderRequest = () => (
	<div className='content'>
		<div className='content-header'>
			<div>
				<h3>Return Order</h3>
				<small>To start enter your order number and email id</small>
			</div>
		</div>
		<div className='content-body'>
			<input placeholder='Enter order ID'/>
			<input placeholder='Enter email address'/>
			<button className='primary'>Start Return</button>
		</div>
		<div className='content-footer'>
			<small>Read our <a href='#'>Returns Policy</a></small>
		</div>
	</div>
);

export default OrderRequest;
