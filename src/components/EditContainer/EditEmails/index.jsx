import style from "./editEmails.module.scss";
import { EmailsList } from "./EmailsList";
import { FormAddEmail } from "./FormAddEmail";
import { FormUpdateEmail } from "./FormUpdateEmail";

export const EditEmails = () => {
    return (
        <section className={style.editEmailsContainer}>
            <h1 className="title1 ">Editar Emails</h1>
            <div>
                <h2 className="title2">Atualizar lista de emails:</h2>
                <div className={style.updateForms}>
                    <FormAddEmail />
                    <FormUpdateEmail />
                </div>
            </div>
            <div>
                <h2 className="title2">Lista de emails:</h2>
                <EmailsList />
            </div>
        </section>
    )
};