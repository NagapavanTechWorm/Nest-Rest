import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './src/features/Cart/cartSlice';
import  userReducer from './src/features/User/userSlice';

const store = configureStore({
    reducer:{
        cartState:cartReducer,
        userState:userReducer
    }
})

export default store;