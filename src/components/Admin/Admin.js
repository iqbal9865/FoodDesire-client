import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Admin.css'
const Admin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
        // console.log(data)
        const eventData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        };
        const url = `http://localhost:5055/addProduct`
        console.log('eventData')
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response: ',res))
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'd2847ca22b20bc82ca92f90a0f0fd02d')
        imageData.append('image',event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div className='w-100 d-flex'>
            <div style={{backgroundColor:'#90EE90',borderRadius:'10px'}} className='w-25 m-5 inventory h-100'>
                <h5 className='my-5'><Link to='/manageorder' style={{color:'white', textDecoration:'none', backgroundColor:'#198754',padding:'5px',borderRadius:'5px',padding:'8px'}}>Manage Product</Link> </h5>
                <h5 className='my-5'><Link to='/admin' style={{color:'white', textDecoration:'none',padding:'5px',borderRadius:'5px',backgroundColor:'#198754',padding:'8px'}}>Add Product</Link></h5>
            </div>
            <div className='w-75'>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='d-flex'>  
                    <div className='gap'>
                        
                        <input name="name" {...register("name", { required: true })} placeholder='Product Name' />
                    </div>
                    <div className='gap'>
                        
                        <input {...register("price", { required: true })} placeholder='Product Price' />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                </div> 
                <div className='d-flex'>
                    <div className='gap'>
                        
                        <input type="text" {...register("weight", { required: true })} placeholder='Product Weight'/>
                    </div>
                   <div className='gap'>
                        
                        <input type="file" {...register("imageURL", { required: true })} onChange={handleImageUpload} />   
                    </div> 
                    <br/>
                </div>    
                    <input className="my-5 btn btn-success px-5" value='SAVE' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Admin;