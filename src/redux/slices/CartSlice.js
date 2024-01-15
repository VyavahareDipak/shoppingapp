import { createSlice } from "@reduxjs/toolkit";

const initialState ={

}
export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        //reducer func take 2 inputs state and acton. state is value of initialState.
        //action.payload is the value pass to reducer function.
         add:(state,action)=>{
            state.push(action.payload);
         },
         remove:(state,action)=>{
           return state.filter((item)=> item.id!=action.payload);
         },
    }
});

export const {add,remove} = CartSlice.actions ;
export default CartSlice.reducer ; 