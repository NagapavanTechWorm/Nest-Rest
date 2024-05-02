import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const themes = {
    winter:"winter",
    dim:"dim"
  }

  const getUserData = ()=>{
    return JSON.parse(localStorage.getItem('user'));
  }

  const getThemeFromLocalStorage = ()=>{
    const theme =  localStorage.getItem("theme") || themes.winter
    document.documentElement.setAttribute("data-theme",theme);
    return theme;
  }

const initialState = {
    user:getUserData(),
    theme:getThemeFromLocalStorage()
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loginUser:(state,action)=>{
            const user = {...action.payload,token:action.payload.jwt}
            state.user = user
            localStorage.setItem('user',JSON.stringify(user)) || null;
        },
        logoutUser:(state)=>{
            state.user = null;
            localStorage.removeItem('user');
        },
        toggleTheme:(state)=>{
            const {winter,dim} = themes;
            state.theme = state.theme===dim?winter:dim;
            document.documentElement.setAttribute("data-theme",state.theme);
            localStorage.setItem('theme',state.theme);
        }
    } 
})

export const {logoutUser,loginUser,toggleTheme} = userSlice.actions;

export default userSlice.reducer;