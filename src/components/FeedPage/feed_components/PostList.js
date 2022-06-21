import Posts from "./Posts"
import {useState, useEffect} from "react";

import axios from 'axios';

import AddNewPost from "./AddNewPost";

const PostList = () => {

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

    const [posts, setPosts] = useState([]);
    const [filteredByBusiness, setFilteredByBusiness] = useState(false);

    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/showAllComments`)
        .then(response => { 
            const comments = response.data;
            setComments(comments);
        })
        .catch(err => console.log(err));
    }, [posts]);


    useEffect (() => {
        axios.get(`http://127.0.0.1:8080/list_all_posts`)
        .then(response => {
            const posts = response.data;
            setPosts(posts);
        })
        .catch(err => console.log(err));
    }, [posts]);

    const handleFilterByBusiness = () => setFilteredByBusiness(!filteredByBusiness);

    return (
        <>
            <button onClick={handleFilterByBusiness}>filter by business</button>

            <AddNewPost user={user} numberOfPosts={posts.length}/>

            <ul>
                {
                    posts.map(post => {
                        if ((post.businessAccount && filteredByBusiness) || !filteredByBusiness) {
                            return <li key={post.id}>
                                <Posts post={post} user={user} comments={comments.filter(comment => comment.post.id === post.id)}/>
                            </li>
                        }
                    })
                }
            </ul>
        </>
    )
}


export default PostList