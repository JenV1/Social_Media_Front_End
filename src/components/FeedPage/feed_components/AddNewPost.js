import {useState, useEffect} from 'react';

const AddNewPost = ({numberOfPosts}) => {

    const [user, setUser] = useState(null)
    
    useEffect(() => {
        var apiUsers = [];
        fetch("http://localhost:8080/list_all_users")
        .then(response => response.json())
        .then(response => {
            apiUsers = response;
            const loggedInUser = apiUsers.filter(
                user => user.userLoggedIn
            )
            setUser(loggedInUser[0])
        })
        .catch(error => console.log(error))
        
    })

    const [postContent, setPostContent] = useState("");
    const [postType, setPostType] = useState(1);

    const handleContentChange = (event) => setPostContent(event.target.value);
    const handlePostTypeChange = (event) => setPostType(event.target.value);

    const createNewPost = (event) => {

        const options = {
          method: "POST",
        }
    
        fetch(`http://127.0.0.1:8080/addNewPost?id=${numberOfPosts+1}&content=${postContent}&isBusiness=${user.businessAccount}&post_type=${postType}&user_id=${user.id}`, options)
          .catch(err => console.log(err))


      }

    return (
        <>
            <form onSubmit={createNewPost}>
                <label>
                    <input type="text" name="content" onChange={handleContentChange}/>
                </label>
                <label name="post_type" onChange={handlePostTypeChange}>
                    <select>
                        <option value="">Choose a post type!</option>
                        <option value="1">ADVERTISEMENT</option>
                        <option value="2">EVENT</option>
                        <option value="3">LIFESTYLE</option>
                        <option value="4">FUNDRAISER</option>
                        <option value="5">EVENT PLAN</option>
                    </select>
                </label>
            <input type="submit" />

            </form>
        </>
    )
}

export default AddNewPost;