import style from "./formAddEmail.module.scss";
import { useContext } from "react";
import { Input } from "../../../Form/Input";
import { InputPassword } from "../../../Form/InputPassword";
import { ClientContext } from "../../../../providers/ClientContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema } from "../emailSchema";

export const FormAddEmail = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(emailSchema),
    });

    const {
        createEmail,
    } = useContext(ClientContext);

    const submit = (formData) => {
        createEmail(formData);
    };

    return (
        <form className={style.formContainer} onSubmit={handleSubmit(submit)}>
            <h3 className="title3">Adicionar novo email:</h3>
            <div className={style.formDiv}>
                <Input
                    type="email"
                    id="Email"
                    placeholder="Insira um email"
                    {...register("email")}
                    error={errors.email}
                    autoComplete="off"
                />
                <InputPassword
                    id="Password"
                    placeholder="Insira uma senha"
                    {...register("password")}
                    error={errors.password}
                    autoComplete="off"
                />
            </div>
            <button type="submit" className="btn-md">
                Adicionar
            </button>
        </form>
    );
};