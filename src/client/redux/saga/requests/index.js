import axios from "axios";
import { API } from "../../../config/api";

export function requestGetPhoto() {
  // return axios.request({
  //   method: "get",
  //   // url: "https://my-json-server.typicode.com/atothey/demo/user"
  //   url:"http://localhost:3000/api/photo/many"
  // })
  return axios.request({
    method: "get",
    // url: "https://my-json-server.typicode.com/atothey/demo/user"
    url: API.PHOTO_MANY
  })
  // return axios.API.PHOTO_MANY;
}

export function requestGetPhotoBYId(id) {
  return axios.request({
    method: "get",
    url: `${API.PHOTO_BY_ID}/${id}`,
    // data:id ,
  })
}

export function requestAddPhoto(data) {
  console.log(data, "data in request");
  const formdata = new FormData();
  formdata.append("profile", "erwerew");
  // formdata.append("likes", data.like);
  // formdata.append("tagIDs", "1");
  // formdata.append("commentIDs", data.comments);
  console.log(Object.fromEntries(formData))

  // console.log(formdata,'=============formdata')
  // var requestOptions = {
  //   method: 'POST',
  //   body: formdata,
  //   redirect: 'follow'
  // };
  
  // fetch("http://localhost:3000/api/photo", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
}




// export function requestDeleteUser(data) {
//   return axios.request({
//     method: "delete",
//     url:"http://localhost:8081/users/" + data.id,
//     // data:data ,
//   })
// }


// axios({
//   method: 'post',
//   url: 'myurl',
//   data: bodyFormData,
//   headers: {'Content-Type': 'multipart/form-data' }
//   })
  // .then(function (response) {
  //     //handle success
  //     console.log(response);
  // })
  // .catch(function (response) {
  //     //handle error
  //     console.log(response);
  // });

//   var axios = require('axios');
// var FormData = require('form-data');
// var fs = require('fs');
// var data = new FormData();
// data.append('profile', fs.createReadStream('/home/webiwork501/Pictures/Screenshot from 2022-07-21 12-25-11.png'));
// data.append('likes', '1');
// data.append('tagIDs', '1');
// data.append('commentIDs', '1');

// var config = {
//   method: 'post',
//   url: 'http://localhost:3000/api/photo',
//   headers: { 
//     ...data.getHeaders()
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
