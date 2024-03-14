import { createContext, useState } from "react";
import { api } from "../services/api";

export const ClientContext = createContext({});

export const ClientProvider = ({ children }) => {
    const token = localStorage.getItem("@TOKEN");
    const clientId = localStorage.getItem("@CLIENT:ID");
    const [clientEmails, setClientEmails] = useState([]);
    const [clientPhones, setClientPhones] = useState([]);
    const [contacts, setContacts] = useState([]);

    const getClient = async () => {
        try {
            const { data } = await api.get(`/clients/${clientId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setClientEmails(data.emails);
            setClientPhones(data.phones);
        } catch (error) {
            console.log(error.message);
        };
    };

    const updateClient = async (formData) => {
        try {
            const { data } = await api.patch(
                `/clients/${clientId}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            localStorage.setItem("@CLIENT:NAME", data.fullname);
            setClientPhones(data.phones);
        } catch (error) {
            console.log(error.message);
        }
    };

    const deleteClient = async () => {
        try {
            await api.delete(
                `/clients/${clientId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (error) {
            console.log(error.message);
        }
    };

    const getEmails = async () => {
        try {
            const { data } = await api.get(
                `/clients/${clientId}/emails`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setClientEmails(data);
        } catch (error) {
            console.log(error.message);
        };
    };

    const createEmail = async (formData) => {
        try {
            console.log(formData);
            await api.post(
                `/clients/${clientId}/emails`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            await getEmails();
        } catch (error) {
            console.log(error.message);
        };
    };

    const updateEmail = async (formData, emailId) => {
        try {
            await api.patch(
                `/clients/${clientId}/emails/${emailId}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            await getEmails();
        } catch (error) {
            console.log(error.message);
        };
    };

    const deleteEmail = async (emailId) => {
        try {
            await api.delete(
                `/clients/${clientId}/emails/${emailId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            await getEmails();
        } catch (error) {
            console.log(error.message);
        };
    };

    const getContacts = async () => {
        try {
            const { data } = await api.get(
                `/contacts/clients/${clientId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setContacts(data);
        } catch (error) {
            console.log(error.message);
        };
    };

    const createContact = async (formData) => {
        try {
            await api.post(
                "/contacts",
                {
                    ...formData,
                    clientId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            await getContacts();
        } catch (error) {
            console.log(error.message);
        };
    };

    const updateContact = async (formData, contactId) => {
        try {
            await api.patch(
                `/contacts/${contactId}/clients/${clientId}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            await getContacts();
        } catch (error) {
            console.log(error.message);
        };
    };

    const deleteContact = async (contactId) => {
        try {
            await api.delete(
                `/contacts/${contactId}/clients/${clientId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            await getContacts();
        } catch (error) {
            console.log(error.message);
        };
    };

    return (
        <ClientContext.Provider 
            value={{
                clientEmails,
                clientPhones,
                contacts,
                getClient,
                updateClient,
                deleteClient,
                getEmails,
                createEmail,
                updateEmail,
                deleteEmail,
                getContacts,
                createContact,
                updateContact,
                deleteContact,
            }}
        >
            {children}
        </ClientContext.Provider>
    );
};