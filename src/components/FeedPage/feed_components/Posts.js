
import { Route } from 'react-router-dom'
import './Posts.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import PostEdit from './PostEdit';
import userEvent from '@testing-library/user-event';
import AddComment from './AddComment';

 const Posts = ({post, comments, user}) => {

    const [isShowingComments, setIsShowingComments] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isAddingComments, setIsAddingComments] = useState(false);

    const [likes, setLikes] = useState(post.number_of_likes);
    const [postContent, setPostsContent] = useState(post.content_text);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/numberOfLikesOnPost/${post.id}`)
    }, []);

    const changePost = (postText) => {
        setPostsContent(postText);
    }

    const deletePost = () => {
        const options = {
            method: "DELETE",
        }

        fetch(`http://127.0.0.1:8080/deletePost/${post.id}`, options)
        .then(response => window.location.reload())
        .catch(err => console.log(err))
    }


    return(
        <>
            <h2><span style={{cursor:'pointer'}} onClick={() => {
                if (!isAddingComments) {
                    setIsShowingComments(!isShowingComments);
                }
                }}>{postContent} </span>
                
                {post.user.userLoggedIn ? <span style={{cursor:'pointer'}} onClick={deletePost}>&#128465;&#65039;</span> : null}
                
                </h2>
            <p>Post by {post.user.name}</p>
            <p>&#8600;&#65039; {comments.length}</p>


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

                <span style={{cursor:'pointer'}} onClick={() => { setIsShowingComments(true);
                setIsAddingComments(!isAddingComments);
                }}>&nbsp;&nbsp; +</span>
            </h4>


            {
                comments.map(comment => {
                    if (isShowingComments) {
                        return <>
                        <p key={comment.id} className="comment">&#128073;{` ${comment.commentContent}`}</p>
                        </>
                    }
                })
            }

            {isAddingComments ? <AddComment user={user} post={post}/> : null}
        </>
    )
 }


 export default Posts;