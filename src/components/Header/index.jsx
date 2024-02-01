import { Link } from "react-router-dom";
import style from "./header.module.scss";
import { FaGear } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
    const userPerfilImg = null;
    const clientName = localStorage.getItem("@CLIENT:NAME");
    const userNameLetter = clientName[0].toUpperCase();

    const { endpoint, logout } = useContext(UserContext);

    return (<>
        <header className={style.header}>
            <div className={style.perfilImg}>
                {userPerfilImg ? (
                    <img src={userPerfilImg} alt={clientName} />
                ) : (
                    <p>{userNameLetter}</p>
                )}
            </div>
            {endpoint === "/" ? (
                <Link className={style.link} to="/edit">
                    <FaGear size={20} />
                </Link>
            ) : endpoint === "/edit" ? (
                <Link className={style.link} to="/">
                    <IoNewspaperOutline size={20} />
                </Link>
            ) : ""}
            <Link
                className={style.link}
                onClick={() => logout()}
                to="/login"
            >
                <IoMdExit size={20} />
            </Link>
        </header>
    </>);
};