/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './ReturnItems.scss';
import Back from '../../assets/images/back.png';
import storage from '../../utilities/storage';
import { getOrders, updateOrder } from '../../services/OrderRequestService';

const ReturnItems = () => {
	const [order, setOrder] = useState({});
	const [products, setProducts] = useState([]);
	const [count, setCount] = useState(0);
	const navigate = useNavigate();

	const selected = (id)=> {
		const newList = products.map((product) => {
			if (product.id === id) {
			  const updatedItem = {
				...product,
				isSelected: !product.isSelected,
			  };
			  setCount(product.isSelected? count-1 : count+1);
			  return updatedItem;
			}
			return product;
		});
		setProducts(newList);
	};

	const submitReturn = ()=> {
		const returnProduct = products.map((product) => {
			if (product.isSelected) {
			  const updatedItem = {
				...product,
				isReturnCompleted:true
			  };
			  delete updatedItem.isSelected;
			  return updatedItem;
			}
			return product;
		});
		const returnOrder = {
			...order,
			products:returnProduct
		}
		console.log(returnOrder);
		updateOrder(returnOrder).then((data)=>{
			console.log(data);
			if(data.status===200)
				navigate('/success');
		});
	};

	const back = () => {
		navigate('/');
	};

	useEffect(()=>{
		const orderId = storage.get('orderId');
		const emailId = storage.get('emailId');
		if(orderId && emailId){
			getOrders(orderId, emailId).then(data => {
				setOrder(data.data[0]);
				setProducts(data.data[0].products)
			});
		}
		else back();
		
	},[])

	return(
		<div className='content'>
			<div className='content-header'>
				<img src={Back} alt="Back button" onClick={back}/>
				<div>
					<h3>Select Items</h3>
				</div>
			</div>
			<div className='content-body no-border'>
				<ul className='list'>
					{
						products && products.map((product, index)=>
						!product.isReturnCompleted &&
						<li className={`item ${product.isSelected?'selected':''}`} key={product.id} onClick={()=>selected(product.id)}>
							<div className='item-image'>
								<img src={product.image} alt=''/>
							</div>
							<div className='item-details'>
								<p className='title'>{product.title}</p>
								<p className='price'>£{product.price}</p>
							</div>
						</li>
					)}
				</ul>
				{
					count>0 && <button className='primary' onClick={submitReturn}>Return {count} Items</button>
				}
			</div>
		</div>
	)
};

export default ReturnItems;
