import style from "./updateContactPhones.module.scss";
import { useContext, useEffect } from "react";
import { ClientContext } from "../../../../../providers/ClientContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../contactSchema";
import { Input } from "../../../../Form/Input";

export const UpdateContactPhones = ({ contactId }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const {
        contacts,
        getContacts,
        updateContact,
    } = useContext(ClientContext);

    const submit = (formData) => {
        const contact = contacts.filter((contact) => contact.id === contactId)[0];
        const phones = contact.phones;
        updateContact({
            phones: `[${[...phones, Number(formData.phones)]}]`
        }, contactId);
    };

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <form className={style.updateContactPhones} onSubmit={handleSubmit(submit)}>
            <Input
                type="number"
                id="Phones"
                placeholder="Insira um número"
                {...register("phones")}
                error={errors.phones}
                autoComplete="off"
            />
            <button type="submit" className="btn-sm">
                Adicionar
            </button>
        </form>
    );
};