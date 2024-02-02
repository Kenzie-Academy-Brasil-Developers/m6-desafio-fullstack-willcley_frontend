import style from "./contactCard.module.scss";
import { InfoList } from "../../InfoList";

export const ContactCard = ({ contact }) => {
    return (
        <li className={style.contactCard}>
            <div className={style.contactPerfil}>
                <div className={style.contactImg}>
                    {contact.fullname[0].toUpperCase()}
                </div>
                <h3>{contact.fullname}</h3>
            </div>
            <div className={style.contactInfos}>
                <InfoList title="emails:" list={contact.emails} />
                <InfoList title="telefones:" list={contact.phones} />
            </div>
        </li>
    );
};