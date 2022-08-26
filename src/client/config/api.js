export const SERVER_HOST = "http://localhost:3000/api";

const APP_APIS = {
    PHOTO_MANY: "/photo/many",
};

Object.keys(APP_APIS).map((key) => {
    APP_APIS[key] = `${SERVER_HOST}${APP_APIS[key]}`;
    return null;
});

export const API = { ...APP_APIS };