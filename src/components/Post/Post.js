// import {Link} from "react-router-dom";
import Button from "../Button/Button";

const Post = ({post,flag}) => {
    const {id,title} = post
    return (
        <div>
            {/*{id}--{title} <Link to={`${id}`} state={post}>get Detailes</Link>*/}
             {id}--{title}
            {flag&& <Button to={`${id}`} state={post}>get Detailes</Button>}

        </div>
    );
};

export  {Post};