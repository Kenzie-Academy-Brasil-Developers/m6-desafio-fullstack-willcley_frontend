import axios from "axios";

export const api = axios.create({
    baseURL: "https://gerenciador-de-contatos-api.onrender.com",
    timeout: 8 * 1000,
});