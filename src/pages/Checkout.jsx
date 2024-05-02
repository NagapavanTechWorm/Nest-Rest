import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle,CartTotals } from "../components";
import { redirect } from "react-router-dom";

export const loader = (store) => {
    return () => {
        const user = store.getState().userState.user;
        if (!user) {
            return redirect('/login');
        }
        return null;
    };
};

const Checkout = ()=>{
    const CartTotal = useSelector((state)=>state.cartState.cartTotal);
    if(CartTotal===0) { 
        return <SectionTitle text={"Your cart is empty"} />
    }
    return(
        <>
            <SectionTitle text={"Place your order"} />
            <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
                <CheckoutForm/>
                <CartTotals/>
            </div>
        </>
    )
}
export default Checkout;