import { createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from '../pages';
import { ErrorElement } from "../components";
import { loader as landingLoader } from "../pages/Landing";
import { loader as SingleProductLoader } from "../pages/SingleProduct";
import {loader as productLoader} from "../pages/Products";
import {action as RegisterAction} from "../pages/Register";
import {action as LoginAction} from "../pages/Login";
import {loader as CkeckOutAction} from "../pages/Checkout";
import {action as CheckOutFormAction} from "../components/CheckoutForm";
import {loader as OrderLoader} from "../pages/Orders";
import store from "../../store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing/>,
        errorElement:<ErrorElement/>,
        loader:landingLoader
      },
      {
        path: "/products",
        element: <Products/>,
        loader:productLoader
      },
      {
        path: "/products/:id",  // Fix the typo here
        element: <SingleProduct/>,
        errorElement:<ErrorElement/>,
        loader:SingleProductLoader
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/about",  // Fix the case here
        element: <About/>
      },
      {
        path: "/checkout",
        element: <Checkout/>,
        loader:CkeckOutAction(store),
        action:CheckOutFormAction(store)
      },
      {
        path: "/orders",
        element: <Orders/>,
        loader:OrderLoader(store)
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <Error/>,
    action:LoginAction(store)
  },
  {
    path: "/register",
    element: <Register/>,
    errorElement: <Error/>,
    action:RegisterAction
  }
]);

export default router;
