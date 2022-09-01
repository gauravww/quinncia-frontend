import { createSlice } from "@reduxjs/toolkit"

export const tag = createSlice({
  name: 'tag',
  initialState:{
    tags: []
},
  reducers: {
    createTag: ()=>{},
    getTagById: () => { },
    appendTag : (state,action) =>{
       state.tags= [...state.tags,...action.payload]
    },

    setTag: (state, action) => {
      if(action.payload !== undefined){
        state.tags =action.payload
      }
    
    }
  },
})

// Action creators are generated for each case reducer function
export const { createTag,setTag,getTagById,appendTag} = tag.actions

export default tag.reducer