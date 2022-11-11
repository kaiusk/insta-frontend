import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recommendPosts } from "../redux/actions/postActions";
import PostCard from "../components/postcard";
import PostMedia from "../components/postMedia";


export default function ErrorPage() {
    const dispatch = useDispatch();
    const { discover } = useSelector(state => state.posts);

    useEffect(()=>{
        dispatch(recommendPosts({}))
    }, [dispatch])

    return <div className="row mt-4">
        <PostMedia/>
        {discover.map(p => {
            return [<PostCard post={p} key={p.postId}/>];
        })}
    </div>
}
