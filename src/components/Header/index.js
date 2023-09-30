// Write your code here
import {Link,withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'
const Header=()=>(
    <div className="navbar">
    <div className="nav-content">
    <Link to="/">
    <img src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png" className="logo" alt="website logo"/>
    </Link>
    <Popup modal trigger={
        <button className="hamburger-icon-button" type="button" data-testid="hamburgerIconButton"><GiHamburgerMenu size="30"/></button>
    } className="popup-content">
    {close =>(
        <div className="close-container">
        <button className="close-button" type="button" data-testid="closeButton" onClick={()=>close()}><IoMdClose size="30" color="#616e7c"/></button>
        <ul className="nav-list">
        <li className="list-items">
        <Link className="nav-link" to="/" onClick={()=>close()}>
        <AiFillHome size="36"/>
        <p className="desc">Home</p>
        </Link>
        </li>
        <li className="list-items">
        <Link className="nav-link" to="/about" onClick={()=>close()}>
        <BsInfoCircleFill size="32"/>
        <p className="desc">About</p>
        </Link>
        </li>
        </ul>
        </div>
    )}
    </Popup>
    </div>
    </div>
)
export default withRouter(Header)
