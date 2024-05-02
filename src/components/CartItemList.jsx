import { useSelector,useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../features/Cart/cartSlice';

const CartItemsList = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartState.cartItems);
  const clearCartItems = () => {
    dispatch(clearCart());
  };
  return (
    <>
      {cartItems.map((item) => {
        return  <CartItem key={item.cartId} cartItem={item} />
      })}
      <button className='mt-2 link link-primary link-hover text-sm' onClick={clearCartItems}>Clear</button>
    </>
  );
};
export default CartItemsList;





