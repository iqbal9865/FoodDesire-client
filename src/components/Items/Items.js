import React from 'react';
import { useHistory } from 'react-router';

const Items = ({event}) => {
    const {_id} = event;
    const history = useHistory()
    const style = {
        backgroundColor: '#90EE90'
    }
    const imageStyle = {
        height: '300px',
        marginTop:'30px',
        borderRadius: '10px'
    }
    const handleProduct = () => {
        console.log(event._id)
        history.push(`/checkout/${_id}`)
    }
    return (
        <div style={style} className='col-md-4' >
            <img style={imageStyle} src={event.imageURL} alt="image loading..."/>
            <h4 style={{color:'black'}}>{event.name}</h4>
            <div className='d-flex justify-content-evenly my-2'>
                <h3>${event.price}</h3>
                <button onClick={() => handleProduct(_id)} className='btn btn-success'>BUY NOW</button>
            </div>
            
        </div>
    );
};

export default Items;