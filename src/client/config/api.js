export const SERVER_HOST = "http://localhost:3000/api";
// http://localhost:3000/api/photo/PIFikGKHI6PZx5289k2QlUol8KcyHXMD
// http://localhost:3000/api/photo/DEMqK7qUz3IfWmc5b2MewmhPWk5txKXj
const APP_APIS = {
  PHOTO_MANY: "/photo/many",
  PHOTO_BY_ID: "/photo",
  REMOVE_PHOTO_BY_ID: "/photo",
  ADD_PHOTO: "/photo",
  UPDATE_PHOTO_INFO:"/photo",
  COMMENT_BY_ID:'/comment',
  TAG:'/tag'
  
};

Object.keys(APP_APIS).map((key) => {
  APP_APIS[key] = `${SERVER_HOST}${APP_APIS[key]}`;
  return null;
});

export const API = { ...APP_APIS };


