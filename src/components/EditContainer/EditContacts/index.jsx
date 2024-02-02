import style from "./editContacts.module.scss";
import { EditContactList } from "./EditContactList";
import { FormAddContact } from "./FormAddContact";
import { FormUpdateContact } from "./FormUpdateContact";

export const EditContacts = () => {
    return (
        <section className={style.editContactsContainer}>
            <h1 className="title1">Editar Contatos:</h1>
            <div className={style.formsContainer}>
                <FormAddContact />
                <FormUpdateContact />
            </div>
            <EditContactList />
        </section>
    )
};