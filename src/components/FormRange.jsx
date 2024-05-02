import React from 'react'
import { useState } from 'react'
import { formatPrice } from '../utils'

const FormRange = ({label,name,size,price}) => {
    const step =1000;
    const maxPrice = 1000000;
    const [selectPrice,setSelectedPrice] = useState(price|| maxPrice);
  return (
    <div className='form-control'>
        <label htmlFor={name} className='label cursor-pointer'>
            <span className='label-text capitalize'>{label}</span>
            <span>{formatPrice(selectPrice)}</span>
        </label>
        <input 
        type='range' 
        min={0} max={maxPrice} 
        value={selectPrice} 
        onChange={(e)=>setSelectedPrice(e.target.value)} 
        step={step} 
        className={`range range-primary ${size}`} />
    </div>
  )
}

export default FormRange;