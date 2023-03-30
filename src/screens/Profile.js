import React from "react";
import Nav from "../components/Nav";
import avatar from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img src={avatar} alt="User avatar" />
        </div>
        <div className="profile__details">
          <h2>{user.email}</h2>
          <div className="profile__plans"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
