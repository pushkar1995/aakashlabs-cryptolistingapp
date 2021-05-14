import React from 'react'
import './currency.css'

const Currency = ({ name,image,type,exchangeRate }) => {
    return (
        <div className='currency-container'>
           <div className='currency-row'>
             <div className='currency'>
                <h1>{name}</h1>
                <p className='currency-type'>{type}</p>
                <img src={image} alt='crypto' />
             </div>
             <div className='currency-data'>
                <p className='currency-price'>${exchangeRate}</p>
             </div>   
           </div> 
        </div>
    )
}

export default Currency
