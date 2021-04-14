import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Manageproduct = () => {
     const [events, setEvents] = useState([])
    useEffect(()=>{
        fetch('https://rocky-plateau-95146.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])
   const deleteProduct = (id) => {

        console.log('unique id : ',id)
        fetch(`https://rocky-plateau-95146.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully',result)
        })
   }
    return (
        <div className='w-100 d-flex'>
            <div style={{backgroundColor:'#90EE90',borderRadius:'10px'}} className='w-25 m-5 inventory h-100'>
                <h5 className='my-5'><Link to='/manageorder' style={{color:'white', textDecoration:'none', backgroundColor:'#198754',borderRadius:'5px',padding:'8px'}}>Manage Product</Link> </h5>
                <h5 className='my-5'><Link to='/admin' style={{color:'white', textDecoration:'none',borderRadius:'5px',backgroundColor:'#198754',padding:'8px'}}>Add Product</Link></h5>
            </div>
        <div className='w-75 m-auto mx-5 my-3' style={{backgroundColor:'lightgray', borderRadius:'10px'}}>
            {
                
                events.map(event => deleteProduct && <div style={{backgroundColor:'lightgray', borderRadius:'10px'}} className='hideElement w-75 d-flex m-auto py-1'>
                    <h5 className='w-25'>{event.name}</h5>
                    <h5 className='w-25'>${event.price}</h5>
                    <button className='mx-3 my-2 btn btn-danger w-25' onClick={() => deleteProduct(event._id)}>Delete</button>
                </div>)
            }
        </div>
        </div>
    );
};

export default Manageproduct;