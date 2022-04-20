import {useEffect, useState} from "react";
import {postService} from "../../services";
import {Post} from "../../components";
import {Outlet, useSearchParams} from "react-router-dom"


const PostsPage = () => {
    // const value = useContext(myContext)
    const [query,setQuery] = useSearchParams({page:'1'})
    const [posts,setPosts] = useState([])
    const nextPage = () => {
        let page = query.get('page')
        page= +page+1
        setQuery({page:page.toString()})
       // const  queryObj= Object.fromEntries(query.entries());
       //  queryObj.page++
       //  setPosts(queryObj)
       //  не працює
    }
    const prevPage = () => {
        let page = query.get('page')
        page= +page-1
        setQuery({page:page.toString()})
    }
    useEffect(() => {
        postService.getAllwithFilterPage(query.get('page')).then(({data}) => setPosts(data))
    },[query])
    return (
        <div style={{display:'block'}}>
            <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>
            <button onClick={()=>prevPage()}>Prev</button>
            <button onClick={()=>nextPage()}>Next</button>

        </div>
    );
};

export {PostsPage};