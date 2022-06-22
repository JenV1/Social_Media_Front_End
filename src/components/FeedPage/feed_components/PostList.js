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


    //search by keyword ALL


    // search by keyword
    const [contentsByKeyword, setContentsByKeyword] = useState("");
    const [keyword, setKeyword] = useState("");
    const [targetpost, setTargetPost] = useState({})

    const [popTarget,setPopTarget] = useState(false)


    // catch the keyword value
    const handleChangeByKeyword = (event) =>{
        const currentValue = event.target.value;
        setKeyword(currentValue)
        console.log(currentValue)
    }

    const [posts2, setPosts2] = useState([]);


    const [comments2, setComments2] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/showAllComments`)
        .then(response => { 
            const comments = response.data;
            setComments(comments);
        })
        .catch(err => console.log(err));
    }, [posts]);


    const handleClickByKeyword = () =>{

        fetch(`http://localhost:8080/searchForKeyword/${keyword}`)
        .then(response => 
        response.json())
        .then(result => {
            setContentsByKeyword(result[0]);
        } )
        .then(result2 => {
            function2();
        })

        const function2 = () => {

        fetch(`http://localhost:8080/list_all_posts`)
        .then(response => 
        response.json())
        .then(result => {
            setPosts(result)
        } )

        console.log(posts)
        console.log(contentsByKeyword)
        
        posts.map(post => {
            if (post.content_text === contentsByKeyword) {
                console.log(post)
                setTargetPost(post);
                setPopTarget(true);
            } 
        })}




    }




  


    return (
        <>
            <div className="button-and-post-container">
                <button className="business-btn" onClick={handleFilterByBusiness}>Business Posts Only</button>
                <AddNewPost user={user} nextID={nextPostID} />

            </div>

            
            <div className="search-bar">
                <input className = "search-input" type="text" placeholder = "Input keyword here..." onChange={handleChangeByKeyword} />
                <button className="btn" type="submit" onClick={handleClickByKeyword} >Search</button>
            </div>

            {popTarget &&
            <div className="keyword-box">
                <h4>{`All posts with "${keyword}" `}</h4>
                <li className="post-item">
                <Posts post={targetpost} user={targetpost.user.name} comments={comments2.filter(comment => comment.targetpost.id === targetpost.id)}/>
                </li>
            </div> }
         
            
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