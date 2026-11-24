import React from 'react'
import "./navbar.css"
import { Search,SquareExclamationPoint,UserRound} from 'lucide-react';

const Navbar = () => {
  return (
    <div className="mainnavbarContainer">
      <div className="logoContainer">
        <h1 className="dashtext">Dashboard</h1>
      </div>
      <div className="searchItemContainer">
        <Search size={20} color="#434343" />
        <input type="search" placeholder="Search" className="searchInput" />
      </div>
      <div className="profileItemContainer">
              <SquareExclamationPoint size={20} color="#434343"  />
         <div className="profileItems">
          <div className="profileIcon">
            <UserRound size={20} color="#434343"  />
          </div>
            <p>Suman</p>
         </div>
      </div>
    </div>
  )
}

export default Navbar