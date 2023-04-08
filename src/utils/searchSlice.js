import { createSlice } from "@reduxjs/toolkit";


const searchSlice=createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
            // state={...action.payload,...state} ideally this expression should wrok but it is not working in this case the below one is working in this case of merging two objects
            state=Object.assign(state,action.payload)
        }
    }
})

export const{cacheResults}=searchSlice.actions
export default searchSlice.reducer