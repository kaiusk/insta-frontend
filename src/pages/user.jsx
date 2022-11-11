import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, postUserProfile, unfollowUser, userProfile } from "../redux/actions/userActions";
import { useParams } from "react-router-dom";
import UserData from "../components/userData";
import { getPosts } from "../redux/actions/postActions";
import PostCard from "../components/postcard";


export default function UserPage() {
    const dispatch = useDispatch();
    let { id } = useParams();
    const { pUserInfo } = useSelector(state => state.postUser);
    const { userInfo } = useSelector(state => state.loginUser);
    const { posts } = useSelector(state => state.posts);

    useEffect(() => {
        if (id) {
            dispatch(postUserProfile(id))
            dispatch(getPosts(id))
        }
    }, [id, dispatch])

    function follow() {
        pUserInfo.follow ? dispatch(unfollowUser(pUserInfo.id)) : dispatch(followUser(pUserInfo.id))
        setTimeout(()=>{
            dispatch(postUserProfile(id))
            dispatch(userProfile(userInfo.id))
        }, 500)
    }

    return <div className={"col-12 my-5"}>
        <div className="card bg-primary border-light shadow-soft">
            <div className="card-header p-3 d-flex align-items-center">
                {pUserInfo ? <UserData user={pUserInfo} ></UserData> : <div><i className="fas fa-hourglass"></i></div>}
                <div className="ml-auto px-3">
                    <button className="btn btn-primary btn-pill btn-icon-only" onClick={() => follow()}>
                        <i className={(pUserInfo.follow ? "fa-user-minus text-warning " : "fa-user-plus ") + "fa-solid"}></i>
                    </button>
                </div>
            </div>
            <div className="card-body pt-2 d-flex">
                <div className="row mt-4 w-100">
                    {posts.map(p => {
                        return [<PostCard post={p} key={p.postId}/>];
                    })}
                </div>
            </div>
        </div>
    </div>;
}
