import React, { useEffect, useState } from "react";
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import Posts from "../Posts";


const Search = () => {

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

    const [posts, setPosts] = useState([]);


    const [comments, setComments] = useState([]);

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
    <div>
        <input type="text" placeholder="Search By Keyword" onChange={handleChangeByKeyword} />
        <button type="submit" onClick={handleClickByKeyword}>Click Me!</button>
        {popTarget && <Posts post={targetpost} user={targetpost.user.name} comments={comments.filter(comment => comment.targetpost.id === targetpost.id)}/>
}
        
    </div>

  );
}

export default Search;