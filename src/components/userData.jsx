import React from "react";
import { useSelector } from "react-redux";

export default function UserData(props) {
  //const { props.user, props.profile } = useSelector(state => state.loginUser);

  return (
    <>
      <div className="profile-image bg-primary shadow-inset border border-light rounded-circle p-2 mx-3">
        <img
          src={props.user.ProfileImageUrl}
          className="card-img-top rounded-circle"
          alt={props.user.Name}
        />
      </div>
      <div className={"d-flex flex-column mr-3"}>
        <h4>{props.user.Name}</h4>
        <p>{props.user.Bio}</p>
      </div>
      <div className={"d-flex flex-row ml-3"}>
        <span className="badge badge-dark mr-3">
          <i className="fa-solid fa-message"></i>{" "}
          <strong>{props.profile.posts}</strong> posts
        </span>
        <span className="badge badge-dark mr-3">
          <i className="fa-solid fa-user"></i>{" "}
          <strong>{props.profile.followers}</strong> followers
        </span>
        <span className="badge badge-dark mr-3">
          <i className="fa-solid fa-user"></i>{" "}
          <strong>{props.profile.followees}</strong> following
        </span>
      </div>
    </>
  );
}
