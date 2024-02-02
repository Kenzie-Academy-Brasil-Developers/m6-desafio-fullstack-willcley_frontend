import { useForm } from "react-hook-form";
import { Input } from "../../../Form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { perfilSchema } from "../perfilSchema";

export const FormAddPhone = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(perfilSchema),
    });

    const submit = (formData) => {
        const phones = `${clientPhones.push(formData.phones)}`;
        updateClient({ phones });
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h3 className="title3">Adicione um novo número:</h3>
            <Input
                type="number"
                id="Phones"
                placeholder="Digite um número"
                {...register("phones")}
                error={errors.phones}
                autoComplete="off"
            />
            <button className="btn-md" type="submit">
                Adicionar
            </button>
        </form>
    );
};