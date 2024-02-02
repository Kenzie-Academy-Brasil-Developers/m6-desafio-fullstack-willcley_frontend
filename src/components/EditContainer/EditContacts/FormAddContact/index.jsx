import style from "./formAddContact.module.scss";
import { useContext } from "react";
import { Input } from "../../../Form/Input";
import { ClientContext } from "../../../../providers/ClientContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../contactSchema";

export const FormAddContact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const {
        createContact,
    } = useContext(ClientContext);

    const submit = (formData) => {
        createContact({
            fullname: formData.fullname,
            emails: [formData.email],
            phones: `[${Number(formData.phones)}]`
        });
    };

    return (
        <form className={style.formContainer} onSubmit={handleSubmit(submit)}>
            <h3 className="title3">Adicionar novo contato:</h3>
            <div className={style.formDiv}>
                <Input
                    type="name"
                    id="Fullname"
                    placeholder="Insira um nome"
                    {...register("fullname")}
                    error={errors.fullname}
                    autoComplete="off"
                />
                <Input
                    type="email"
                    id="Email"
                    placeholder="Insira um email"
                    {...register("email")}
                    error={errors.email}
                    autoComplete="off"
                />
                <Input
                    type="number"
                    id="Phones"
                    placeholder="Insira um número"
                    {...register("phones")}
                    error={errors.phones}
                    autoComplete="off"
                />
            </div>
            <button type="submit" className="btn-md">
                Adicionar
            </button>
        </form>
    );
};