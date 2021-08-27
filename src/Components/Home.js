import React from "react";
import Head from "../Helpers/Head";
import Feed from "./Feed/Feed";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos"
      />
      <Feed />
    </section>
  );
};

export default Home;
