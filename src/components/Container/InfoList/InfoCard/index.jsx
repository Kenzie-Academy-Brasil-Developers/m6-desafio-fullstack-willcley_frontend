export const InfoCard = ({ item }) => {
    return (
        <li>
            <p className="text1">{
            typeof item == "string" ? item : 
            typeof item == "number" ? item :
            typeof item == "object" ? item.email :
            ""}</p>
        </li>
    );
};