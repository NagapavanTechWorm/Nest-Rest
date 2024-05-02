import { useLoaderData } from 'react-router-dom';
import { formatPrice, customFetch,generateAmountOptions } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/Cart/cartSlice';

export const loader = async({params})=>{
    const response = await customFetch(`/products/${params.id}`);
    return {products:response.data.data};
}


const SingleProduct = ()=>{
    const {products} = useLoaderData();
    const { image, title, price, description, colors, company } = products.attributes;
    const dollarsAmount = formatPrice(price);
    const [productColor,setProductColor] = useState(colors[0]);
    const [amount,setAmount] = useState(1);

    const cartProduct = {
        cartId:products.id+productColor,
        productId:products.id,
        image,
        title,
        price,
        company,
        productColor,
        amount
    }

    const dispatch = useDispatch();

    const addToCart = ()=>{
        dispatch(addItem({product:cartProduct}))
    }


    const handleAmt = (e)=>{
        setAmount(parseInt(e.target.value));
    }
    return(
        <section>
            <div className='text-md breadcrumbs'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>    
            </div>
            <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
                <img src={image} className='h-[59%] object-cover rounded-lg lg:w-full' />
                <div>
                    <h1 className='capitalize text-3xl font-bold'>{title}</h1>
                    <h4 className='text-xl text-neutral-content font-bold mt-2'>{company}</h4>
                    <p className='mt-3 text-xl'>{dollarsAmount}</p>
                    <p className='mt-6 leading-8'>{description}</p>
                    <div className='mt-6'>
                        <h4 className='text-md font-medium tracking-wider capitalize'>colors</h4>
                        <div className='mt-2'>
                            {colors.map((color)=>{
                                return <button className={`badge w-6 mr-2 ${color==productColor && 'border-2 border-secondary'}`} style={{backgroundColor:color}}
                                onClick={()=>setProductColor(color)}
                                 type='button' key={color}></button>
                            })}
                        </div>
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label' htmlFor='amount'>
                            <h4 className='text-md font-medium -tracking-wider capitalize'>
                                amount
                            </h4>
                        </label>
                        <select
                            className='select select-secondary select-bordered select-md'
                            id='amount'
                            value={amount}
                            onChange={handleAmt}
                        >
                        {generateAmountOptions(20)}
                        </select>
                    </div>
                    <div className='mt-10'>
            <button className='btn btn-secondary btn-md' onClick={addToCart} >
              Add to bag
            </button>
          </div>
                </div>
            </div>
        </section>
    )
}
export default SingleProduct;