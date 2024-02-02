import style from "./formUpdateEmail.module.scss";
import { useContext, useState } from "react";
import { ClientContext } from "../../../../providers/ClientContext";
import { useForm } from "react-hook-form";
import { InputPassword } from "../../../Form/InputPassword";
import { SelectEmail } from "../../../Form/SelectEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema } from "../emailSchema";

export const FormUpdateEmail = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(emailSchema),
    });

    const {
        clientEmails,
        updateEmail,
    } = useContext(ClientContext);

    const [emailId, setEmailId] = useState(clientEmails[0].id);

    const submit = (formData) => {
        updateEmail(
            { password: formData.updatePassword },
            emailId
        );
    };

    return (
        <form className={style.formContainer} onSubmit={handleSubmit(submit)}>
            <h3 className="title3">Trocar senha de email:</h3>
            <SelectEmail
                id="UpdatePassword"
                onChange={(e) => setEmailId(e.target.value)}
            />
            <InputPassword
                id="Password"
                placeholder="Insira uma senha"
                {...register("updatePassword")}
                error={errors.password}
                autoComplete="off"
            />
            <button className="btn-md">
                Atualizar
            </button>
        </form>
    );
};