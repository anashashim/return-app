import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './ReturnItems.scss';
import Back from '../../assets/images/back.png';

const ReturnItems = () => {
	const order =  {
		 "products": [
		  {
		   "id": "1",
		   "title": "Organic Cotton Crew T-shirt",
		   "price": "25",
		   "image": "https://image.made-in-china.com/44f3j00aiYTGfhsIebl/Custom-T-Shirts-100-Cotton-Men-Tshirt-Tee-Shirt-Printing-T-Shirt-Polo-T-Shirt-for-Men-Women-Plain-T-Shirt.jpg",
		   "isReturnCompleted": false
		  },
		  {
		   "id": "2",
		   "title": "Blue Elegant Tshirt",
		   "price": "20",
		   "image": "https://5.imimg.com/data5/YX/OO/TA/ANDROID-108727015/product-jpeg-500x500.jpg",
		   "isReturnCompleted": false
		  },
		  {
		   "title": "Best Black T-Shirts",
		   "price": 17,
		   "image": "https://media.gq.com/photos/602ea741937235d39fc13158/master/w_2000,h_1334,c_limit/duo.jpg",
		   "isReturnCompleted": false,
		   "id": "3"
		  },
		  {
		   "title": "Women Polo Neck Yellow T-Shirt",
		   "price": 28,
		   "image": "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13692274/2021/6/9/56582833-0546-4c06-a9f2-9c3a86a1962f1623222398148-HRX-by-Hrithik-Roshan-Women-Tshirts-6201623222397705-1.jpg",
		   "isReturnCompleted": false,
		   "id": "4"
		  }
		 ],
		 "email": "test1@abc.com",
		 "id": "12345"
		};
	const [products, setProducts] = useState(order.products);
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
	const returnItems = ()=> {
		navigate('/success');
	};

	const back = () => {
		navigate('/');
	}

	return(
		<div className='content'>
			<div className='content-header'>
				<img src={Back} alt="Back button" onClick={back}/>
				<div>
					<h3>Select Items</h3>
				</div>
			</div>
			<div className='content-body'>
				<ul className='list'>
					{
						products && products.map((product, index)=>
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
					count>0 && <button className='primary' onClick={returnItems}>Return {count} Items</button>
				}
			</div>
		</div>
	)
};

export default ReturnItems;
