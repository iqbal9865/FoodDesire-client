import React from 'react';

const Items = ({event}) => {
    const style = {
        backgroundColor: '#90EE90'
    }
    const imageStyle ={
        height: '300px',
        marginTop:'30px',
        borderRadius: '10px'
    }
    return (
        <div style={style} className='col-md-4' >
            <img style={imageStyle} src={event.imageURL} alt="image loading..."/>
            <h4 style={{color:'black'}}>{event.name}</h4>
            <div className='d-flex justify-content-evenly my-2'>
                <h3>${event.price}</h3>
                <button className='btn btn-success'>BUY NOW</button>
            </div>
            
        </div>
    );
};

export default Items;