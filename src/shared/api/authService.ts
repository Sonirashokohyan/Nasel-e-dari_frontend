
import { axiosInstance, axiosInstance2 } from "./axiosInstance";
import qs from 'qs' // Import qs to handle URL-encoded data


interface SignupData {
    username: string;
    full_name: string;
    email: string;
    password: string;
}

export const signupUser = async (userData: SignupData) => {
    try {
        const response = await axiosInstance.post("/auth/", userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};


interface LoginData {
    username: string;
    password: string;
}

export const loginUser = async (data: LoginData) => {
    try {
        const response = await axiosInstance2.post("/auth/login",
            qs.stringify({
                grant_type: "password", // Add grant_type as per the curl example
                username: data.username,
                password: data.password,
            }))
        const token = response.data.access_token;
        if (token) {
            localStorage.setItem("token", token);
        }
        return response.data;
    } catch (error) {
        throw error;
    }
}




export const logout = () => {
    localStorage.removeItem("token"); // Remove token from storage
};
