import {useState} from 'react';

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
            <form onSubmit={CreateNewComment}>
                <label>
                    <input type="text" onChange={handleCommentContent}/>
                </label>
                <input type="submit" />
            </form>

        </>
    )
}

export default AddComment;