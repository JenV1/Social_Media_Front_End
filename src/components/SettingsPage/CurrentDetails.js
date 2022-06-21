import { useState, useEffect } from "react";

const CurrentDetails = ({user}) => {
    const {company, date_of_birth, is_business_account, name, password, role} = user;

    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => {
        setShowPassword(!showPassword)
    }
    

    return(
        <section className="ProfileInformation">
            <h3>Profile Information</h3>
            <p><b>Name: </b> {name}</p>
            <p id="showPassword"><b>Password: </b> {showPassword ? password : "*****"}</p>
            <button onClick={handleClick}>{showPassword ? "Hide" : "Show"} password</button>
            <p><b>Date of Birth: </b> {date_of_birth}</p>
            <p><b>Company: </b> {company}</p>
            <p><b>Role: </b> {role}</p>
            <p><b>Bussiness account: </b> {is_business_account ? "Yes" : "No"}</p>
        </section>
    )

}

export default CurrentDetails;