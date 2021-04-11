import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'd2847ca22b20bc82ca92f90a0f0fd02d')
        imageData.append('image',event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            console.log(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input  {...register("example")} placeholder='Enter Name' />
            <br/>
            <input {...register("exampleRequired", { required: true })} placeholder='Enter Price' />
            {errors.exampleRequired && <span>This field is required</span>}
            <br/>
            <input type="text" placeholder='Enter Weight'/>
            <br/>
            <input type="file" onChange={handleImageUpload} />
            <br/>
            <input type="submit" />
            </form>
        </div>
    );
};

export default Admin;