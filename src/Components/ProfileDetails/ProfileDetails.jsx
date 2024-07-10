import React from 'react'
import "./ProfileDeatils.css"
const ProfileDetails = ({Userdeatils}) => {
  console.log(Userdeatils)
  return (
    <>
     <div className="ProfileDetails">
        <h2>!!!!User Details!!!!</h2>
            <h1><span className='green-profile'>Name-</span>{Userdeatils.name}</h1>
            <h1><span className='green-profile'>Email-</span>{Userdeatils.email}</h1>
            <h1><span className='green-profile'>Phone-</span>{Userdeatils.phone}</h1>
            <h1><span className='green-profile'>Address-</span>{Userdeatils.address}</h1>
    </div>
    </>
  )
}

export default ProfileDetails