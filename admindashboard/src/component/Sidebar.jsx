import React from 'react'
import "./sidebar.css"
import { Home,Check,HandCoins,Settings,Mail,Clock,CalendarCheck2 } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="mainsidebarContainer">
      <div className="sidebarContainer">
       
        <ul className="ulContainer">
          <h4 className="menu">Menu</h4>
          <li className="liContainer">
            <Home size={20} color="#434343" />
            <p className='itemNames'>Home</p>
          </li>
          <li className="liContainer">
            <Check size={20} color="#434343" />
            <p className='itemNames'>Daily Task</p>
          </li>
          <li className="liContainer">
            <HandCoins size={20} color="#434343" />
            <p className='itemNames'>Team Members</p>
          </li>
          <li className="liContainer">
            <Settings size={20} color="#434343" />
            <p className='itemNames'>Settings</p>
          </li>
          <li className="liContainer">
            <Mail size={20} color="#434343" />
            <p className='itemNames'>Salary</p>
          </li>
          <li className="liContainer">
            <Clock size={20} color="#434343" />
            <p className='itemNames'>Monthly Income</p>
          </li>
          <li className="liContainer">
            <CalendarCheck2 size={20} color="#434343" />
            <p className='itemNames'>Calendar Check2</p>
          </li>
 
   
        </ul>
        <div className='scheduleBlock'>
          <h4 >Schedule Events</h4>
          <div className='schedulemain'>
          <div className='scheduleContainer'>
            <input type="radio"  value={"Hubby Day"} name="schedule" />
            <label htmlFor="">Hubby Day</label>
          </div>
          <div className='scheduleContainer'>
            <input type="radio"  value={"Sis Aniversary"} name="schedule" />
            <label htmlFor="">Sis Aniversary</label>
          </div>
          <div className='scheduleContainer'>
            <input type="radio"  value={"Bestie Wedding"} name="schedule" />
            <label htmlFor="">Bestie Wedding</label>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar