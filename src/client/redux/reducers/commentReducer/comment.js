import { createSlice } from "@reduxjs/toolkit"

export const comment = createSlice({
  name: 'comment',
  initialState:{
    comments: []
},
  reducers: {
    createComment: ()=>{},
    getCommentById: () => { },
    appendComment : (state,action) =>{
       state.comments.push(action.payload)
    },

    setComment: (state, action) => {
      if(action.payload !== undefined){
        state.comments =action.payload
      }
    
    }
  },
})

// Action creators are generated for each case reducer function
export const { setComment, getCommentById,appendComment,createComment} = comment.actions

export default comment.reducer

