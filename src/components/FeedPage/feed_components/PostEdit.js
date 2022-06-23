import {useState} from 'react';

const PostEdit = ({post, changePost, turnOffEditing}) => {

    const [newPostContent, setNewPostContent] = useState("");

    const handleContentChange = (event) => {
        setNewPostContent(event.target.value);
    }

    const handleEdit = (event) => {
        event.preventDefault();
        fetch(`http://127.0.0.1:8080/editOldPost/${post.id}`, {
            method: 'PUT',
            body: newPostContent
        })
        .then(response => {
            window.scroll({
                top: document.body.offsetHeight,
                left: 0, 
                behavior: 'smooth',
              });
        })
        .then(response => {changePost(newPostContent)})

        turnOffEditing();
    }

    return (
        <>  
            <form className="edit-post-form" onSubmit={handleEdit}>
                <label>
                    <input className="edit-content" type="text" name="content" value={newPostContent} 
                    onChange={handleContentChange} placeholder="Type your edit here!"/>
                </label>
                <input className="edit-post-btn" type="submit" value="Edit Post" />
            </form>
        </>
    )
}

export default PostEdit;