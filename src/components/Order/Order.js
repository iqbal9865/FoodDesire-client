import React, { useContext } from 'react';
import {useState, useEffect} from 'react'
import { UserContext } from '../../App';
const Order = () => {
    const [logInUser, setLogInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        fetch('https://rocky-plateau-95146.herokuapp.com/orders?email='+logInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        
        <div style={{backgroundColor:'#90EE90', height:'200px', borderRadius:'2em'}} className='m-3 py-2 my-5'>
            <div  style={{borderBottom:'1px solid black'}} className='w-75 d-flex m-auto my-3'>
                <h5 className='w-25'>Customer Email</h5>
                <h5 className='w-25'>Product Name</h5>
                <h5 className='w-25'>Product Price</h5>
                <h5 className='w-25'>Ordered Date</h5> 
        </div>       
            {
                // orders.map(order =><li>name: {order.name}&nbsp;email:{order.email}&nbsp;price:{order.price}</li>)
                orders.map(order => <div className='w-75 d-flex m-auto my-2'>
                   <h5 className='w-25'>{order.email}</h5>
                   <h5 className='w-25'>{order.name}</h5>
                   <h5 className='w-25'>${order.price}</h5>
                   <h5 className='w-25'>{order.date}</h5>
                </div> )
            }
         </div>
    );
};

export default Order;