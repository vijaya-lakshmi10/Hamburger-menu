// Write your code here
import Header from '../Header'
import './index.css'
const NotFound=()=>(
    <div className="not-found-container">
    <Header/>
    <div className="not-found-content-container">
    <div className="sub-container">
    <img src="https://assets.ccbp.in/frontend/react-js/not-found-img.png" alt="not found" className="not-found-img"/>
    <h1 className="not-found-heading">Lost Your Way?</h1>
    <p className="not-found-desc">Sorry, we cannot find that page. You will find lots to explore on the home page</p>
    </div>
    </div>
    </div>
)
export default NotFound