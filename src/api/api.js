import axios from "axios";
const baseURL = process.env.REACT_APP_SERVER_URL;

export const setHeaders = () => {
    return {
        headers: {
            "x-auth-token": process.env.REACT_APP_TOKEN,
        },
    };
};

export const api = axios.create({
    baseURL: baseURL,
});