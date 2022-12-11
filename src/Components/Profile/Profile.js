import PropTypes from "prop-types";
function Profile(props){
    return(
        <div >
        <img src={props.myPic} width="100px" alt ="Myphoto" />
        <h3>{props.fullName} - {props.profession} </h3>
        <h5 style = {{color: "skyblue"}}>{props.bio}</h5>
        </div>  
    );
};
Profile.propTypes = {fullName: PropTypes.string, profession: PropTypes.string, bio: PropTypes.string }; //not doing any checks? test?
Profile.defaultProps = {fullName : "Guest" , bio : "Unknown" , profession : "Unknown"};
export default Profile;