import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";
import {PostDetails} from "../../components";

const PostPageForUser = () => {
    const {state} = useLocation()
  const [posts,setPosts] =  useState([])

    useEffect(() => {
        postService.getByUserId(state).then(({data}) => setPosts(data))
    },[state])

    return (
        <div>
            <div>
                {posts && posts.map(post => <PostDetails key={post.id} post={post}/>)}
            </div>

        </div>
    );
};

export {PostPageForUser};
