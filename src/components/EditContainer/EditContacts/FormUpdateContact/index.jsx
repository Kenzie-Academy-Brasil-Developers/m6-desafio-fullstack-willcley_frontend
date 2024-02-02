import style from "./formUpdateContact.module.scss";
import { useContext, useEffect, useState } from "react";
import { ClientContext } from "../../../../providers/ClientContext";
import { useForm } from "react-hook-form";
import { Input } from "../../../Form/Input";
import { SelectContact } from "../../../Form/SelectContact";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../contactSchema";
import { UpdateContactEmails } from "./UpdateContactEmails";
import { UpdateContactPhones } from "./UpdateContactPhones";

export const FormUpdateContact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const {
        getContacts,
        updateContact,
    } = useContext(ClientContext);

    const [contactId, setContactId] = useState(null);

    const submit = (formData) => {
        updateContact(formData, contactId);
    };

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <div>
            <form className={style.formContainer} onSubmit={handleSubmit(submit)}>
                <h3 className="title3">Editar contato existente:</h3>
                <SelectContact
                    id="UpdateContact"
                    onChange={(e) => setContactId(e.target.value)}
                />
                <Input
                    type="name"
                    id="Fullname"
                    placeholder="Insira um nome"
                    {...register("fullname")}
                    error={errors.message}
                    autoComplete="off"
                />
                <button className="btn-md">
                    Atualizar
                </button>
            </form>
            <UpdateContactEmails contactId={contactId} />
            <UpdateContactPhones contactId={contactId} />
        </div>
    );
};