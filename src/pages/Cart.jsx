import {useSelector} from "react-redux";
import { CartItemList,SectionTitle,CartTotals } from "../components";
import { Link } from "react-router-dom";


const Cart = ()=>{
    // const user = null;
    const numItemsInCart = useSelector((state)=>state.cartState.numItemsInCart);
    const user  = useSelector((state)=>state.userState.user);
    if(numItemsInCart ==0){
        return <SectionTitle  text={"No items added to Cart"} />
    }
    return(
       <>
        <SectionTitle text={"Shopping Cart"} />
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
                <CartItemList/>
            </div>
            <div className="lg:col-span-4 lg:pl-4">
                <CartTotals/>
                {user?(<Link to={"/checkout"} className="btn btn-primary btn-block mt-8" >Proceed To Checkout</Link>):
                (<Link to={"/login"} className="btn btn-primary btn-block mt-8" >Login</Link>)}
            </div>
        </div>
       </>
    )
}
export default Cart;