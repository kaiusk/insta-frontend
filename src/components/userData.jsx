import React from "react";
import { useSelector } from "react-redux";

export default function UserData() {
  const { userInfo, profile } = useSelector(state => state.user);

  return (
    <>
      <div className="profile-image bg-primary shadow-inset border border-light rounded-circle p-2 mx-3">
        <img
          src={userInfo.ProfileImageUrl}
          className="card-img-top rounded-circle"
          alt={userInfo.Name}
        />
      </div>
      <div className={"d-flex flex-column mr-3"}>
        <h4>{userInfo.Name}</h4>
        <p>{userInfo.Bio}</p>
      </div>
      <div className={"d-flex flex-row ml-3"}>
        <span className="badge badge-dark mr-3">
          <i className="fa-solid fa-message"></i>{" "}
          <strong>{profile.posts}</strong> posts
        </span>
        <span className="badge badge-dark mr-3">
          <i className="fa-solid fa-user"></i>{" "}
          <strong>{profile.followers}</strong> followers
        </span>
        <span className="badge badge-dark mr-3">
          <i className="fa-solid fa-user"></i>{" "}
          <strong>{profile.followees}</strong> following
        </span>
      </div>
    </>
  );
}
