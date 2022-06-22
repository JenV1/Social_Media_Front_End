import { useState } from "react";
import UpdateField from "./UpdateField";

const UpdateForm = ({user}) => {

    const {id, name, company, password, date_of_birth} = user;

    //values that are collected from the inputs of the update fields
    const [newPassword, SetNewPassword] = useState(password);
    const [checkPassword, SetCheckPassword] = useState("")
    const [newName, setNewName] = useState(name);
    const [newCompany, setNewCompany] = useState(company);
    const [newDOB, setNewDOB] = useState(date_of_birth);

    // values shown in the input fields - need to be separate so they can be reset to ""
    const [inputPassword, setInputPassword] = useState("")
    const [inputName, setInputName] = useState("")
    const [inputCompany, setInputCompany] = useState("")
    const [inputDOB, setInputDOB] = useState("")

    //methods to update the values as the input fields are typed in
    const handlePasswordChange = event => {SetNewPassword(event.target.value);
        setInputPassword(event.target.value);}
    const handleCheckPasswordChange = event => SetCheckPassword(event.target.value)
    const handleNameChange = event => {setNewName(event.target.value);
        setInputName(event.target.value);}
    const handleCompanyChange = event => {setNewCompany(event.target.value);
        setInputCompany(event.target.value);}
    const handleDOBChange = event => {setNewDOB(event.target.value);
        setInputDOB(event.target.value);}

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    //methods to send put reuqests with the new values when the button next to each field is clicked
    const handleUpdatePassword = () => {
        if(checkPassword === newPassword){
            setShowErrorMessage(false);
            fetch(`http://localhost:8080/editPassword/${id}`, {method:"PUT", body:newPassword})
            .then(result => console.log(result))
            .then(setInputPassword(""))
            .then(SetCheckPassword(""))
            .catch(error => console.log(error))
        } else {
            setShowErrorMessage(true);
        }
    }
    const handleUpdateName = () => {
        fetch(`http://localhost:8080/editName/${id}`, {method:"PUT", body:newName})
        .then(result => console.log(result))
        .then(setInputName(""))
        .catch(error => console.log(error))
    }
    const handleUpdateCompany = () => {
        fetch(`http://localhost:8080/editCompany/${id}`, {method:"PUT", body:newCompany})
        .then(result => console.log(result))
        .then(setInputCompany(""))
        .catch(error => console.log(error))
    }
    const handleUpdateDOB = () => {
        fetch(`http://localhost:8080/editDOB/${id}`, {method:"PUT", body:newDOB})
        .then(result => console.log(result))
        .then(setInputDOB(""))
        .catch(error => console.log(error))
    }

    return(
    <>  
        <div className="UpdateForm">
            <h3>Update Profile Information</h3>
            <UpdateField fieldName={"Username"} onClick={handleUpdateName} onChange={handleNameChange} inputValue={inputName} buttonName={"name"}/>
            <UpdateField fieldName={"Password"} onClick={handleUpdatePassword} onChange={handlePasswordChange} inputValue={inputPassword}
                isPasswordField={true} showErrorMessage={showErrorMessage} checkPassword={checkPassword} onCheckPasswordChange={handleCheckPasswordChange} /> 
            <UpdateField fieldName={"Company"} onClick={handleUpdateCompany} onChange={handleCompanyChange} inputValue={inputCompany} buttonName={"company"}/>
            <UpdateField fieldName={"Date of Birth"} onClick={handleUpdateDOB} onChange={handleDOBChange} inputValue={inputDOB} buttonName={"DOB"}/>
        </div>
    </>
    )
}

export default UpdateForm;