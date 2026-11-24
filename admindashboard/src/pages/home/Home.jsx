import React from 'react'

import Sidebar from "../../component/Sidebar"
import HomerightBar from "../../component/homerightBar/HomerightBar"
import "./new.css"


const Home = () => {
  return (
    <div className="homecontainer">
      <Sidebar />
      <HomerightBar />
     
    </div>
  )
}

export default Home