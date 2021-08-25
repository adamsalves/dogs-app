import React from "react";
import styles from "./FeedPhotoItem.module.css";

const FeedPhotoItem = ({ photo, setmodalPhoto }) => {
  function handleClick() {
    setmodalPhoto(photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotoItem;
