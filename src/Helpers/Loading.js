import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div>
      Carregando<span className={styles.dotFlashing}></span>
    </div>
  );
};

export default Loading;
