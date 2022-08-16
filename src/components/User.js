import React from "react";
import "./User";

const User = () => {
  return (
    <div className="user">
      <img src="../images-files/temp_avatar.jpg" alt="avatar" />
      <h1 className="userName">Benjamin Buzin</h1>
      <p className="userProfession">Technicien</p>
      <div className="userInfos">
        <p className="userInfo">22 avenue de la cité, 59640 Dunkerque</p>
        <p className="userInfo">
          <a href="tel:+33659546389">Tel : 0659546389</a>
        </p>
        <p className="userInfo">
          <a href="mailto:benjamin.buzin@gmail.com">benjamin.buzin@gmail.com</a>
        </p>
        <p className="userInfo">Date de naissance : 19/02/1993</p>
      </div>
    </div>
  );
};

export default User;
