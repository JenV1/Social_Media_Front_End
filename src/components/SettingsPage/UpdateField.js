const UpdateField = ({fieldName, onClick, onChange, buttonName}) => {

    return(
        <>
            <label htmlFor={fieldName}>Update {fieldName}: </label>
            <input type="text" id={fieldName} name={fieldName} onChange={onChange}
            onKeyDown ={(event) => {if (event.key == 'Enter')
            document.querySelector(`.${buttonName}Button`).click()}} />
            <button type="button" onClick={onClick} className={`${buttonName}Button`}>Save {fieldName}</button>
        </>
    )
}

export default UpdateField;