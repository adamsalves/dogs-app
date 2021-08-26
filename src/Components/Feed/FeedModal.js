import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import Error from "../../Helpers/Error";
import Loading from "../../Helpers/Loading";
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    const response = request(url, options);
  }, [photo, request]);

  function handleOutsiteClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsiteClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
