import style from "./contactEmailCard.module.scss";
import { useContext } from "react";
import { ClientContext } from "../../../../../../providers/ClientContext";
import { FaTrashAlt } from "react-icons/fa";

export const ContactEmailCard = ({ emails, email, contactId }) => {
    const {
        updateContact,
    } = useContext(ClientContext);

    const removeEmail = () => {
        const emailList = emails.filter((item) => item != email);
        updateContact({ emails: emailList }, contactId);
    };

    return (
        <div className={style.removeEmailCard}>
            <p className="text2">{email}</p>
            <button
                className="btn-sm"
                onClick={() => removeEmail()}
            >
                <FaTrashAlt size={12} />
            </button>
        </div>
    );
};