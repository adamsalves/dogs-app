import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = () => {
  const [modalPhoto, setmodalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setmodalPhoto={setmodalPhoto} />
      )}
      <FeedPhotos setmodalPhoto={setmodalPhoto} />
    </div>
  );
};

export default Feed;
