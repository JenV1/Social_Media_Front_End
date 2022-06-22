import { useState } from "react"

const UpdateField = ({fieldName, onClick, onChange, inputValue, buttonName,
    isPasswordField, checkPassword, showErrorMessage, onCheckPasswordChange}) => {

    //each field has a label telling you what you are updating
    //an input field which you can also submit by pressing enter
    //and a button to submit the field
    const normalField = (
        <div className="UpdateField">
            <label htmlFor={fieldName}>Update Your {fieldName}: </label>
            <input type="text" id={fieldName} name={fieldName} 
                placeholder={`New ${fieldName}`} onChange={onChange} value={inputValue}
                onKeyDown ={(event) => {if (event.key == 'Enter')
                     document.querySelector(`.${buttonName}Button`).click()}} />
            <button type="button" onClick={onClick} className={`${buttonName}Button`}>Save {fieldName}</button>
        </div>
    )

    // added functionality for the password field to check if passwords match
    // and to choose if passwords are displayed or not
    const errorMessage = (
        <p>Passwords do not match, please try again</p>
    )
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const passwordField = (
        <div className="UpdateField UpdatePasswordField">
            <label htmlFor="password">Update Your Password:</label>
            <input type={showPassword ? "text" : "password"} id="password" name="password"
                placeholder={"New Password"} onChange={onChange} value={inputValue}
                onKeyDown ={(event) => {if (event.key == 'Enter')
                     document.querySelector(`.passwordButton`).click()}} />
            <input type={showPassword ? "text" : "password"} id="checkPassword-input" name={fieldName} 
                placeholder="Confirm New Password" onChange={onCheckPasswordChange} value={checkPassword}
                onKeyDown ={(event) => {if (event.key == 'Enter')
                     document.querySelector(`.passwordButton`).click()}} />
            {showErrorMessage ? errorMessage : null}       
            <button type="button" onClick={onClick} className={"passwordButton"}>Save {fieldName}</button>
            <button onClick={handleShowPassword}>{showPassword ? "Hide" : "Show"} Password</button>
        </div>
    )

    return(
        <>
            {isPasswordField ? passwordField : normalField}
        </>
    )
}

export default UpdateField;
