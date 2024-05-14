import React from "react";
import cl from "./User.module.css";

const User = ({ el }) => {
  return (
    <div className={cl.user_card}>
      <div className={cl.profile_img}>
        <img src={el.profile_img} />
      </div>
      <h2>{el.name}</h2>
      <div className={cl.user_age}>Age: {el.age}</div>
      <div className={cl.user_country}>Country: {el.country}</div>
    </div>
  );
};

export default User;
