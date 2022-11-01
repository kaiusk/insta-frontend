import React from "react";
import { useSelector } from "react-redux";

export default function UserData(props) {
  //const { props.user, props.profile } = useSelector(state => state.loginUser);

  return (
    <>
      <div className="profile-image bg-primary shadow-inset border border-light rounded-circle p-2 mx-3 flex-shrink-0">
        <img
          src={props.user.profileImageUrl}
          className="card-img-top rounded-circle"
          alt={props.user.name}
        />
      </div>
      <div className={"d-flex flex-column mr-3"}>
        <h4 className="d-none d-sm-block">{props.user.name}</h4>
        <p className="d-none d-lg-block">{props.user.bio}</p>
      </div>
      <div className={"d-none d-md-flex flex-row ml-3"}>
        <span className="badge badge-dark mr-3">
          <i className="fa-solid fa-message"></i>{" "}
          <strong>{props.user.posts}</strong> posts
        </span>
        <span className="badge badge-dark mr-3">
          <i className="fa-solid fa-user"></i>{" "}
          <strong>{props.user.followers}</strong> followers
        </span>
        <span className="badge badge-dark mr-3">
          <i className="fa-solid fa-user"></i>{" "}
          <strong>{props.user.following}</strong> following
        </span>
      </div>
    </>
  );
}
