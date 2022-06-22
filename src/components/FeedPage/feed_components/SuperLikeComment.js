import {useState} from 'react';

const SuperLikeComment = ({user, comment, post}) => {

    const [commentSuperLiked, setCommentSuperLiked] = useState(comment.heartByUser)


    return (
        <>
         <li className={commentSuperLiked ? 'hearted-comment comment-item' : 'comment-item'} key={comment.id}>
            {<span className="emoji">&#128073;</span>}
            {` ${comment.commentContent}`} 
                        {post.user.userLoggedIn ? <span className="superLike" style={{cursor:'pointer'}}
                        onClick={() => {
                            const options = {
                                method: "PUT",
                            }
                    
                            fetch(`http://127.0.0.1:8080/heartComment?userName=${user.name}&ID_of_comment_to_be_hearted=${comment.id}`, options)
                            .then(response => setCommentSuperLiked(true))
                            .catch(err => console.log(err));
                        }}>{commentSuperLiked ? <span>&#128293;
                            </span> : <span>&#128155;</span>}</span> : null}</li>
        </>
    )
}

export default SuperLikeComment;