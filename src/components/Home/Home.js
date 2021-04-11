import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';

const Home = () => {
    const [events, setEvents] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5055/products')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])
    return (
        <div className='row'>
           {
               events.map(event => <Items event={event} key={event._id}></Items>)
           }
        </div>
    );
};

export default Home;