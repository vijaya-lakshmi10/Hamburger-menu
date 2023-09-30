// Write your code here
import './index.css'
import Header from '../Header'
const Home=()=>(
    <div className="home-container">
    <Header/>
    <div className="home-image-container">
    <img src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png" className="home-sm-img" alt="home"/>
    <img src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png" className="home-lg-img" alt="home"/>
    </div>
    </div>
)
export default Home
