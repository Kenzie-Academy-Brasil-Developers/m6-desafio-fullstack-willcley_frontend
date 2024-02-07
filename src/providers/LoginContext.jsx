import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { QueryClientContext } from "@tanstack/react-query";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
    const navigate = useNavigate();
    const endpoint = window.location.pathname;

    const {
        getClient,
        getContacts,
    } = useContext(QueryClientContext);

    const userLogin = async (formData) => {
        try {
            const { data } = await api.post("/login", formData);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@CLIENT:ID", data.client.id);
            localStorage.setItem("@CLIENT:NAME", data.client.fullname);
            await getClient;
            await getContacts;
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
        <LoginContext.Provider value={{
            endpoint,
            userLogin,
            userRegister,
            logout,
        }}>
            {children}
        </LoginContext.Provider>
    );
};