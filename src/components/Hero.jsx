import React from 'react'
import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';
const carouselImage = [hero1,hero2,hero3,hero4];

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center'>
        <div>
            <h1 className='max-w-2xl text-4xl font-bold tracking-tight'>
                We are Changing the way people Shop
            </h1>
            <p className='text-xl mt-3 pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div className='mt-5'>
                <Link to="/products" className='btn font-bold  btn-secondary'>Shop</Link>
            </div>
        </div>
        <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
            {carouselImage.map((item)=>{
                return(<div key={item} className='carousel-item'>
                    <img src={item} className='rounded-box h-full w-80 object-cover' />
                </div>)
            })}
        </div>
    </div>
  )
}

export default Hero