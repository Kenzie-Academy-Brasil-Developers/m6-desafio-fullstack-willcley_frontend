import { InfoCard } from "./InfoCard";
import style from "./infoList.module.scss";

export const InfoList = ({ title, list }) => {
    return (
        <ul className={style.list}>
            <h3 className="title3">{title}</h3>
            {list.length < 1 ? (
                <p className="text1">Lista vazia!</p>
            ) : (
                list?.map((item) => (
                    <InfoCard item={item} key={
                        typeof item == "string" ? item :
                        typeof item == "number" ? item :
                        item.id
                    } />
                ))
            )}
        </ul>
    );
};