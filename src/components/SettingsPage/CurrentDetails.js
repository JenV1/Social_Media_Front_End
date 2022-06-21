import { useState, useEffect } from "react";

const CurrentDetails = ({user}) => {
    const {company, date_of_birth, is_business_account, name, password, role} = user;

    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => {
        setShowPassword(!showPassword)
    }
    

    return(
        <>
            <h3>Profile Information</h3>
            <p><b>Name: </b> {name}</p>
            <p><b>Password: </b> {showPassword ? password : "*****"}</p>
            <button onClick={handleClick}>Show/hide password</button>
            <p><b>Date of Birth: </b> {date_of_birth}</p>
            <p><b>Company: </b> {company}</p>
            <p><b>Role: </b> {role}</p>
            <p><b>Bussiness account: </b> {is_business_account ? "Yes" : "No"}</p>
        </>
    )

}

export default CurrentDetails;