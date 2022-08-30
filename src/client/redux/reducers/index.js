import { createSlice } from "@reduxjs/toolkit"

export const photoList = createSlice({
  name: 'photoList',
  initialState: [],
  reducers: {
    getPhoto: () => { },
    addPhoto: () => { },
    deletePhoto: () => { },
    updatePhoto: () => { },
    getPhotoById: () => { },
    setPhoto: (state, action) => {
      const photoList = action.payload;
      return { ...state.photoList, photoList }
    }
  },
})

// Action creators are generated for each case reducer function
export const { getPhoto, setPhoto, addPhoto, deletePhoto, updatePhoto } = photoList.actions

export default photoList.reducer
