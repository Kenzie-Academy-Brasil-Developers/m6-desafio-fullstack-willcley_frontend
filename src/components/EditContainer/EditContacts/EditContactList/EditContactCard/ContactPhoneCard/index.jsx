import style from "./contactPhoneCard.module.scss";
import { useContext } from "react";
import { ClientContext } from "../../../../../../providers/ClientContext";
import { FaTrashAlt } from "react-icons/fa";

export const ContactPhoneCard = ({ emails, phones, phone, contactId }) => {
    const {
        updateContact,
    } = useContext(ClientContext);

    const removePhone = () => {
        const phoneList = phones.filter((item) => {
            if (item != phone) return Number(item);
        });
        updateContact({ phones: `[${phoneList}]` }, contactId);
    };

    return (
        <div className={style.removePhoneCard}>
            <p className="text2">{phone}</p>
            <button
                className="btn-sm"
                onClick={() => removePhone()}
            >
                <FaTrashAlt size={12} />
            </button>
        </div>
    );
};