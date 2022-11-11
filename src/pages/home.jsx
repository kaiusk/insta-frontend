import React, { useEffect } from "react";
import PostCard from "../components/postcard";
import PostMedia from "../components/postMedia";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../redux/actions/postActions";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { userInfo } = useSelector((state) => state.loginUser);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo.id) {
      dispatch(getUserPosts(userInfo.id));
    } else {
      navigate("/login");
    }
  }, [userInfo, dispatch, navigate]);

  return (
    <div className="row mt-4">
      <PostMedia />
      {posts.map((p) => {
        return [<PostCard post={p} key={p.postId} />];
      })}
    </div>
  );
}
