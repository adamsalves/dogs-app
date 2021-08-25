import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

// Objeto literal que retorna o nome amigável para a rota
function titleName(title) {
  const titles = {
    "/conta": "Minha conta",
    "/conta/estatisticas": "Estatísticas",
    "/conta/postar": "Poste sua foto",
    default: "Minha Conta",
  };
  return titles[title] || titles.default;
}

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    setTitle(titleName(pathname));
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
