import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";
import {Post, PostDetails} from "../../components";

const PostPageForUser = () => {
    const {id} = useParams()
  const [posts,setPosts] =  useState([])

    useEffect(() => {
        if (id){
            postService.getByUserId(id).then(({data}) => setPosts(data))
        }
        else {
            postService.getAll().then(({data})=>setPosts(data))
        }

    },[id])

    return (
        <div>
            <div>
                {posts && posts.map(post => <Post key={post.id} post={post} flag={!id}/>)}
            </div>
        </div>
    );
};

export {PostPageForUser};
