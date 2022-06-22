import Posts from "./Posts"
import {useState, useEffect} from "react";

import axios from 'axios';

import AddNewPost from "./AddNewPost";
import './PostList.css';
import Search from "./SearchByUserKeyword/Search";


const PostList = () => {

    const [user, setUser] = useState(null)
    const [nextPostID, setNextPostID] = useState(1);
    
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
    const [ids, setIDs] = useState([]);
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
            setIDs(posts.map(post => post.id, 10))
            // setNextPostID(posts[posts.length - 1].id +1);
            setNextPostID(Math.max.apply(Math, ids) +1);
        })
        .catch(err => console.log(err));
    }, [posts]);

    const handleFilterByBusiness = () => setFilteredByBusiness(!filteredByBusiness);

  


    return (
        <>
            <div className="button-and-post-container">
                <button className="business-btn" onClick={handleFilterByBusiness}>Business Posts Only</button>

                <AddNewPost user={user} nextID={nextPostID} />
            </div>
            <Search />
            <div className="post-container">
                {
                    posts.map(post => {
                        if ((post.businessAccount && filteredByBusiness) || !filteredByBusiness) {
                            return <li className="post-item" key={post.id}>
                                <p className="post"><Posts post={post} user={user} comments={comments.filter(comment => comment.post.id === post.id)}/></p>
                            </li>
                        }
                    })
                }
            </div>
        </>
    )
}


export default PostList