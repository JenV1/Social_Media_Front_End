const UpdateField = ({fieldName, onClick, onChange, buttonName}) => {

    //each field has a label telling you what you are updating
    //an input field which you can also submit by pressing enter
    //and a button to submit the field
    return(
        <div className="UpdateField">
            <label htmlFor={fieldName}>Update Your {fieldName}: </label>
            <input type="text" id={fieldName} name={fieldName} onChange={onChange}
            onKeyDown ={(event) => {if (event.key == 'Enter')
            document.querySelector(`.${buttonName}Button`).click()}} />
            <button type="button" onClick={onClick} className={`${buttonName}Button`}>Save {fieldName}</button>
        </div>
    )
}

export default UpdateField;
