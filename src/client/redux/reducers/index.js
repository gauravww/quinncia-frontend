import { createSlice } from "@reduxjs/toolkit"

export const photoSlice = createSlice({
  name: 'photo',
  initialState:[],
  reducers: {
    getPhoto: () => {},
    createPhoto:()=>{},
    deletePhoto:()=>{},
    updatePhoto:()=>{},
    setPhoto: (state, action) => {
      const PhotoData = action.payload;
      return {...state.PhotoData, PhotoData}
    }
  },
})

// Action creators are generated for each case reducer function
export const { getPhoto, setPhoto, createPhoto, deletePhoto, updatePhoto } = photoSlice.actions

export default photoSlice.reducer
