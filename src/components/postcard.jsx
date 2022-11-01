import React from "react";
import { useDispatch } from "react-redux";
import { likePost, unlikePost, showSlider } from "../redux/actions/postActions";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";


export default function PostCard(props) {
  const dispatch = useDispatch();

  function addLike(postId, doDelete) {
    doDelete ? dispatch(unlikePost(postId)) : dispatch(likePost(postId));
  }

  function show(postId) {
    dispatch(showSlider(postId))
  }

  return (
    <div className={"col-12 col-md-6 col-lg-4 mb-5"}>
      <div className="card bg-primary border-light shadow-soft">
        <div className="card-header p-3 position-relative">
          <img
            src={props.post.file}
            className="card-img-top rounded post-image cursor-pointer"
            alt=""
            onClick={()=>show(props.post.postId)}
          />
          {props.post.files > 1 ? <i className="fa-solid fa-ellipsis position-absolute text-white more-files"></i>: ''}
          <small className="text-muted">{props.post.locationName}</small>
        </div>
        <div className="card-body pt-2">
          <div className="media d-flex align-items-center justify-content-between">
            <div className="post-group">
              <Link to={`/user/` + props.post.userId}>
                <img
                  className="avatar-sm mr-2 img-fluid rounded-circle"
                  src={props.post.profileImageUrl}
                  alt={props.post.username}
                />{" "}
                {props.post.username}

              </Link>
            </div>
            <div className="d-flex align-items-center">
              <span className="small">
                <span className="far fa-calendar-alt mr-2"></span>
                {format(parseISO(props.post.creationTime), 'dd.mm.yyyy')}
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="card-title mt-4">
              <button
                  className="btn btn-icon-only btn-primary"
                  type="button"
                  aria-label="love button"
                  title="love button"
                  onClick={() => addLike(props.post.postId, props.post.liking)}
              >
                <i aria-hidden="true" className={props.post.liking ? "fa-solid fa-heart-circle-minus text-secondary": "fa-solid fa-heart-circle-plus text-success"}></i>
              </button> {props.post.likes} likes
            </div>

            <div className="card-title mt-4">
              <button
                  className="btn btn-icon-only btn-primary"
                  type="button"
                  aria-label="love button"
                  title="love button"
                  onClick={() => addLike(props.post.postId)}
              >
                <i aria-hidden="true" className="fa-regular fa-comments"></i>
              </button> {props.post.comments} comments
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
