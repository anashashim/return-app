/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import storage from '../../utilities/storage';
import './OrderRequest.scss';

const OrderRequest = () => {
	const navigate = useNavigate();
	const [orderId, setOrderId] = useState('');
	const [emailId, setEmailId] = useState('');
	const submitRequest = () => {
		if(orderId && emailId){
			storage.set('orderId', orderId);
			storage.set('emailId', emailId);
			navigate('return-items');
		} else toast.error('OrderId or Email address not provided')
	};
	
	useEffect(()=>{
		storage.clear();
	}, []);

	return(
		<div className='content'>
			<div className='content-header'>
				<div>
					<h3>Return Order</h3>
					<small>To start enter your order number and email id</small>
				</div>
			</div>
			<div className='content-body'>
				<input placeholder='Enter order ID' value={orderId}
            onChange={({target})=>setOrderId(target.value)}/>
				<input placeholder='Enter email address' value={emailId}
            onChange={({target})=>setEmailId(target.value)}/>
				<button className='primary' onClick={submitRequest}>Start Return</button>
			</div>
			<div className='content-footer'>
				<small>Read our <a href='#'>Returns Policy</a></small>
			</div>
			<ToastContainer />
		</div>
	)
};

export default OrderRequest;
