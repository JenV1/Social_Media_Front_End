import { useState } from "react";
import UpdateField from "./UpdateField";

const UpdateForm = ({user}) => {

    const {id, name, company, password, date_of_birth} = user;

    //values that are collected from the inputs of the update fields
    const [newPassword, SetNewPassword] = useState(password);
    const [newName, setNewName] = useState(name);
    const [newCompany, setNewCompany] = useState(company);
    const [newDOB, setNewDOB] = useState(date_of_birth);

    //methods to update the values as the input fields are typed in
    const handlePasswordChange = event => SetNewPassword(event.target.value);
    const handleNameChange = event => setNewName(event.target.value);
    const handleCompanyChange = event => setNewCompany(event.target.value);
    const handleDOBChange = event => setNewDOB(event.target.value);

    //methods to send put reuqests with the new values when the button next to each field is clicked
    const handleUpdatePassword = () => {
        fetch(`http://localhost:8080/editPassword/${id}`, {method:"PUT", body:newPassword})
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }
    const handleUpdateName = () => {
        fetch(`http://localhost:8080/editName/${id}`, {method:"PUT", body:newName})
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }
    const handleUpdateCompany = () => {
        fetch(`http://localhost:8080/editCompany/${id}`, {method:"PUT", body:newCompany})
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }
    const handleUpdateDOB = () => {
        fetch(`http://localhost:8080/editDOB/${id}`, {method:"PUT", body:newDOB})
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }

    return(
    <>  
        <div className="UpdateForm">
            <h3>Update Profile Information</h3>
            <UpdateField fieldName={"Username"} onClick={handleUpdateName} onChange={handleNameChange} buttonName={"name"}/>
            <UpdateField fieldName={"Password"} onClick={handleUpdatePassword} onChange={handlePasswordChange}buttonName={"password"}/> 
            <UpdateField fieldName={"Company"} onClick={handleUpdateCompany} onChange={handleCompanyChange} buttonName={"company"}/>
            <UpdateField fieldName={"Date of Birth"} onClick={handleUpdateDOB} onChange={handleDOBChange} buttonName={"DOB"}/>
        </div>
    </>
    )
}

export default UpdateForm;