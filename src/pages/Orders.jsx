import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import {
    OrderList,
    PaginatioContainer,
    SectionTitle
} from '../components';




export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if(!user){
        redirect("/login");
    }
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    try{
        const response = await customFetch.get('/orders',{
            params,
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        })

        return {orders:response.data.data,meta:response.data.meta}
    }
    catch(error){
        console.log(error);
        const errorMessage =
          error?.response?.data?.error?.message ||
          'there was an error';
        toast.error(errorMessage);
        if (error?.response?.status === 401 || 403) return redirect('/login');
        return null;
    }
  };

const Orders = () => {
    const data = useLoaderData();
    if(data.meta.pagination.total <0){
        <SectionTitle text={"No oders"} />
    }
  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrderList/>
      <PaginatioContainer/>
    </>
  );
};
export default Orders;
