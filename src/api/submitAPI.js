import { api, setHeaders } from "./api.js";

export const submitApi = {
    async createMember(data) {
        try {
            const url = "/member";
            return await api.post(url, data, setHeaders());
        } catch (error) {
            console.error("Error during creating user:", error);
            return error;
        }
    },
};