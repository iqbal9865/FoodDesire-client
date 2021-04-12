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
                events.length === 0 && <div class="d-flex justify-content-center">
                <div class="spinner-border text-success" role="status">
                  <span class="sr-only"></span>
                </div>
              </div>
            }
           {
               events.map(event => <Items event={event} key={event._id}></Items>)
           }
        </div>
    );
};

export default Home;