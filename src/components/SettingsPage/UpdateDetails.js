import UpdateField from "./UpdateField";
import { useState, useEffect } from "react";
import UpdateForm from "./UpdateForm";

const UpdateDetails = () => {
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

    const [showUpdateFields, setShowUpdateFields] = useState(false);
    const [showUpdateDetailsButton, setShowUpdateDetailsButton] = useState(true);
    
    const handleClick = () => {
        setShowUpdateFields(true);
        setShowUpdateDetailsButton(false);
    }

    const handleFormSubmit = (event) => {

        event.preventDefault();

        setShowUpdateFields(false);
        setShowUpdateDetailsButton(true);

        // var apiUsers = [];
        // fetch("http://localhost:8080/list_all_users")
        // .then(response => response.json())
        // .then(response => {
        //     apiUsers = response;
        //     const loggedInUser = apiUsers.filter(
        //         user => user.userLoggedIn
        //     )
        //     setUser(loggedInUser[0])
        // })
        // .catch(error => console.log(error))

    }

    const updateFields = (
       <UpdateForm user={user} handleFormSubmit={handleFormSubmit}/>
    )

    return (
        <>
            {showUpdateDetailsButton ? <button id="UpdateDetails" onClick={handleClick}>Update User Information</button> : null}
            {showUpdateFields ?  updateFields : null}
            
        </>
    );
}

export default UpdateDetails;