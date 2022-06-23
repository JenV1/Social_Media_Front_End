import { useState } from "react";

const CurrentDetails = ({user, hiddenPassword}) => {

    const {company, date_of_birth, is_business_account, name, password, role} = user;

    const [showPassword, setShowPassword] = useState(false);

    //toggles if password is shown or hidden
    const handleClick = () => {
        setShowPassword(!showPassword)
    }
    
    return(
        <section className="ProfileInformation">
            <h3 id="ProfileInformation-heading">Profile Information</h3>
            <p id="ProfileInformation-name"><b>Username: </b> {name}</p>
            <p id="ProfileInformation-password"><b>Password: </b> {showPassword ? password : hiddenPassword}</p>
            <button onClick={handleClick}>{showPassword ? "Hide" : "Show"} password</button>
            <p id="ProfileInformation-DOB"><b>Date of Birth: </b> {date_of_birth}</p>
            <p id="ProfileInformation-company"><b>Company: </b> {company}</p>
            <p id="ProfileInformation-role"><b>Role: </b> {role}</p>
            <p id="ProfileInformation-business"><b>Bussiness account: </b> {is_business_account ? "Yes" : "No"}</p>
        </section>
    )

}

export default CurrentDetails;