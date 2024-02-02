import style from "./registerForm.module.scss";
import { useContext } from "react";
import { LoginContext } from "../../../providers/LoginContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(registerSchema) });
    
    const { userRegister } = useContext(LoginContext);

    const submit = (formData) => {
        userRegister(formData);
    };

    return (
        <form className={style.containerForm} onSubmit={handleSubmit(submit)}>
            <div>
                <Input
                    type="name"
                    id="Fullname"
                    placeholder="Nome completo"
                    {...register("fullname")}
                    error={errors.fullname}
                    autoComplete="off"
                />
            </div>
            <div>
                <Input
                    type="number"
                    id="Phones"
                    placeholder="Número telefônico"
                    {...register("phones")}
                    error={errors.phones}
                    autoComplete="off"
                />
            </div>
            <div>
                <Input
                    type="email"
                    id="Email"
                    placeholder="Endereço de e-mail"
                    {...register("email")}
                    error={errors.email}
                    autoComplete="off"
                />
            </div>
            <InputPassword
                id="Password"
                placeholder="Senha"
                {...register("password")}
                error={errors.password}
                autoComplete="off"
            />
            <InputPassword
                id="ConfirPassword"
                placeholder="Confirme a senha"
                {...register("confirmPassword")}
                error={errors.confitmPassword}
                autoComplete="off"
            />
            <button className="btn-lg" type="submit">
                Cadastrar-se
            </button>
        </form>
    );
};