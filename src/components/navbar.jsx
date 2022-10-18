import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../redux/actions/userActions";
import { logout } from "../redux/reducers/userReducer";

export default function Navbar(props) {
  const { userInfo, profile } = useSelector(state => state.user);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo.ID) {
      dispatch(userProfile(userInfo.ID));
    }
  }, [userInfo, dispatch]);

  if (userInfo.ID) {
    return (
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-light shadow-soft navbar-theme-primary">
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
        <button
          type="button"
          className="btn btn-primary btn-pill btn-icon-only mr-2 ml-auto"
          onClick={handleShow}
        >
          <i className="fa-solid fa-arrow-right-from-bracket text-danger"></i>
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Logid välja?</Modal.Title>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <span aria-hidden="true">×</span>
            </button>
          </Modal.Header>
          <Modal.Body>Sind logitakse välja...</Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose} className="btn btn-sm btn-primary">
              Tühista
            </button>
            <button
              onClick={() => dispatch(logout())}
              className="btn btn-primary text-danger ml-auto"
            >
              <i className="fa-solid fa-arrow-right-from-bracket mr-1"></i>
              Logi välja
            </button>
          </Modal.Footer>
        </Modal>
      </nav>
    );
  }
}
