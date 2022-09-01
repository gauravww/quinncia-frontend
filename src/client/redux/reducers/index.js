import { createSlice } from "@reduxjs/toolkit"

export const photoList = createSlice({
  name: 'photoList',
  initialState: [],
  reducers: {
    getPhoto: () => { },
    addPhoto: () => { },
    removePhoto: () => { },
    updatePhotoInfo: () => { },
    getPhotoById: () => { },
    setPhoto: (state, action) => {
      const photoList = action.payload;
      return { ...state.photoList, photoList }
    }
  },
})

// Action creators are generated for each case reducer function
export const { getPhoto, setPhoto, addPhoto, removePhoto, updatePhotoInfo, getPhotoById } = photoList.actions

export default photoList.reducer
