import React, { useEffect } from "react";
import PostCard from "../components/postcard";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../redux/actions/postActions";
import { useNavigate } from "react-router";
import { setVariant, show } from "../redux/reducers/toastReducer";
import { logout } from "../redux/reducers/userReducer";

export default function Home() {
    const { userInfo } = useSelector(state => state.loginUser);
    const { posts, error, loading, likeAdded } = useSelector(
        state => state.posts
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo.ID) {
            dispatch(getUserPosts(userInfo.ID));
        } else {
            navigate("/login");
        }
    }, [userInfo, dispatch]);

    useEffect(() => {
        if (error) {
            if (error === 'unauthorized') {
                dispatch(logout())
            } else {
                dispatch(setVariant("warning"));
                dispatch(show(error));
            }
        }
    }, [error, dispatch]);

    useEffect(() => {
        if (!loading && likeAdded) {
            dispatch(setVariant("primary"));
            dispatch(show("Laik lisatud!"));
        }
    }, [loading, likeAdded, dispatch]);

    return (
        <div className="row mt-4">
            {posts.map(p => {
                return [<PostCard post={p} key={p.ID}/>];
            })}
        </div>
    );
}
