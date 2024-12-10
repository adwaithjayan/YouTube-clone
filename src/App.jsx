import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/home"
import Video from "./pages/video/video"
import { useState } from "react"

const App = () => {

  const [sideBar,setSideBar]=useState(true)


  return (
    <div>
      <Navbar setSideBar={setSideBar} />
      <Routes>
        <Route path="/" element={<Home sideBar={sideBar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App