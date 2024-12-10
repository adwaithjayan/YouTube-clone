import './navbar.css'

import menuIcon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'


const Navbar = ({setSideBar}) => {

   

  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img src={menuIcon} alt="menu" className='menu-icon' onClick={()=>setSideBar(prev=>!prev)}/>
            <Link to='/'>
            <img src={logo} alt="menu" className='logo'/>
            </Link>
        </div>
        <div className='nav-middle flex-div'>
            <div className="search-box flex-div">
                <input type="text" placeholder='Search' />
                <img src={search} alt="search" />
            </div>
        </div>
        <div className="nav-right flex-div">
            <img src={upload_icon} alt="upload" />
            <img src={more_icon} alt="more" />
            <img src={notification_icon} alt="notification" />
            <img src={profile_icon} alt="profile" className='user-icon' />
        </div>
    </nav>
  )
}

export default Navbar