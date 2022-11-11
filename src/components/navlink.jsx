import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

export default function NavLink(props) {
  return (
    <OverlayTrigger
      overlay={<Tooltip id={props.id}>{props.tooltip}</Tooltip>}
      placement="bottom"
      delayShow={300}
      delayHide={150}
    >
      <Link
        to={props.to}
        className={
          props.first
            ? "btn btn-primary btn-pill btn-icon-only ml-auto"
            : "btn btn-primary btn-pill btn-icon-only mx-2"
        }
      >
        <i className={props.icon}></i>
      </Link>
    </OverlayTrigger>
  );
}
