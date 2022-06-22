import React, { useEffect, useState } from "react";
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";


const Search = () => {

    // search by keyword
    const [contentsByKeyword, setContentsByKeyword] = useState("");
    const [keyword, setKeyword] = useState("");
    const [targetpost, setTargetPost] = useState({})

    // catch the keyword value
    const handleChangeByKeyword = (event) =>{
        const currentValue = event.target.value;
        setKeyword(currentValue)
        console.log(currentValue)
    }

    const [posts, setPosts] = useState([]);

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
        
        posts.map(post =>{
            if (post.content_text === contentsByKeyword) {
                console.log(post)
                setTargetPost(post);
            } 
        })

        return(
            <h1>{targetpost}</h1>
        )
        

    }


    }





  return (
    <div>
        <input type="text" placeholder="Search By Keyword" onChange={handleChangeByKeyword} />
        <button type="submit" onClick={handleClickByKeyword}>Click Me!</button>

    </div>

  );
}

export default Search;