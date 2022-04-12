import {Post} from "../Post/Post";
import {useEffect, useState} from "react";
import {postService} from "../../services";

export const Posts = ({userId}) => {
    const [posts, setPosts]= useState([])

    useEffect(() => {
        postService.getPostsByUserId(userId).then(({data}) =>  setPosts(data))
    },[userId])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} userId={userId}/> )}
        </div>
    );
}