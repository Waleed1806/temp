import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

// Check if the user is logged in and if the isAdmin property exists
const persistData = JSON.parse(localStorage.getItem("persist:root"));
const userToken = persistData && persistData.user && persistData.user.currentUser ? JSON.parse(persistData.user).currentUser : null;
const TOKEN = userToken ? userToken.token : null;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${TOKEN}` }
});
