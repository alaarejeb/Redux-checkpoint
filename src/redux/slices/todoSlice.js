import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoSlice=createSlice({
    name:"todo",
    initialState:[
        {description:"descrip" ,id:uuidv4() ,isDone:false},
        {description:"todo2" ,id:uuidv4() ,isDone:false},
    ],
    reducers:{
        add:(state,action)=>[...state,{description:action.payload,
        id:uuidv4(),
        isDone:false}],
        check:(state,action)=>state.map(el=>(el.id==action.payload)?{...el,isDone:!el.isDone}:el)
    }
});

export default todoSlice.reducer
export const {add,check}=todoSlice.actions