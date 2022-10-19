import React from "react";
import { useDispatch } from "react-redux";
import { likePost } from "../redux/actions/postActions";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";

export default function PostCard(props) {
  const dispatch = useDispatch();

  function addLike(postId) {
    dispatch(likePost(postId));
  }

  return (
    <div className={"col-12 col-md-6 col-lg-4 mb-5"}>
      <div className="card bg-primary border-light shadow-soft">
        <div className="card-header p-3">
          <img
            src={props.post.MediaFileUrl}
            className="card-img-top rounded post-image"
            alt="Designer desk"
          />
        </div>
        <div className="card-body pt-2">
          <div className="media d-flex align-items-center justify-content-between">
            <div className="post-group">
              <Link to={`/user/` + props.post.userId}>
                <img
                  className="avatar-sm mr-2 img-fluid rounded-circle"
                  src={props.post.ProfileImageUrl}
                  alt={props.post.Username}
                />{" "}
                {props.post.Username}
              </Link>
            </div>
            <div className="d-flex align-items-center">
              <span className="small">
                <span className="far fa-calendar-alt mr-2"></span>
                {format(parseISO(props.post.CreationTime), 'dd.mm.yyyy')}
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="h5 card-title mt-4">
              <i className="fa fa-heart"></i> {props.post.likes} likes
            </h4>

            <button
              className="btn btn-icon-only btn-primary"
              type="button"
              aria-label="love button"
              title="love button"
              onClick={() => addLike(props.post.ID)}
            >
              <span aria-hidden="true" className="far fa-heart"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
