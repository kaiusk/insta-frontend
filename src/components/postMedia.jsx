import Modal from "react-bootstrap/Modal";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper"; // core Swiper

// Styles must use direct files imports
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { hideSlider } from "../redux/reducers/mediaReducer";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../redux/actions/postActions";
import { format, parseISO } from "date-fns";

export default function PostMedia() {
    const { show, post, comments } = useSelector(state => state.media);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(post)
        if (post.length)
            dispatch(getComments(post[0].PostID))
    }, [post])

    function hide() {
        if (show) dispatch(hideSlider())
    }

    return <Modal show={show}>
        <Modal.Header>
            <Modal.Title>Postituse pealkiri</Modal.Title>
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
            <Swiper modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={50}
                    navigation
                    autoplay
                    pagination={{ clickable: true }}>
                {post.map(el => {
                    return [<SwiperSlide key={el.ID}>
                                <img src={el.MediaFileUrl} alt={el.ID} className="post-image w-100 rounded"/>
                            </SwiperSlide>];
                })}
            </Swiper>
            <hr/>
            <div className="bg-primary shadow-inset border-light p-1">
                <ol className="list-group" style={{maxHeight: '300px', overflowY: 'scroll'}}>
                    {comments.map(c => {
                        return [<li className="list-group-item">
                                    <p>{c.Comment}</p>
                                    <div className="d-flex justify-content-between w-100 mb-3">
                                        <div className="text-muted">
                                        <i className="fas fa-user mr-2"></i>
                                        <small className="text-muted">{c.Name}</small>
                                        </div>
                                        <div className="text-muted">
                                            <i className="far fa-calendar-alt mr-2"></i>
                                            <small>{format(parseISO(c.CreationTime), 'dd.mm.yyyy')}</small>
                                        </div>
                                    </div>
                                </li>]
                    })
                    }
                </ol>
                <textarea name="comment" id="comment" cols="30" rows="5" className="form-control mt-2" placeholder="lisa kommentaar"></textarea>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <button onClick={() => hide()} className="btn btn-sm btn-primary">
                Sulge
            </button>
        </Modal.Footer>
    </Modal>
}