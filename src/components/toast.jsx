import { Toast, ToastContainer } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../redux/reducers/toastReducer";

export default function Toaster() {
  const toast = useSelector(state => state.toast);
  const [showMe, hideMe] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toast.show) {
      hideMe(true);
      setTimeout(() => {
        hideMe(false);
        dispatch(hide());
      }, 3000);
    }
  }, [toast.show]);
  return (
    <ToastContainer className="p-3" position="top-end">
      <Toast show={showMe} bg={toast.variant}>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Mini-insta</strong>
        </Toast.Header>
        <Toast.Body>{toast.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
