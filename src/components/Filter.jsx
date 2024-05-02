import React from 'react'
import { Link,Form,useLoaderData } from 'react-router-dom';
import Forminput from '../components/Forminput';
import FormSelect from '../components/FormSelect';
import FormRange from './FormRange';
import FormCheckBox from './FormCheckBox';


const Filter = () => {

  const {meta,params} = useLoaderData();
  const {search,company,category,shipping, price,order} = params;
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* Search */}
      <Forminput type='search' label='search product' name='search' size='input-sm' defaultValue={search} />
      {/* CATEGORIES */}
      <FormSelect label='select categories' name='categories' list={meta.categories} size='select-sm' defaultValue={category}  />
      {/* COMPANY */}
      <FormSelect label='select company' name='company' list={meta.companies} size='select-sm' defaultValue={company}  />
      {/* ORDER */}
      <FormSelect label='sort by' name='order' list={['a-z','z-a','high','low']} size='select-sm' defaultValue={order}  />
      {/* PRICE */}
      <FormRange name='price' label='select price' size='range-sm' price={price} />
      {/* SHIPPING */}
      <FormCheckBox name='shipping' label='free shipping' size='checkbox-sm' defaultValue={shipping} />
      {/* Button */}
      <button type='submit' className='btn  btn-primary btn-sm'>search</button>
      <Link to={"/products"} className='btn btn-accent btn-sm'>reset</Link>
    </Form>
  )
}

export default Filter;