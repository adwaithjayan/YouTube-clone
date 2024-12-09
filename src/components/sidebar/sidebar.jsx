import './sidebar.css'

import homeImage from '../../assets/home.png'
import game from '../../assets/game_icon.png'
import automobile from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blog from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({sideBar,catrgory,setCategory}) => {
  return (
    <div className={`sidebar ${sideBar ? "":"small-sidebar"}`}>
        <div className="shortcut-links ">
            <div className={`side-link ${catrgory ===0 && "active"}`}  onClick={()=>setCategory(0)}>
                <img src={homeImage} alt="home image" />
                <p>Home</p>
            </div>
            <div className={`side-link ${catrgory ===20 && "active"}`} onClick={()=>setCategory(20)}>
                <img src={game} alt="home image" />
                <p>Gaming</p>
            </div>
            <div className={`side-link ${catrgory ===2 && "active"}`} onClick={()=>setCategory(2)}>
                <img src={automobile} alt="home image" />
                <p>Automobiles</p>
            </div>
            <div className={`side-link ${catrgory ===17 && "active"}`} onClick={()=>setCategory(17)}>
                <img src={sports} alt="home image" />
                <p>Sports</p>
            </div>
            <div className={`side-link ${catrgory ===24 && "active"}`} onClick={()=>setCategory(24)}>
                <img src={entertainment} alt="home image" />
                <p>Entertainment</p>
            </div>
            <div className={`side-link ${catrgory ===28 && "active"}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt="home image" />
                <p>Technology</p>
            </div>
            <div className={`side-link ${catrgory ===10 && "active"}`} onClick={()=>setCategory(10)}>
                <img src={music} alt="home image" />
                <p>Music</p>
            </div>
            <div className={`side-link ${catrgory ===22 && "active"}`} onClick={()=>setCategory(22)}>
                <img src={blog} alt="home image" />
                <p>Blog</p>
            </div>
            <div className={`side-link ${catrgory ===25 && "active"}`} onClick={()=>setCategory(25)}>
                <img src={news} alt="home image" />
                <p>News</p>
            </div>
            <hr/>
            <div className="subscribes">
                <h3>Subscribrd</h3>
                <div className="side-link flex-div">
                    <img src={jack} alt="jack" />
                    <p>PewDiePie</p>
                </div>
                <div className="side-link flex-div">
                    <img src={simon} alt="jack" />
                    <p>MrBeast</p>
                </div>
               
                <div className="side-link flex-div">
                    <img src={megan} alt="jack" />
                    <p>5-Minute Crafts</p>
                </div>
                <div className="side-link flex-div">
                    <img src={cameron} alt="jack" />
                    <p>Nas Daily</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar