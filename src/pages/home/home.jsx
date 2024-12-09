import { useState } from 'react';
import Feed from '../../components/feed/feed';
import Sidebar from '../../components/sidebar/sidebar';
import './home.css';


const Home = ({sideBar,text}) => {

  const [cat,setCat]=useState(0)

  return (
    <>
      <Sidebar sideBar={sideBar} catrgory={cat} setCategory={setCat}/>
      <div className={`container ${sideBar ? "":"large-container"}`}>
        <Feed catrgory={cat} text={text}/>
      </div>
    </>
  )
}

export default Home