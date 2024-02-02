import style from "./updateContactEmails.module.scss";
import { useContext, useRef, useState } from "react";
import { ClientContext } from "../../../../../providers/ClientContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../contactSchema";
import { Input } from "../../../../Form/Input";

export const UpdateContactEmails = ({ contactId }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const {
        contacts,
        updateContact,
    } = useContext(ClientContext);

    const submit = (formData) => {
        const contact = contacts.filter((contact) => contact.id === contactId)[0];
        const emails = contact.emails;
        updateContact({
            emails: [...emails, formData.email],
        }, contactId);
    };

    return (
        <form className={style.updateContactEmails} onSubmit={handleSubmit(submit)}>
            <Input
                type="email"
                id="Email"
                placeholder="Insira um email"
                {...register("email")}
                error={errors.email}
                autoComplete="off"
            />
            <button type="submit" className="btn-sm">
                Adicionar
            </button>
        </form>
    );
};