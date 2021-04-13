import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import {UserContext} from '../../App'
const Checkout = () => {
    const [logInUser, setLogInUser] = useContext(UserContext)
    const {_id} = useParams()
    const [products, setProducts] = useState({})
    useEffect(()=>{
        fetch('http://localhost:5055/products')
        .then(res => res.json())
        .then(data => setProducts(data.find(product => product._id === _id)))
    },[])
    const {name, price, weight,imageURL} = products;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = () => {
    //   console.log(logInUser.email, price, new Date(),logInUser.name);
      const orderDetails = {email: logInUser.email, name, price, date: new Date()}
      

      fetch(`http://localhost:5055/addOrder`,{
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderDetails)
      })
      .then(res => res.json())
      .then(data => {
        if(data){
            alert('Your Order Placed Successfully!!')
        }
      })
    };
    return (
        
        <div className='mt-5'>
            <h2>CheckOut</h2>
        <div style={{backgroundColor:'lightgray',borderRadius:'10px' ,height: '200px'}} className='description w-75 m-auto '>
            <div style={{borderBottom:'1px solid black'}} className='d-flex p-3'>
                <h5 className='w-50'>Description</h5>
                <h5 className='w-25'>Quantity(gm/kg)</h5>
                <h5 className='w-25'>Price($)</h5>
            </div>
            <div style={{borderBottom:'1px solid black'}} className='d-flex py-3'>
                <h5 className='w-50'> <img style={{height:'50px', width:'50px',borderRadius:'3px'}} src={imageURL} alt=""/> {name}</h5>
                <h5 className='w-25'>{weight}</h5>
                <h5 className='w-25'>${price}</h5>
            </div>
            <div className='d-flex'>
                <h5 className='w-75'>Total Price</h5>
                <h5 className='w-25'>${price}</h5>
            </div>

     <form className='w-25 my-5 m-auto' onSubmit={handleSubmit(onSubmit)}>
      <input className='btn btn-success' type="submit" value='CheckOut'/>
    </form>

        </div>

        </div>
    );
};

export default Checkout;