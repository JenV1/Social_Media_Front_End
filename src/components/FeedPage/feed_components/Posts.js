
import { Route } from 'react-router-dom'
import './Posts.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import PostEdit from './PostEdit';
import userEvent from '@testing-library/user-event';

 const Posts = ({post, comments}) => {

    const [isShowingComments, setIsShowingComments] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const [likes, setLikes] = useState(post.number_of_likes);
    const [postContent, setPostsContent] = useState(post.content_text);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/numberOfLikesOnPost/${post.id}`)
    }, []);

    const changePost = (postText) => {
        setPostsContent(postText);
    }


    return(
        <>
            <h2><span style={{cursor:'pointer'}} onClick={() => setIsShowingComments(!isShowingComments)}>{postContent} </span></h2>


            <h4>{likes}<span style={{cursor:'pointer'}} onClick={() => {
                fetch(`http://127.0.0.1:8080/addLikeToPost/${post.id}`, {
                    method:'PUT',
                    headers:{
                    'Content-Type':'application/json'
                    },
                    body:JSON.stringify()
                })
                .then(response => setLikes(likes + 1))
                .catch(err => {console.log(err);});
            }}>
                &#10084;&#65039;</span>
                {post.user.userLoggedIn ?
                <span>
                    <span style={{cursor:'pointer'}} onClick={() => setIsEditing(!isEditing)}>
                        &#9997;&#65039;</span>
                    {isEditing ? <PostEdit post={post} changePost={changePost}/> : null}
                </span> : null}
            </h4>


            {
                comments.map(comment => {
                    if (isShowingComments) {
                        return <p key={comment.id} className="comment">&#128073;{` ${comment.commentContent}`}</p>
                    }
                })
            }
        </>
    )
 }


 export default Posts;