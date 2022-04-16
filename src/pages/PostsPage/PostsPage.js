import {Outlet, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";
import {Post} from "../../components/Post/Post";


const PostsPage = () => {
const {state} = useLocation()
    const [posts,setPost] = useState([])
    const [userId,setUserId] = useState([])
    useEffect(() => {
        if (state){setUserId(state)
            postService.getByUserId(userId).then(({data})=>setPost(data))
        }else {
            postService.getAll().then(({data})=>setPost(data))
        }
    },[userId])

    return (
        <div>

            {posts.map(post => <Post post={post} key={post.id}/>)}
<Outlet/>
        </div>
    );
};

export {PostsPage};