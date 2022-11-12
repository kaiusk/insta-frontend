import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/userReducer";
import UserData from "./userData";
import { userProfile } from "../redux/actions/userActions";
import { setVariant } from "../redux/reducers/toastReducer";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import NavLink from "./navlink";

export default function Navbar() {
  const { userInfo, success, error } = useSelector((state) => state.loginUser);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo && userInfo.id) {
      dispatch(userProfile(userInfo.id));
    }
  }, [success, dispatch, userInfo]);

  useEffect(() => {
    if (error) {
      if (error === "unauthorized") {
        dispatch(logout());
      } else {
        dispatch(setVariant("warning"));
      }
    }
  }, [error, dispatch]);

  if (userInfo && userInfo.id) {
    return (
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-light shadow-soft navbar-theme-primary">
        <UserData user={userInfo} />
        <NavLink
          id="addposttp"
          tooltip="Lisa postitus"
          to="/addpost"
          icon="fa-solid fa-plus"
          first={true}
        ></NavLink>
        <NavLink
          id="hometp"
          tooltip="Avaleht"
          to="/"
          icon="fa-solid fa-home"
        ></NavLink>
        <NavLink
          id="discovertp"
          tooltip="Avasta postitusi"
          to="/discover"
          icon="fa-solid fa-binoculars"
        ></NavLink>
        <OverlayTrigger
          overlay={<Tooltip id="logouttp">Logi välja</Tooltip>}
          placement="bottom"
          delayShow={300}
          delayHide={150}
        >
          <button
            type="button"
            className="btn btn-primary btn-pill btn-icon-only mx-2"
            onClick={handleShow}
          >
            <i className="fa-solid fa-arrow-right-from-bracket text-danger"></i>
          </button>
        </OverlayTrigger>
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
