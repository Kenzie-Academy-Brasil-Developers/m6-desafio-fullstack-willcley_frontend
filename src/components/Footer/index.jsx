import style from "./footer.module.scss";

export const Footer = () => {
    const date = new Date();
    
    return (
        <footer className={style.footer}>
            <p className="text2">
                &copy; Todos os direitos reservados - Kenzie Academy Brasil -{" "}
                {date.getFullYear()}
            </p>
        </footer>
    );
};