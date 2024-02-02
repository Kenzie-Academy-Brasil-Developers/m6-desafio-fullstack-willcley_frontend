import style from "./formExcludePhone.module.scss";
import { useContext } from "react";
import { ClientContext } from "../../../../providers/ClientContext";
import { useForm } from "react-hook-form";
import { Input } from "../../../Form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { perfilSchema } from "../perfilSchema";

export const FormExcludePhone = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(perfilSchema),
    });

    const {
        clientPhones,
        updateClient,
    } = useContext(ClientContext);

    const submit = (formData) => {
        const phones = `${clientPhones.pop(formData.phonesExclude)}`;
        updateClient({ phones });
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h3 className="title3">Digite o número que deseja excluir:</h3>
            <Input
                type="number"
                id="Phone"
                placeholder="Digite um número"
                {...register("phonesExlude")}
                error={errors.message}
                autoComplete="off"
            />
            <button className={`${style.btnExclude} btn-md`}>
                Excluir Número
            </button>
        </form>
    );
};