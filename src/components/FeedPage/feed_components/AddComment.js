import {useState} from 'react';
import './AddComment.css'

const AddComment = ({user, post}) => {

    const [commentContent, setCommentContent] = useState("");

    const handleCommentContent = (event) => setCommentContent(event.target.value);
    
    const CreateNewComment = (event) => {
        const options = {
            method: "POST",
        }

        fetch(`http://127.0.0.1:8080/postComment?postID=${post.id}&username=${user.name}&content=${commentContent}`, options)
        .catch(err => console.log(err))
    }

    return(
        <>
            <form className="form-comment" onSubmit={CreateNewComment}>
                <label>
                    <input placeholder='What do you think?' className="new-comment-content" type="text" onChange={handleCommentContent}/>
                </label>
                <input className="commentForm-btn" type="submit" value="Comment" />
            </form>

        </>
    )
}

export default AddComment;