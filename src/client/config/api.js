export const SERVER_HOST = "http://localhost:3000/api";
// http://localhost:3000/api/photo/PIFikGKHI6PZx5289k2QlUol8KcyHXMD
const APP_APIS = {
  PHOTO_MANY: "/photo/many",
  PHOTO_BY_ID: "/photo",
  ADD_PHOTO: "/photo",
};

Object.keys(APP_APIS).map((key) => {
  APP_APIS[key] = `${SERVER_HOST}${APP_APIS[key]}`;
  return null;
});

export const API = { ...APP_APIS };
