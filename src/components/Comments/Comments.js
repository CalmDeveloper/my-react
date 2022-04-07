import React, {useEffect, useState} from 'react';

import {Comment} from "../Comment/Comment";




export const Comments = () => {
    const [comments, SetComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())

            .then(value => SetComments(value))
    }, [])
    return (
        <div>
            {comments.map(comment => <Comment key={comment.name} comment={comment}/>)}
        </div>
    );
};

