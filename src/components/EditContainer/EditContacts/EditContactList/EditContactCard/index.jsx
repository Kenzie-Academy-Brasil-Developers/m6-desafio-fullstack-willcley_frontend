import style from "./editContactCard.module.scss";
import { ContactEmailCard } from "./ContactEmailCard";
import { ContactPhoneCard } from "./ContactPhoneCard";
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { ClientContext } from "../../../../../providers/ClientContext";

export const EditContactCard = ({ contact }) => {
    const userPerfilImg = null;
    const userNameLetter = contact.fullname[0].toUpperCase();
    const emails = contact.emails;
    const phones = contact.phones;

    const {
        deleteContact,
    } = useContext(ClientContext);

    const removeContact = () => {
        deleteContact(contact.id);
    };

    return (
        <li className={style.contactEditCard}>
            <div className={style.perfil}>
                <div className={style.perfilImg}>
                    {userPerfilImg ? (
                        <img src={userPerfilImg} alt={contact.fullname} />
                    ) : (
                        <p>{userNameLetter}</p>
                    )}
                </div>
                <h3 className="title3">{contact.fullname}</h3>
            </div>
            <ul>
                <h3 className="title3">emails:</h3>
                {emails.length < 1 ? (
                    <p className="text2">Sem emails</p>
                ) : emails?.map((email) => (
                    <ContactEmailCard
                        key={email}
                        emails={emails}
                        email={email}
                        contactId={contact.id}
                    />
                ))}
            </ul>
            <ul>
                <h3 className="title3">telefones:</h3>
                {phones.length < 1 ? (
                    <p className="text2">Sem números</p>
                ) : phones?.map((phone) => (
                    <ContactPhoneCard
                        key={phone}
                        emails={emails}
                        phones={phones}
                        phone={phone}
                        contactId={contact.id}
                    />
                ))}
            </ul>
            <button
                className="btn-sm"
                onClick={() => removeContact()}
            >
                <FaTrashAlt size={24} />
            </button>
        </li>
    );
};