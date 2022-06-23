import {useState, useEffect} from 'react';
import './AddNewPost.css';


const AddNewPost = ({nextID, user}) => {

    const [postContent, setPostContent] = useState("");
    const [postType, setPostType] = useState(0);

    const handleContentChange = (event) => setPostContent(event.target.value);
    const handlePostTypeChange = (event) => setPostType(event.target.value);

    const createNewPost = (event) => {
        const options = {
          method: "POST",
        }

        if (postType === 0) {
            event.preventDefault();
            window.alert("Please pick a post type!")
        } else {
            fetch(`http://127.0.0.1:8080/addNewPost?id=${nextID}&content=${postContent}&isBusiness=${user.businessAccount}&post_type=${postType}&user_id=${user.id}`, options)
            .catch(err => console.log(err))
        }


      }

    return (
        <>
            <form onSubmit={createNewPost} className="add-post-form">
                <div className="form-container">
                <label>
                    <input className="input-content" type="text" name="content" onChange={handleContentChange} placeholder="What's on your mind?"/>
                </label>
                <label className="event-dropdown" name="post_type" onChange={handlePostTypeChange}>
                    <select className='select'>
                        <option value="">Choose a post type!</option>
                        <option value="1">ADVERTISEMENT</option>
                        <option value="2">EVENT</option>
                        <option value="3">LIFESTYLE</option>
                        <option value="4">FUNDRAISER</option>
                        <option value="5">EVENT PLAN</option>
                    </select>
                </label>
                
            <input type="submit" value="Post" className='btn'/>
            </div>

            </form>
        </>
    )
}

export default AddNewPost;