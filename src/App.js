import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import Photo from "./Components/Photo/Photo";
import { UserStorage } from "./UserContext";
import "./App.css";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <ProtectedRoute path="/conta/*" element={<User />} />
          <Route path="/foto/:id" element={<Photo />} />
          <Route path="/perfil/:user" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
