import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Checkout = () => {
    const {_id} = useParams()
    const [products, setProducts] = useState({})
    useEffect(()=>{
        fetch('http://localhost:5055/products')
        .then(res => res.json())
        .then(data => setProducts(data.find(product => product._id === _id)))
    },[])
    const {name, price, weight,imageURL} = products;
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
            <button style={{fontSize:'19px'}} className="btn btn-success my-5">CheckOut</button>
        </div>

        </div>
    );
};

export default Checkout;