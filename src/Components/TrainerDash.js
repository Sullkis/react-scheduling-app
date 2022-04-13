import { useState } from "react";

function TrainerDash({updateProfile,ud,Logout}) {

  const [profileData,setProfileData] = useState({
    skill: ud.skill,
    availability: ud.availability
  })

  const [showProfile, setShowProfile] = useState(false)

  const formUpdate = () =>{
    setShowProfile(!showProfile)
  }

  const submitProfile= e =>{
    e.preventDefault()

    updateProfile(profileData.skill,ud.userID, profileData.availability)
    
    formUpdate()
  }
  
  return (
    <div className="TrainerDash">
      {(ud.userType === "trainer") ? ( 
        <div>
        <div className="trainer-dash-box-smaller">
        <button className="btn btn-pos1" >Create Course</button>
        <button className="btn btn-pos1" >Create Course</button>
        </div>
        <div className="trainer-dash-box">
          <h1>Welcome, {ud.name}</h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button className="btn btn-pos1" onClick={formUpdate}>Update Profile</button>
          <button className="btn btn-pos1">View Timetable</button>
          <button className="btn btn-pos" style={{backgroundColor:"#4427fa"}} onClick={Logout}>Logout</button>
          
  
        <p><b>Profile:</b>Skill(s): {ud.skill}, General Availability: {ud.availability}</p>
        {showProfile && <form onSubmit={submitProfile}>
          <label>Skill:</label>
          <input type="text" name="newSkill" id="newSkill" value={profileData.skill} onChange={e => setProfileData({...profileData, skill: e.target.value})}/>
          <label>Availability: </label>
          <input type="text" name="availability" id="availability" value={profileData.availability} onChange={e => setProfileData({...profileData, availability: e.target.value})}/>
          <input type="submit" value="Update Profile"/>
        </form>}
        </div>
        </div>
      ) : (
        <div>
          <p>You are not authorised here</p>
        </div>
      )}
    </div>
  );
}

export default TrainerDash;