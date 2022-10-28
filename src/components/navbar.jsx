import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/userReducer";
import UserData from "./userData";
import { Link } from "react-router-dom";
import { userProfile } from "../redux/actions/userActions";

export default function Navbar() {
    const { userInfo, success } = useSelector(state => state.loginUser);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo && userInfo.ID) {
            dispatch(userProfile(userInfo.ID));
        }
    }, [success]);

    if (userInfo && userInfo.ID) {
        return (
            <nav className="navbar navbar-expand-lg navbar-transparent navbar-light shadow-soft navbar-theme-primary">
                <UserData user={userInfo}/>
                <Link
                    to="/"
                    className="btn btn-primary btn-pill btn-icon-only mr-2 ml-auto"
                >
                    <i className="fa-solid fa-home"></i>
                </Link>
                <Link
                    to="/"
                    className="btn btn-primary btn-pill btn-icon-only mx-2"
                >
                    <i className="fa-solid fa-plus"></i>
                </Link>
                <Link
                    to="/discover"
                    className="btn btn-primary btn-pill btn-icon-only mx-2"
                >
                    <i className="fa-solid fa-binoculars"></i>
                </Link>
                <button
                    type="button"
                    className="btn btn-primary btn-pill btn-icon-only mx-2"
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
