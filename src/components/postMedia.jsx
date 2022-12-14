import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { hideSlider } from "../redux/reducers/mediaReducer";
import { useDispatch, useSelector } from "react-redux";
import { format, parseISO } from "date-fns";

// Styles must use direct files imports
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { addComm } from "../redux/actions/postActions";

export default function PostMedia() {
  const [comm, changeComm] = useState("");
  const { show, post } = useSelector((state) => state.media);
  const dispatch = useDispatch();

  function hide() {
    if (show) dispatch(hideSlider());
  }

  function addComment() {
    if (comm && post.postId) {
      dispatch(addComm({ id: post.postId, text: comm }));
    }
  }

  if (post && post.media) {
    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{post.locationName}</Modal.Title>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => hide()}
          >
            <span aria-hidden="true">×</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            navigation
            autoplay
            pagination={{ clickable: true }}
          >
            {post.media.map((el) => {
              return [
                <SwiperSlide key={el.id}>
                  <img
                    src={el.mediaFileUrl}
                    alt={el.id}
                    className="post-image w-100 rounded"
                  />
                </SwiperSlide>,
              ];
            })}
          </Swiper>
          <hr />
          <div className="bg-primary shadow-inset border-light p-1">
            <ol
              className="list-group"
              style={{ maxHeight: "300px", overflowY: "scroll" }}
            >
              {post.comments.map((c) => {
                return [
                  <li className="list-group-item" key={c.id}>
                    <p>{c.comment}</p>
                    <div className="d-flex justify-content-between w-100 mb-3">
                      <div className="text-muted">
                        <i className="fas fa-user mr-2"></i>
                        <small className="text-muted">{c.name}</small>
                      </div>
                      <div className="text-muted">
                        <i className="far fa-calendar-alt mr-2"></i>
                        <small>
                          {format(parseISO(c.creationTime), "dd.mm.yyyy")}
                        </small>
                      </div>
                    </div>
                  </li>,
                ];
              })}
            </ol>
            <textarea
              name="comment"
              cols="30"
              rows="5"
              className="form-control mt-2"
              placeholder="lisa kommentaar"
              value={comm}
              onChange={(e) => changeComm(e.target.value)}
            ></textarea>
            <button
              className="btn btn-icon-only btn-pill btn-primary position-absolute right-3 bottom-3"
              type="button"
              aria-label="lisa kommentaar"
              title="lisa kommentaar"
              onClick={() => addComment()}
            >
              <i aria-hidden="true" className="far fa-plus"></i>
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => hide()} className="btn btn-sm btn-primary">
            Sulge
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}
