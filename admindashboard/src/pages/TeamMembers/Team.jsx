import React from 'react'
import "./team.css"
import Sidebar from '../../component/Sidebar'
import TeamMembers from '../../component/TeamMembers'

const Team = () => {
  return (
    <div className='teamContainer'>
       <Sidebar/> 
        <TeamMembers/>
        
        </div>
  )
}

export default Team