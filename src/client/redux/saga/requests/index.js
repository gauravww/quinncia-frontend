import axios from "axios";
import { API } from "../../../config/api";

export function requestGetPhoto() {
  return axios.request({
    method: "get",
    url: API.PHOTO_MANY
  })
  // return axios.API.PHOTO_MANY;
}

export function requestUpdatePhotoInfo(data) {
  return axios.request({
    method: "put",
    url: `${API.UPDATE_PHOTO_INFO}/${data.photoId}`,
    data: {
      "name":data.name,
      "commentIDs":data.comments,
      "likes":data.likes,
      "tagIDs":data.tags
      },
  })
}

export function requestGetPhotoBYId(id) {
  return axios.request({
    method: "get",
    url: `${API.PHOTO_BY_ID}/${id}`,
    // data:id ,
  })
}
export function requestDeletePhotoBYId(id) {
  return axios.request({
    method: "delete",
    url: `${API.REMOVE_PHOTO_BY_ID}/${id}`,
    // data:id ,
  })
}
export async function requestAddPhoto(data) {
  const formData = new FormData();
  formData.append("profile", data.file);
  formData.append("name", data.name);
   formData.append("photoUrl",data.file.name)


  try {
    axios.request({
      method: "POST",
      url: API.ADD_PHOTO,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },

    })
  } catch (error) {
  }

}

export  async function requestCommentById(ids) {
  let comments = []

 try {
  for (const element of ids){
    let res = await axios.request({
      method: "get",
      url: `${API.COMMENT_BY_ID}/${element}`,
    })
    if(res.status===200){
      comments.push(res.data.comment)
    }
  }

  
  return comments;
  
 } catch (error) {
  
  
 }
}

export async function requestCreateComment (data) {
  try {
    let res = await axios.request({
      method: "post",
      url: `${API.COMMENT_BY_ID}`,
       data:data
    })
    return res
    
  } catch (error) {
    
  }


}

// handleGetTagById


export async function requestGetTagById (data) {
  let  tags= []
  for (const element of data) {
    try {
      let res = await axios.request({
        method: "get",
        url: `${API.TAG}/${element}`,

      })
       tags.push(res.data.tag)
      
    } catch (error) {
    }
    

  }
  return tags




}



export async function requestCreateTag (data) {
   let tagIds = []
   let tags = []
  for (const element of data.tags) {
  let data = {name :element}

    try {
      let res = await axios.request({
        method: "post",
        url: `${API.TAG}`,
         data:data
      })
      tagIds.push(res.data.tag._id)
      tags.push(res.data.tag)
      
    } catch (error) {
      
    }

   }


    let addTag = { tagIDs: tagIds}
   try {
    let res = await axios.request({
      method: "put",
      url: `${API.ADD_PHOTO}/${data.photoId}/tags/attach`,
       data:addTag
    })
    tagIds.push(res.data.tag._id)
    tags.push(res.data.tag)
  } catch (error) {
    
  }


  return tags


  
 


}


