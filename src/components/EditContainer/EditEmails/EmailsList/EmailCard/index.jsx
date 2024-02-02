import style from "./emailCard.module.scss";
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { ClientContext } from "../../../../../providers/ClientContext";

export const EmailCard = ({ email }) => {
    const { deleteEmail } = useContext(ClientContext);

    return (
        <li className={style.emailCard}>
            <p className={`${style.emailText} text1`}>{email.email}</p>
            <button
                onClick={() => deleteEmail(email.id)}
                className="btn-sm"
            >
                <FaTrashAlt size={20} />
            </button>
        </li>
    );
};