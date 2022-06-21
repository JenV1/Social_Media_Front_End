const UpdateDetails = ({handleClick}) => {

    return (
        <div className="SettingsButtonContainer">
            <button id="UpdateDetailsButton" onClick={handleClick}>Update Profile Information</button>
            <button href="/">Return to Feed</button>
        </div>
    );
}

export default UpdateDetails;