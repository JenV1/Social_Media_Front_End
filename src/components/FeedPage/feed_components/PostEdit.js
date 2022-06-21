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
        .then(response => {changePost(newPostContent)})

        turnOffEditing();
    }

    return (
        <>  
            <form onSubmit={handleEdit}>
                <label>
                    <input type="text" name="content" value={newPostContent} 
                    onChange={handleContentChange}/>
                </label>
                <input type="submit" />
            </form>
        </>
    )
}

export default PostEdit;