import style from "./editPerfil.module.scss";
import { useContext, useEffect } from "react";
import { ClientContext } from "../../../providers/ClientContext.jsx";
import { LoginContext } from "../../../providers/LoginContext.jsx";
import { InputEdit } from "../../Form/InputEdit";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { perfilSchema } from "./perfilSchema.js";
import { InfoList } from "../../Container/InfoList";
import { FormAddPhone } from "./FormAddPhone/index.jsx";
import { FormExcludePhone } from "./FormExcludePhone/index.jsx";

export const EditPerfil = () => {
    const userPerfilImg = null;
    const clientName = localStorage.getItem("@CLIENT:NAME");
    const userNameLetter = clientName[0].toUpperCase();

    const {
        clientPhones,
        getClient,
        updateClient,
        deleteClient,
    } = useContext(ClientContext);

    const {
        logout,
    } = useContext(LoginContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(perfilSchema),
    });

    const submitName = (formData) => {
        updateClient({ fullname: formData.fullname});
    };

    useEffect(() => {
        getClient();
    }, []);

    return (
        <section className={style.editPerfilContainer}>
            <h1 className="title1">Editar Perfil</h1>
            <div>
                <h2 className="title2">Perfil:</h2>
                <div className={style.perfil}>
                    <div className={style.perfilImg}>
                        {userPerfilImg ? (
                            <img src={userPerfilImg} alt={clientName} />
                        ) : (
                            <p>{userNameLetter}</p>
                        )}
                    </div>
                    <form className={style.perfilForm} onSubmit={handleSubmit(submitName)}>
                        <h3 className="title2">{clientName}</h3>
                        <p className="text1">Deseja mudar seu nome?</p>
                        <InputEdit
                            type="name"
                            id="Fullname"
                            placeholder={clientName}
                            {...register("fullname")}
                            error={errors.fullname}
                            autoComplete="off"
                        />
                        <button type="submit" className="btn-sm">
                            Mudar
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <h2 className="title2">Meus Telefones:</h2>
                <div className={style.editPhones}>
                    <InfoList title="Lista:" list={clientPhones} />
                    <div className={style.phoneForms}>
                        <FormAddPhone />
                        <FormExcludePhone />
                    </div>
                </div>
            </div>
            <button onClick={() => {
                deleteClient();
                logout();
            }} className="btn-sm">
                Ecluir Conta
            </button>
        </section>
    );
};