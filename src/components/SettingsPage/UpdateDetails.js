const UpdateDetails = ({handleClick}) => {


    return (
        <div>
            <button id="UpdateDetailsButton" onClick={handleClick}>Update Profile Information</button>
            <button href="/">Return to Feed</button>
        </div>
    );
}

export default UpdateDetails;