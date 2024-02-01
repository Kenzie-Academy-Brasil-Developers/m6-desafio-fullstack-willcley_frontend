import { createContext, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();

    const endpoint = window.location.pathname;

    const userLogin = async (formData) => {
        try {
            const { data } = await api.post("/login", formData);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@CLIENT:ID", data.client.id);
            localStorage.setItem("@CLIENT:NAME", data.client.fullname);
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            console.log(error.message);
        }
    };

    const userRegister = async (formData) => {
        formData.phones = `[${formData.phones}]`
        try {
            await api.post("/clients", formData);
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        } catch (error) {
            console.log(error);
        };
    };

    const logout = () => {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@CLIENT:ID");
        localStorage.removeItem("@CLIENT:NAME");
        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };

    return (
        <UserContext.Provider value={{
            endpoint,
            userLogin,
            userRegister,
            logout,
        }}>
            {children}
        </UserContext.Provider>
    );
};